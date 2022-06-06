/**
 * 类型推导
 */

// 从由往左推导

// 变量推导
let a = 1;// let a: number
let b = [1, 'a', null]//(string | number | null)[]
let c = {
    a: 1, b: 'b', c: {
        c: 1
    }
}
// {
//     a: number;
//     b: string;
//     c: {
//         c: number;
//     };
// }

let d = (x = 1) => x + 1 // (x?: number) => number
// 以上声明都是从由往左推导（由值推导变量的类型）


// 从左往右推导类型
window.onkeydown = (event) => {
    // 自动推导事件是 KeyboardEvent
    console.log(event.view);
}


/**
 * @name 类型断言
 * TS 在推导时，会尽可能推导出兼容所有类型的类型，虽然比较好用，但难免会出现推导不出来或推导不正确的情况。
 * 在推导不正确时，开发者可以使用 as（类型断言）来告知 TS，这个类型就是如此
 */
interface Foo {
    bar: number
}


const foo = {} as Foo
// 下面这条语句，哪怕不写也不会报错
// foo.bar = 1

// 上面更好的方式是
const foo1: Foo = {
    bar: 1
}