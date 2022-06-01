// 枚举类型：主要解决一些硬编码，提高可读性，可复用性问题

// 数字枚举,也成为反向映射。 a = 1,Role[1]: a
export enum Role {
    a = 1,
    b,
    c
}
console.log(Role, Role[1], Role.a)
// 字符串枚举
enum Message {
    Success = '成功',
    Fiil = '失败'
}
console.log('Message: ', Message);

// 异构枚举 -- 混合数字和字符串枚举，但很少会这么做
enum Answer {
    N,// 0
    Y = 'yes'
}
console.log('Answer: ', Answer);

// 
/**
 * @name 常量枚举 -- 用 const 声明的是常量枚举 --
 * 它打包后，会被剔除掉，可以减少编译环境的代码
 * 应用场景： 当不需要对象，仅需要对象值的时候，可以使用 
 */
const enum Numbers {
    A,
    B,
    C,
    D = 5,
    F, // 6
    // getAge = () => 28 // error
}
const enum Month {
    Jan,
    Feb,
    Mar,
    Apr = Month.Mar + 1,
    May = Apr + 1
}

// 在打包后，Month 的枚举会被删除，变成如下代码
// var month = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */];

const month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
// enum E { a, b }
// enum F { a = 0, b = 1 }
// let e: E = 3
// let f: F = 3
enum E { a, b }
enum F { a = 0, b = 1 }

// 某些情况下，枚举和枚举成员都可以作为单独的类型存在
/**
 * 第一种： 没有定义值
 * 2：全是number
 * 3：全是字符串
 */
let e: E = 3
let f: F = 3
// 两种不同的 枚举类型不能比较，
console.log(E === F);// false
// 数字枚举：值可以  超出定义的成员，任意数字即可
let e1: E.a = Number(1);
let e2: E.b = 4;
// 不同的枚举类型成员也不能比较
e1 === e2

enum G { a = 'apple', b = 'banana' }
// 字符串枚举，枚举值只能是枚举成员
let g1: G.a = G.a// 还不能是 apple
let g2: G = G.b// 还不能是 apple
console.log(g1, g2)


