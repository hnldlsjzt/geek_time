/**
 * 类与接口
 */

// 1.类实现接口的时候，必需实现接口所有 声明的属性，但只能约束类的共有成员 。但类可以自己扩展自己属性
/**
 * 接口的继承，不仅可继承单个接口，还可以一次性继承多个接口，合成一个接口。 接口继承可以抽离出常用的接口，然后用组合的方式来达到目的 
 * 同时，类还可以继承接口
 * 
 * 类继承接口 使用 implements
 * 接口继承类 使用 extends
 */

interface Human {
    name: string
    eat(): void
}

// 类继承接口
// 类实现接口的时候，必需实现接口所有 声明的属性，但只能约束类的共有成员 。但类可以自己扩展自己属性
class Asian implements Human {
    // constructor(name: string) {
    //     this.name = name
    // }
    // 如果不使用 constructor，那属性必需有默认值
    name: string = '1';
    eat() { }
    // 可以自己扩展属性，不在控制范围内
    sleep() {
        console.log('喜欢睡觉');
    }
}
// 单个接口继承
interface Man extends Human {
    run(): void
}

interface Child {
    cry(): void
}

// 一次性继承多个接口，此时 Body 已经具备了 man、child 的属性和方法了
interface Boy extends Man, Child {
    boy(): void
}

// 必需具备所有继承过来的声明
let boy: Boy = {
    name: '',
    boy() { },
    run() { },
    eat() { },
    cry() { }
}

// 类继承 interface
class Auto {
    state = 1
}
interface AutoInterface extends Auto { }
class Bus extends Auto implements AutoInterface { }