import { runZX } from './runZX';
import * as path from 'path';
import * as fs from 'fs';
import { capitalize, joinLines, toPascalCase } from './helpers';

interface ComponentDocs {
  name: string;
  hasEvents?: true;
}

const components: ComponentDocs[] = [
  { name: 'z-icon' },
  { name: 'z-button' },
  { name: 'z-text-input', hasEvents: true },
];

/** */
runZX(__filename, async () => {
  await Promise.all([
    writeReactTypes(),
    writeVueTypes(),
  ]);
});

async function writeReactTypes () {
  fs.writeFileSync(path.resolve('lit', 'src', 'types', 'react.types.ts'), joinLines([
    `import type * as Z from '../components';`,
    `import type { ReactLitComponent } from './reactHelpers.types';`,
    ``,
    `/** Dictionary of components with specifications for React */`,
    `export interface ReactComponents {`,
    ...components.map((c) => buildComponentDocs(c, 'react')),
    `}`,
  ]));
}

async function writeVueTypes () {
  fs.writeFileSync(path.resolve('lit', 'src', 'types', 'vue.types.ts'), joinLines([
    `import type * as Z from '../components';`,
    `import type { VueLitComponent } from './vueHelpers.types';`,
    ``,
    `/** Dictionary of components with specifications for Vue 3 */`,
    `export interface VueComponents {`,
    ...components.map((c) => buildComponentDocs(c, 'vue')),
    `  /** ## \`<test-lit>\` */`,
    `  TestLit: VueLitComponent<Z.TestLitProps>;`,
    '}',
    '',
    `declare module '@vue/runtime-core' {`,
    `  interface GlobalComponents extends VueComponents { }`,
    `}`,
  ]));
}

function buildComponentDocs ({ name, hasEvents }: ComponentDocs, framework: 'vue' | 'react'): string {
  const parsedName = framework === 'vue' ? toPascalCase(name) : `'${name}'`;
  const compType = `${capitalize(framework)}LitComponent`;
  const emits = hasEvents ? `, Z.${toPascalCase(name)}Emits` : '';
  return joinLines([
    `  /** ## \`<${name}>\` */`,
    `  ${parsedName}: ${compType}<Z.${toPascalCase(name)}Props${emits}>;`
  ]);
}