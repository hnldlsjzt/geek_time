
/**
 * 高级类型 - 索引类型
 * 
 * 
 */

let obj = {
    a: 1,
    b: 2,
    c: 3
}
function getValus(obj: any, keys: string[]) {
    return keys.map(key => obj[key])
}

console.log(getValus(obj, ['a', 'b'])); // [ 1, 2 ]

console.log(getValus(obj, ['d', 'f'])); // [ undefined, undefined ]

// 改造成，当输入了不属于对象中的 key 时，ts 就提示报错

function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key])
}
console.log(getValues(obj, ['a', 'b'])); // [ 1, 2 ]

console.log(getValues(obj, ['d', 'f'])); // error

// keyof T，返回一个 由 T 对象中 key 组成的联合类型，
interface Obj {
    a: string
    b: number
}
let t: keyof Obj // a | b
t = 'a'

// 索引类型，跟 js 一样
let value: Obj['b'] = 1 // number
