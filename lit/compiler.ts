export function ignoreCustomTags () {
  return {
    isCustomElement: (tag: string) => tag.endsWith('-lit') || tag.startsWith('z-'),
  };
}