export type ReqProp<T extends {}, K extends keyof T> = Required<T>[K];