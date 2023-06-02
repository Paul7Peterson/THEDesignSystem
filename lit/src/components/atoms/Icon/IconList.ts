import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

import { default as cross } from './icons/cross.svg?raw';
import { default as check } from './icons/check.svg?raw';

export const ICON = {
  check: unsafeSVG(check),
  cross: unsafeSVG(cross),
} as const;