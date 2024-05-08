type IsEqual<T,U> = [T] extends [U] ? [U] extends [T] ? true : false : false
type Expect<T,U extends T> = [T] extends [U] ? true : false

export type { IsEqual, Expect }