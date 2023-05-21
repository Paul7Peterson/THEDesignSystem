// import type { Directive, DirectiveBinding } from 'vue';
import { eventName as litEventName } from '../utils';

type Binding<T = any> = import('vue').DirectiveBinding<T>;
type Directive<T = any, U = any> = import('vue').Directive<T, U>;


function onEvent (e: Event, target: Record<string, any>, arg: string) {
  target[arg] = (e as CustomEvent).detail.value;
}

function argName (binding: Binding): string {
  return binding.arg || 'model-value';
}

function eventName (binding: Binding) {
  return litEventName(argName(binding));
}

/** */
export const litEventDirective: Directive = {
  mounted (el: HTMLElement, binding: Binding) {
    // @ts-ignore
    const vars = binding.instance?.$.setupState as any;
    el.addEventListener(eventName(binding), (e) =>
      onEvent(e, vars, argName(binding)));
  },
  beforeUnmount (el: HTMLElement, binding: Binding) {
    el.removeEventListener(eventName(binding), (e) =>
      onEvent(e, binding, argName(binding)));
  },
};


/** */
export const litModelDirective: Directive = {
  beforeMount (el: HTMLElement, binding: Binding) {
    el.setAttribute(argName(binding), binding.value);
  },
  updated (el: HTMLElement, binding: Binding) {
    el.setAttribute(argName(binding), binding.value);
  },
  ...litEventDirective,
};

