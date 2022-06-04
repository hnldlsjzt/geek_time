/**
 * 函数的定义
 */
// 通过以下 4 种方式来定义函数
function add(x: number, y: number) {
    return x + y
}

// 通过变量来定义函数
let add1: (x: number, y: number) => number

// 通过 interface 定义
interface add2 {
    (x: number, y: number): number
}

// 通过 type 定义
type add3 = (x: number, y: number) => number

// 同时，在 ts 种函数的形参与实参基本上都是一一对应的。如果要少传参数、或可选、或使用默认值，可使用下面的方式

// 可选参数,可选参数必须在必填参数之后
function add4(x: number, y: number, z?: number) {
    // z 可选
    return z ? x + y + z : x + y
}
console.log('add4', add4(1, 2, 3), add4(1, 2));

// 参数默认值，如默认值后还有必填的值，需要手动传 undefined
function add5(x: number, y = 0, z: number, q = 0) {
    console.log('y', y);

    return x + y + z + q
}

console.log(add5(1, undefined, 3));
// 传 null 时，不会触发默认值
// console.log(add5(1, null, 3));

// 获取剩余参数,如没有手动指定返回值，ts 会自动推导
function add6(x: number, ...rest: number[]) {
    return x + rest.reduce((prev, curr) => prev + curr, 0)
}
console.log('add6', add6(1, 2, 3, 4, 5));


// 函数重载, 获取剩余参数
function add7(...rest: number[]): number
function add7(...rest: string[]): string
function add7(...rest: any[]) {
    let first = rest[0];
    if (typeof first === 'string') {
        return rest.join()
    }
    if (typeof first === 'number') {
        return rest.reduce((prev, curr) => prev + curr, 0)
    }
}
console.log(add7(1, 2, 3, 4));
console.log(add7('a', 'b', 'c', 'd'));

export default {}

