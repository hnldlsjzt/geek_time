// 17.guards -- 类型守卫

// 通常有四种守卫
/**
 * 1. instanceof 判断一个实例是否属于某个类
 * 2. in 判断一个属性是否属于某个对象
 * 3. typeof 判断原始类型
 * 4. 自定义守卫 -- 已函数形式，参数可能是个联合类型，返回类型是类型谓词。适合复杂些的应用场景
 */

enum Type {
    Strong,
    Week
}
class Java {
    helloJava() {
        console.log('java');

    }
    java: any
}
class JavaScript {
    helloJavaScript() {
        console.log('helloJavaScript');

    }
    js: any
}
function isJava(lang: Java | JavaScript): lang is Java {
    return lang instanceof Java ? true : false
}
function getLanguage(type: Type, x: string | number) {
    const lang = type === Type.Strong ? new Java : new JavaScript

    if (lang instanceof Java) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }

    if ('helloJava' in lang) {
        lang.helloJava();
    } else {
        lang.helloJavaScript()
    }

    if (typeof x === 'string') {
        console.log(x.toString());

    } else {
        console.log(x.toFixed());

    }


}