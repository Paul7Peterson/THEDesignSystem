import { runScript } from './_shared';

/** Opens a given URL in the default browser 
 * Requires Python installed.
 */
export async function openBrowser (url: string): Promise<void> {
  return runScript(`python -mwebbrowser ${url}`)
    .catch(() => {
      throw new Error('Something went wrong trying to open the browser. Make sure you have "python" installed.');
    });
}

/** Joins an array of lines into a line broken paragraph */
export function joinLines (lines: string[]): string {
  return lines.filter((l) => typeof l === 'string')
    .map((l) => l?.trimEnd())
    .join('\n');
}

export function toPascalCase (text: string): string {
  return text.replace(/(^\w|-\w)/g, (s) => s.replace(/-/, "").toUpperCase());
}

export function capitalize<T extends string> (str: T): Capitalize<T> {
  return (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<T>;
}