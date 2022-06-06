/**
 * @name 泛型
 * 泛型：预先不确定的类型，在使用时才确定的类型
 * 把泛型和函数参数同等对待，它只是另一个维度的参数，是代表类型而不是代表值的参数。是函数参数是代表值
 * 通常泛型是用在函数或类上，具体有函数定义，类、interface、type 定义
 * 类的静态成员不能使用 泛型 
 * 使用 <T> 表示，通常定义在函数名后面，例如 function log<T>(value:T):T{}
 */

// 函数使用泛型：输入什么类型，函数就返回什么类型
function log<T>(value: T): T {
    console.log('泛型打印', typeof value, value);

    return value
}
// 不用指定类型，靠类型推导
log('1')
log(1)
log([1, 2, 3])
log(['a', 'b', 'c'])
// 显示指定类型
log<string>('1')
log<number>(1)
log<number[]>([1, 2, 3])

interface iLog {
    // 直接把泛型定义在方法中，只有这个方法能使用这个泛型
    <T>(value: T): T
}
// 把泛型定义在接口名称中，接口中所有属性都能使用该泛型
interface iLog1<T> {
    (value: T): T
}

// 使用 接口 声明
const myLog: iLog1<number> = log
myLog(1)

// 使用 type 声明
type Log<T> = (value: T) => T
const myLog1: Log<number> = log
myLog1(1)


// 泛型类
class LogClass<T> {
    run(value: T) {
        console.log('run: ', value);
        return value
    }
}
const log1 = new LogClass<number>()
// 类型“string”的参数不能赋给类型“number”的参数。ts(2345)
// log1.run('1')

// ok
log1.run(1)

// 在运行时传入，不必显示传入类型
const log2 = new LogClass();
log2.run({ a: 1 })

// 泛型约束，使用 extends,让传入的泛型必需具有特定属性
interface Length {
    length: number
}
function logAdvance<T extends Length>(value: T): T {
    console.log('value: ', value, value.length);
    return value
}
// 类型“number”的参数不能赋给类型“Length”的参数。ts(2345)
// logAdvance(1)

// ok
logAdvance('1')
logAdvance([])
logAdvance({ length: 1 })

export default {}
