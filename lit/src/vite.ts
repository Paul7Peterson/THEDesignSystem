/** */
export function ignoreCustomTags () {
  return {
    isCustomElement (tag: string): boolean {
      return tag.endsWith('-lit') || tag.startsWith('z-');
    },
  };
}