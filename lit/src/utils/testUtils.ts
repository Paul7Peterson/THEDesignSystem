
export function getLitComponent (componentName: string): ShadowRoot | null {
  return document.body.querySelector(componentName)?.shadowRoot || null;
}

export function render (template: string): ShadowRoot {
  document.body.innerHTML = template;

  const match = template.match(/<[a-z]+-[a-z]+/)?.[0];
  if (!match) throw new Error(`No tag found.`);

  const root = getLitComponent(match.slice(1));
  if (!root) throw new Error(`No component found.`);
  return root;
}