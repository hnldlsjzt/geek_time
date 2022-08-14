/**
 * TS 内置的高阶类型
 * 同态 与 非同态
 */

interface Obj {
    a: string
    b: number
}
// 同态，不会生成新的属性

// 设置属性只读
type ReadonlyObj = Readonly<Obj>

// 选择 -- Pick
type PickObj = Pick<Obj, 'a'>

// type PickObj = {
//     a: string;
// }

// 可选
type PartialObj = Partial<Obj>

// 非同态,会生成新的属性
type RecordObj = Record<'a' | 'b', Obj>
// {
//     a: Obj;
//     b: Obj;
// }
