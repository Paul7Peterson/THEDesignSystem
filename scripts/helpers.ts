import { runScript } from './_shared';
import * as path from 'path';
import * as fs from 'fs';

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


/**
 * Returns paths of all files in the target directory.
 * @param dirPath path to the target directory
 */
export function getFilePaths (dirPath: string): string[] {
  if (!fs.existsSync(dirPath)) return [];

  return fs.readdirSync(dirPath).reduce((t, file) => {
    if (fs.statSync(dirPath + '/' + file).isDirectory())
      return [...t, ...getFilePaths(dirPath + '/' + file)];

    t.push(path.join(dirPath, '/', file));
    return t;
  }, [] as string[]);
}

/** */
export async function readFile (path: string): Promise<string> {
  if (!fs.existsSync(path))
    throw new Error(`File ${path} does not exist.`);

  return new Promise<string>((resolve, reject) => {
    fs.readFile(path, (error, data) => {
      if (error) reject(error);
      resolve(data.toString('utf8'));
    });
  });
}