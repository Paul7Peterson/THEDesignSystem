import type { LitElement } from 'lit';

/** */
export function eventName (attribute: string) {
  return `change:${attribute}`;
}

/** */
export function emitEvent (
  ctx: LitElement,
  { target }: Event,
  eventName: string,
) {
  const { value } = target as HTMLInputElement;
  // console.log(ctx.localName, ' > ', eventName);

  ctx.dispatchEvent(new CustomEvent(eventName, {
    detail: value,
    bubbles: true,
  }));
}
