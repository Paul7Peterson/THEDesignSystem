

interface HTMLBase {
  name: string,
  description?: string,
}

export interface HTMLTag extends HTMLBase {
  references?: {
    name: string;
    url: string;
  }[];
  attributes?: HTMLTag_Attribute[];
}

export interface HTMLTag_Attribute extends HTMLBase {

  values?: HTMLTag_Attribute_Value[];
}

interface HTMLTag_Attribute_Value extends HTMLBase {

}

export type ComponentDocs = readonly [HTMLTag, { hasProps: boolean, hasEvents: boolean; }];

export interface AttrInfo {
  docs?: string;
  isOptional: boolean;
  type: string;
}

export interface FilesContent {
  name: string,
  main: { description?: string; },
  props: Partial<Record<'props' | 'emits', Record<string, AttrInfo>>>;
}