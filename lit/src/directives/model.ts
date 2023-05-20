import type { Directive, DirectiveBinding } from 'vue';
import { eventName as litEventName } from '../utils';

function onEvent (e: Event, target: Record<string, any>, arg: string) {
  target[arg] = (e as CustomEvent).detail.value;
}

function argName (binding: DirectiveBinding<any>): string {
  return binding.arg || 'model-value';
}

function eventName (binding: DirectiveBinding<any>) {
  return litEventName(argName(binding));
}

/** */
export const litModelDirective: Directive<any, any> = {
  beforeMount (el: HTMLElement, binding: DirectiveBinding<any>) {
    el.setAttribute(argName(binding), binding.value);
  },
  updated (el: HTMLElement, binding: DirectiveBinding<any>) {
    el.setAttribute(argName(binding), binding.value);
  },
  mounted (el: HTMLElement, binding: DirectiveBinding<any>) {
    // const x = binding.instance?.$el;
    // console.log(x);
    // @ts-ignore
    const vars = binding.instance?.$.setupState as any;
    el.addEventListener(eventName(binding), (e) =>
      onEvent(e, vars, argName(binding)));
  },
  beforeUnmount (el: HTMLElement, binding: DirectiveBinding<any>) {
    el.removeEventListener(eventName(binding), (e) =>
      onEvent(e, binding, argName(binding)));
  },
};
