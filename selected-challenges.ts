import { Expect } from "./type-challenge-utils"

/**
 * No.189
 * 
 * name: Awaited
 * 
 * description: ...
 */
type MyAwaited<T> = T extends null|undefined ? T : T extends PromiseLike<infer R> ? 
R extends PromiseLike<any> ? MyAwaited<R> : R : T
// test cases
type Test_189_1_Data = Promise<Promise<Promise<number>>>
type Test_189_1 = Expect<Expect<MyAwaited<Test_189_1_Data>,number>,true> //pass
type Test_189_2 = Expect<Expect<MyAwaited<null>,null>,true> //pass
type Test_189_3 = Expect<Expect<MyAwaited<[string,number]>,[string,number]>,true> //pass


/**
 * No.296
 * 
 * name: Permutation
 * 
 * description: Implement permutation type that transforms union types into the array that includes permutations of unions.
 */
type Permutation<U,UC = U> = [UC] extends [never] ? [] : U extends U ? 
[U,...Permutation<Exclude<UC,U>>]: never
//test cases
type Test_296_1 = Expect<Expect<Permutation<'a'>,['a']>,true> //pass
type Test_296_2 = Expect<Expect<Permutation<'a'|'b'>,['a','b']|['b','a']>,true> //pass
type Test_296_3_Expect = ['a','b','c']|['a','c','b']|['b','a','c']|['b','c','a']|['c','a','b']|['c','b','a']
type Test_296_3 = Expect<Expect<Permutation<'a'|'b'|'c'>,Test_296_3_Expect>,true> //pass


/**
 * No.459
 * name: Flatten
 * description: write a type that takes an array and emitted the flatten array type.
 */
type Flatten<A extends readonly any[],R extends readonly any[]=[]> = A extends [] ? R : 
A extends [infer F,...infer S] ?  F extends any[] ? Flatten<[...F,...S],R> : 
Flatten<S,[...R,F]> : never
//test cases
type Test_459_1 = Expect<Expect<Flatten<[1,[2,3]]>,[1,2,3]>,true> //pass
type Test_459_2 = Expect<Expect<Flatten<[1,[2,3],[[4,5]]]>,[1,2,3,4,5]>,true> //pass
type Test_459_3_Data = [1,[3,4],[[[5]]]]
type Test_459_3 = Expect<Expect<Flatten<Test_459_3_Data>,[1,3,4,5]>,true> //pass


/**
 * N0.612
 * name: CamelCase
 * description: Replace the camelCase or PascalCase string with kebab-case
 */
type CamelCase<T extends string> = T extends `${infer P}_${infer S}` ? 
`${Lowercase<P>}${Capitalize<CamelCase<S>>}` : Lowercase<T>
//test cases
type Test_612_1_Data = 'helloWorldWithTypes'
type Test_612_1 = Expect<Expect<CamelCase<'hello_world_with_types'>,Test_612_1_Data>,true> //pass
type Test_612_2 = Expect<Expect<CamelCase<'HELLO_WORLD_WITH_TYPES'>,Test_612_1_Data>,true> //pass
type Test_612_3 = Expect<Expect<CamelCase<'HELLO'>,'hello'>,true> //pass

