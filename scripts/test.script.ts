import { runZX } from './runZX';
import * as path from 'path';
import * as fs from 'fs';
import { capitalize, getFilePaths, joinLines, readFile, toPascalCase } from './helpers';
import type { ComponentDocs, HTMLTag } from './test.types';

/** */
runZX(__filename, async () => {

  const components = await getComponentsDocs();

  console.log(components);

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

const REG = /(export interface (?<emits>Z\w+Emits) {)|(export interface (?<props>Z\w+Props) {)/g;

async function getComponentsDocs (): Promise<ComponentDocs[]> {
  const files = await Promise.all(getFilePaths(path.resolve('lit', 'src', 'components'))
    .map((file) => [file.split('\\').at(-1) || '', file] as const)
    .filter(([name, _]) => name.endsWith('.ts') && !name.endsWith('.spec.ts') && name !== 'index.ts')
    .map(async ([name, file]) => [name.split('.')[0], await readFile(file)]));

  return files.map(([name, fileContent]) => {

    const content = REG.exec(fileContent);

    console.log(content?.groups);

    const result: HTMLTag = {
      name,
      description: '',
    };

    if (!!content?.groups?.props) result.attributes = [];

    return [result, {
      hasEvents: !!content?.groups?.emits,
      hasProps: !!content?.groups?.props,
    }];
  });
}