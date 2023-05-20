import type {
  DefineComponent,
  PropType as __PropType,
  ComponentOptionsMixin,
  VNodeProps,
  AllowedComponentProps,
  ComponentCustomProps,
  ExtractPropTypes,
} from 'vue';

type PropTypeDict<T extends {}> = {
  [K in keyof T]: {
    type: __PropType<NonNullable<T[K]>>;
    required: undefined extends T ? false : true;
  }
};

type AssertStringKeys<T extends {}> = keyof T extends string ? keyof T : never;

type FirstLetterToUpper<T> =
  T extends `${infer First}${string}` ? Uppercase<First> : never;

type WithoutFirstLetter<T> =
  T extends `${string}${infer Rest}` ? Rest : never;

type EventCase<T> = `on${FirstLetterToUpper<T>}${WithoutFirstLetter<T>}`;

type TransformEmits<T extends {}> = {
  [K in keyof T as EventCase<K>]: T[K]
};

/** */
export type VueLitComponent<Props extends {} = {}, Emits extends {} = {}> = DefineComponent<
  PropTypeDict<Props>,
  {},
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  AssertStringKeys<Emits>[],
  AssertStringKeys<Emits>,
  VNodeProps & AllowedComponentProps & ComponentCustomProps,
  Readonly<ExtractPropTypes<PropTypeDict<Props>>> & TransformEmits<Emits>,
  {}
>;
