import { runZX } from './runZX';
import * as path from 'path';
import * as fs from 'fs';
import { capitalize, getFilePaths, joinLines, readFile, toPascalCase } from './helpers';
import type { ComponentDocs, HTMLTag, HTMLTag_Attribute } from './test.types';

/** */
runZX(__filename, async () => {

  const components = await getComponentsDocs();

  // console.log(components);

  await Promise.all([
    writeReactTypes(components),
    writeVueTypes(components),
    writeHTMLData(components)
  ]);
});

async function writeReactTypes (components: ComponentDocs[]) {
  fs.writeFileSync(path.resolve('lit', 'src', 'types', 'react.types.auto.ts'), joinLines([
    `import type * as Z from '../components';`,
    `import type { ReactLitComponent } from './reactHelpers.types';`,
    ``,
    `/** Dictionary of components with specifications for React */`,
    `export interface ReactComponents {`,
    ...components.map((c) => buildComponentDocs(c, 'react')),
    `}`,
  ]));
}

async function writeVueTypes (components: ComponentDocs[]) {
  fs.writeFileSync(path.resolve('lit', 'src', 'types', 'vue.types.auto.ts'), joinLines([
    `import type * as Z from '../components';`,
    `import type { VueLitComponent } from './vueHelpers.types';`,
    ``,
    `/** Dictionary of components with specifications for Vue 3 */`,
    `export interface VueComponents {`,
    ...components.map((c) => buildComponentDocs(c, 'vue')),
    '}',
    '',
    `declare module '@vue/runtime-core' {`,
    `  interface GlobalComponents extends VueComponents { }`,
    `}`,
  ]));
}

async function writeHTMLData (components: ComponentDocs[]) {
  fs.writeFileSync(path.resolve('lit', 'web-components.html-data.json'), JSON.stringify({
    $schema: 'https://unpkg.com/vscode-html-languageservice@4.2.0/docs/customData.schema.json',
    version: 1.1,
    globalAttributes: [],
    valueSets: [],
    tags: components.map(([c, _]) => c),
  }, undefined, 2));
}


async function writeCSSData () {
  fs.writeFileSync(path.resolve('lit', 'web-components.css-data.json'), JSON.stringify({
    $schema: 'https://unpkg.com/vscode-css-languageservice@5.1.9/docs/customData.schema.json',
    version: 1.1,
  }, undefined, 2));
}

function buildComponentDocs (
  [{ name, description }, { hasProps, hasEvents }]: ComponentDocs,
  framework: 'vue' | 'react',
): string {
  const parsedName = framework === 'vue' ? toPascalCase(name) : `'${name}'`;
  const compType = `${capitalize(framework)}LitComponent`;
  const signature: string[] = [];

  if (hasProps) signature.push(`Z.${toPascalCase(name)}Props`);
  if (hasEvents) {
    if (!hasProps) signature.push(`{}`);
    signature.push(`Z.${toPascalCase(name)}Emits`);
  };
  return joinLines([
    `  /** ## \`<${name}>\` ${description} */`,
    `  ${parsedName}: ${compType}${signature.length ? `<${signature.join(', ')}>` : ''};`
  ]);
}

const REG_Props = /export interface (?<props>Z[\w]+Props) {(?<propsContent>\n(.|\n|\r|\t)*?)\n}\n\n/gm;
const REG_Emits = /export interface (?<emits>Z[\w]+Emits) {(?<emitsContent>\n(.|\n|\r|\t)*?)\n}\n\n/gm;

async function getComponentsDocs (): Promise<ComponentDocs[]> {
  const files = await Promise.all(getFilePaths(path.resolve('lit', 'src', 'components'))
    .map((file) => [file.split('\\').at(-1) || '', file] as const)
    .filter(([name, _]) => name.endsWith('.ts') && !name.endsWith('.spec.ts') && name !== 'index.ts')
    .map(async ([name, file]) => [name.split('.')[0], await readFile(file)]));

  return files.map(([name, fileContent]) => {

    const { props, propsContent } = REG_Props.exec(fileContent)?.groups || {};
    REG_Props.exec('');
    const { emits, emitsContent } = REG_Emits.exec(fileContent)?.groups || {};
    REG_Emits.exec('');
    const description = '';

    const parsedProps = parseInterface(propsContent);
    const parsedEmits = parseInterface(emitsContent);

    // console.log({ parsedProps, parsedEmits });

    const result: HTMLTag = { name };

    if (description) result.description = description;
    if (!!props && parsedProps && Object.keys(parsedProps).length)
      result.attributes = Object.entries(parsedProps).map(([k, v]) => ({
        name: k,
        description: v.docs
      } satisfies HTMLTag_Attribute));

    return [result, {
      hasEvents: !!emits,
      hasProps: !!props,
    }];
  });
}

function parseInterface (content?: string) {
  let count = 0;
  return content
    ?.split(/(\n[\s]{2})/)
    .filter((s) => s && !s.startsWith('\n'))
    .reduce((t, line) => {
      if (!t[count]) t[count] = [];
      if (line.endsWith(';')) {
        t[count].unshift(line);
        count++;
      } else {
        t[count].push(line);
      }
      return t;
    }, [] as string[][])
    .reduce((t, lines) => {
      const [variable, ...docs] = lines;
      const [name, type] = variable.split(': ');
      const isOptional = name.endsWith('?');

      const parsedDocs = docs.map((d) => d.replace(/(\/\*\* |\*\/)/g, '').trim()).join('  \n');
      const parsedName = isOptional ? name.replace(/.$/, '') : name;

      t[parsedName] = {
        isOptional,
        type: type.replace(/.$/, ''),
      };
      if (parsedDocs) t[parsedName].docs = parsedDocs;
      return t;
    }, {} as Record<string, {
      docs?: string;
      isOptional: boolean;
      type: string;
    }>);
}