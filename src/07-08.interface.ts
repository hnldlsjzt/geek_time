/**
 * @name interface 接口的作用于使用
 */

interface List {
    readonly id: string // 只读
    name: string
    age?: number// 可选
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach(item => {
        console.log(item.id, item.name);
        if (item?.age) {
            console.log(item?.age);
        }
    })
}
const result = {
    data: [{
        id: '1',
        name: '1',
    }, {
        id: '2',
        name: '2',
        age: 18
    }]
}

const interfaceRes = render(result)
export { interfaceRes }

// 数字签名索引类型
interface StringArray {
    [index: number]: string
}
// 索引是 number，但返回值是 string。那就是个字符串数组
const charts: StringArray = ['1', '2']

interface Names {
    // 可以定义多个索引签名类型，但后面的必须是签名的子类型
    // [a: string]: any // 索引类型只能是 string、number、symbol，且不能同时出现重复的类型
    [x: string]: string
    [z: number]: string// 在 js 对象中，数字 key 也会隐式转换成 string
    // ======== 
}
interface Names2 {
    // 可以定义多个索引签名类型，但后面的必须是签名的子类型
    // [a: string]: any // 索引类型只能是 string、number、symbol，且不能同时出现重复的类型
    y: string
    n: number
    // [x: string]: string // 开放了它，其它就只能是 string
    [z: number]: string// 在 js 对象中，数字 key 也会隐式转换成 string
    // 索引签名一旦是 string 类型，那其它普通的属性类型也只能是 string
}
const names: Names = {
    1: '1',
    "2": "2",
    a: ''
}

// =================
/**
 * @name 使用接口来实现函数的定义
 * @description 通常有 4 中方式来定义函数
 * */

// 4.直接使用h函数定义 
function add4(x: number, y: number) {
    return x + y
}
// 后面这 3 种，仅仅是函数的定义
// 1.直接使用变量 -- 函数表达式
let add: (x: number, y: number) => number = (x, y) => {
    return x + y
}
console.log('add(1, 2): ', add(1, 2));


// 2. 使用 interface 定义函数

interface Add {
    (x: number, y: number): number
}
const add1: Add = (x, y) => {
    return x + y
}
console.log('add1: ', add1(1, 2));

// 3.通过 type 来定义函数
type add2 = (x: number, y: number) => number
const add2: add2 = (x: number, y: number) => x + y
console.log('add2: ', add2(1, 2));

// 混合接口 -- 一个声明既有函数，又有属性,通常在第三方的类库中存在
interface Lib {
    (): void,
    version: '1.0',
    doSomething: () => void
}
function getLib() {
    const lib: Lib = () => { }
    lib.version = '1.0'
    lib.doSomething = () => { }
    return lib
}
const lib1 = getLib()
console.log('lib1: ', lib1(), lib1?.version);
