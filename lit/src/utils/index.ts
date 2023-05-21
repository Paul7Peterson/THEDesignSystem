import type { LitElement } from 'lit';

/** */
export function eventName (attribute: string) {
  return `change:${attribute}`;
}

/** */
export function emitEvent (
  ctx: LitElement,
  { target }: Event,
  attribute: string,
) {
  const { value } = target as HTMLInputElement;

  ctx.dispatchEvent(new CustomEvent(eventName(attribute), {
    detail: value,
    bubbles: true,
  }));
}
