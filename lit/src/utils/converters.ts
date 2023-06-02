import type { ComplexAttributeConverter } from 'lit';

export const dateConverter: ComplexAttributeConverter<Date> = {
  toAttribute: (date: Date) => date.toISOString(),
  fromAttribute: (value: string) => new Date(value),
};