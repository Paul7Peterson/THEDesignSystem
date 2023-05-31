
import * as path from 'path';

const COMPONENTS = {
  atoms: [
    'currency',
    'date',
    'image',
    'icon',
    'number',
    'spinner',
    'tooltip',
  ],
  layouts: [
    'card',
    'modal',
  ],
  molecules: [
    'button',
    'checkbox',
    'chip',
    'label',
    'number-input',
    'output',
    'select',
    'switch',
    'text-input',
  ],
} as const;

function toPascalCase (text: string): string {
  return text.replace(/(^\w|-\w)/g, (s) => s.replace(/-/, "").toUpperCase());
}

/** */
export function chuckParser (): Record<string, string> {
  return Object.entries(COMPONENTS).reduce((t, [cat, elements]) => {
    elements.forEach((element) => {
      const filePath = `src/components/${cat}/${toPascalCase(element)}/z-${element}.ts`;
      t[element] = path.resolve(__dirname, filePath);
    });
    return t;
  }, {} as Record<string, string>);
}
