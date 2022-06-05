/**
 * 类的成员属性
 * 
public:  所有人可见
private： 只能类本身使用，实例和子类不可调用，构造函数加private，表明这个类不能被实例化，也不能被继承
protected： 只能在类和子类中调用，实例中不能调用，构造函数protected，相当于基类，只能继承不能实例化
readonly：只读属性，不能被更改。类，子类，实例都可以调用
static：静态属性，可以继承，类和子类直接调用，实例不能调用，
 */

/**
 * @name 抽象类
 * 抽象类只能被继承，不能被实例化。但可以被子类继承后，实例化子类来调用抽象类的方法，这样就完成了复用 
 * 使用 abstract 关键字实现
 * 好处：能抽离一些事务的共享，提升到父类来实现。 有利于代码的复用
 */
abstract class Animal {
    eat() {
        console.log('abstract:eat');

    }
}
//无法创建抽象类的实例。ts(2511)
// const animal = new Animal()
class Dog extends Animal {

}
const dog = new Dog()
dog.eat()

export default {}

