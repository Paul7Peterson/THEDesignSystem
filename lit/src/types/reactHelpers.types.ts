import type { DOMAttributes } from 'react';
import { AssertString } from './_shared.types';

/** */
export type ReactCustomEvents<T extends {}> = Partial<{
  [K in keyof T as `on${Capitalize<AssertString<K>>}`]: (event: CustomEvent) => void
}>;

/** */
export type ReactLitComponent<
  Props extends {} = {},
  Emits extends {} = {},
> =
  & Props
  & DOMAttributes<Props>
  & { children?: any; }
  & ReactCustomEvents<Emits>;