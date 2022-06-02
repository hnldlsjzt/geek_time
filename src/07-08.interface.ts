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