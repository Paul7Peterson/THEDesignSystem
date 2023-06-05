
export type AssertStringKeys<T extends {}> = keyof T extends string ? keyof T : never;


export type AssertString<T> = T extends string ? `${T}` : never;