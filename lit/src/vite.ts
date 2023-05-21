export function ignoreCustomTags () {
  return {
    isCustomElement (tag: string) {
      return tag.endsWith('-lit') || tag.startsWith('z-');
    },
  };
}