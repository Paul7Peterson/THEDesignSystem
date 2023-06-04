import type { ComplexAttributeConverter } from 'lit';

/** */
export const dateConverter: ComplexAttributeConverter<Date> = {
  toAttribute: (date: Date) => date.toISOString(),
  fromAttribute: (value: string) => new Date(value),
};

/** */
export const ArrayConverter: ComplexAttributeConverter = {
  toAttribute: (data: unknown[]) => JSON.stringify(data),
  fromAttribute: (value: string) => eval(value),
};

/** */
export const ObjectConverter: ComplexAttributeConverter = {
  toAttribute: (data: unknown) => JSON.stringify(data),
  fromAttribute: (value: string) => eval(value),
};