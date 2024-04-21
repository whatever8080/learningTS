import { Expect } from "./type-challenge-utils"

/**
 * No.189
 * name: Awaited
 * description: ...
 */
//solution
type MyAwaited<T> = T extends null|undefined ? T : T extends PromiseLike<infer R> ? 
R extends PromiseLike<any> ? MyAwaited<R> : R : T
// test case
type Test_189_1 = Expect<MyAwaited<Promise<Promise<Promise<number>>>>,number> //pass
type Test_189_2 = Expect<MyAwaited<null>,null> //pass
type Test_189_3 = Expect<MyAwaited<[string,number]>,[string,number]> //pass
type Test_189_4 = Expect<Expect<MyAwaited<string>,Object>,true> //error report
type Test_189_5 = Expect<Expect<MyAwaited<Object>,string>,true> //error report

