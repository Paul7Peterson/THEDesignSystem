import { exec } from 'child_process';
import * as zx from 'zx';

/** Used to run command scripts */
export function runScript (script: string): Promise<void> {
  console.log('Running script...');

  return new Promise((resolve, reject) => {
    exec(script, (error, stdout, stderr) => {

      if (error) {
        console.log(`> ❌ ${zx.chalk.bold.red(script)}` + '\n');
        console.error(zx.chalk.red(`   > ERROR: ${error}` + '\n'));
        return reject();
      }
      console.log(`> 📜 ${zx.chalk.bold.cyanBright(script)}` + '\n');
      if (stdout)
        console.log(zx.chalk.green(zx.chalk.bold('   > STDOUT: ') + stdout + '\n'));
      if (stderr)
        console.error(zx.chalk.red(zx.chalk.bold('   > STDERR: ') + stderr + '\n'));

      resolve();
    });
  });
}

/** */
export function objectToFlags (obj: Record<string, number | string | null>): string {
  return Object.entries(obj)
    .map(([flag, value]) => `--${flag}${value === null ? '' : ' ' + (typeof value === 'number' ? value : `'${value}'`)}`)
    .join(' ');
}