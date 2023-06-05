import { AssertStringKeys } from './_shared.types';

type PropTypeDict<T extends {}> = Required<{
  [K in keyof T]: undefined extends T[K]
  ? {
    type: import('vue').PropType<T[K]>;
  }
  : {
    type: import('vue').PropType<T[K]>;
    required: true;
  }
}>;


type FirstLetterToUpper<T> =
  T extends `${infer First}${string}` ? Uppercase<First> : never;

type WithoutFirstLetter<T> =
  T extends `${string}${infer Rest}` ? Rest : never;

type EventCase<T> = `on${FirstLetterToUpper<T>}${WithoutFirstLetter<T>}`;

type TransformEmits<T extends {}> = {
  [K in keyof T as EventCase<K>]: T[K]
};

/** */
export type VueLitComponent<
  Props extends {} = {},
  Emits extends {} = {}
> = import('vue').DefineComponent<
  PropTypeDict<Props>,
  {},
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  AssertStringKeys<Emits>[],
  AssertStringKeys<Emits>,
  import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps,
  Readonly<import('vue').ExtractPropTypes<PropTypeDict<Props>>> & TransformEmits<Emits>,
  {}
>;
