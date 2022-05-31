// 枚举类型：主要解决一些硬编码，提高可读性，可复用性问题

// 数字枚举,也成为反向映射。 a = 1,Role[1]: a
export enum Role {
    a = 1,
    b,
    c
}
console.log(Role, Role[1],Role.a)
// 字符串枚举