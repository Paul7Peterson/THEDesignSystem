import type { DOMAttributes } from 'react';

/** */
export type ReactCustomEvents<K extends string> = {
  [key in K]: (event: CustomEvent) => void
};

/** */
export type ReactElement<T, K extends string> =
  Partial<T & DOMAttributes<T>
    & { children: any; }
    & ReactCustomEvents<`on${K}`>>;