import { LitElement } from 'lit';

export function eventName (attribute: string) {
  return `change:${attribute}`;
}

export function emitEvent (ctx: LitElement, { target }: Event) {
  const { value } = target as HTMLInputElement;

  ctx.dispatchEvent(new CustomEvent('change:text', {
    detail: value,
    bubbles: true,
  }));
}
