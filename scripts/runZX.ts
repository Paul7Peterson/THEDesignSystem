import * as zx from 'zx';

import { runScript } from './_shared';

export interface ZXTools<T extends {} = typeof zx.argv> {
  /** The arguments provided to the stript */
  args: T,
  /** The ZX API */
  zx: typeof zx,
  /** A function that runs parallel scripts as promises */
  runScript: (script: string) => Promise<void>,
}

export interface ZXOptions {
  /** */
  printArgs?: true,
}

/**
 * A function to run ZX that provides all the functionality as arguments of the predicate.
 * To run the script use:
 *
 * ```sh
 * ts-node --project <path>/tsconfig.json -r tsconfig-paths/register ./<path>/<scriptName>.script.ts
 * ```
 *
 * @param filepath - Use the `__filename` variable.
 * @param predicate - The script that will be run
 *
 * @example In order to use it make sure the first line is present:
 *
 * ```ts
 * #! ./node_modules/.bin/ts-node
 *
 * import { runZX } from './typescript';
 *
 * runZX(__filename, async ({ runScript, args }) => {
 *   await runScript(`echo ${JSON.stringify(args)}`);
 * });
 * ```
 */
export function runZX<T extends {} = typeof zx.argv> (
  filepath: string,
  predicate: (tools: ZXTools<T>) => Promise<void>,
  options?: ZXOptions,
  finallyAction?: () => Promise<void>,
): void {
  if (!filepath.endsWith('.script.ts')) {
    console.log(zx.chalk.red('The script file must be name "<name>.script.ts".'));
    return;
  }

  const fileName = filepath.split('\\').at(-1);

  console.log('Running ' + zx.chalk.bold(`"${fileName}"`) + (options?.printArgs ? ' with arguments: ' : ':'));

  if (options?.printArgs) console.log(zx.argv);
  console.log('\n');

  predicate({ args: zx.argv as any, zx, runScript })
    .then(() => {
      console.log(zx.chalk.greenBright.bold(`\n✅ "${fileName}" done!\n`));
    })
    .catch((error) => {
      console.trace(zx.chalk.red(error || 'Undefined error'));
      console.log(zx.chalk.red(`\n❌ "${fileName}" failed!\n`));
    })
    .finally(async () => {
      finallyAction && await finallyAction();
    });
}
