import type { DOMAttributes } from 'react';

/** */
export type ReactCustomEvents<K extends string> = Partial<{
  [key in K]: (event: CustomEvent) => void
}>;

/** */
export type ReactElement<T, K extends string = ''> =
  & T
  & DOMAttributes<T>
  & { children?: any; }
  & ('' extends K ? {} : ReactCustomEvents<`on${K}`>);