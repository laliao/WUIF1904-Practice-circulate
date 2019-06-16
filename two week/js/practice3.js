// let arr=[1,2,3,4,5,6,7]
// let arr1=[1,...arr]
// console.log(arr1)

////rest合并
// let obj1={
//     name:"xiaofeng",
//     age:18,
//     hobby:"shuijiao",
// }
// let obj2={
//     height:160,
//     name:"xiao",
// }
// let obj={...obj1, ...obj2}
// console.log(obj)

// //rest接受函数参数  
// let obj={
//     a:10,
//     b:20,
//     c:30,
//     d:40,
// }
// function obj(...rest){
//     return rest;
// }
// console.log(obj())





//排序
// let obj = {
//     password: 'Password!',
//     name: 'Naboo',
//     id: 300,
// }

// let sort = object =>({ id: undefined, ...object })
// sort(obj)
// console.log(obj)


// //工厂函数  
// function animal(){
//     let obj={};
//     obj.name="动物";
//     obj.age=5;
//     obj.sex="公";
//     return obj;
// }
// let dog=animal();
// console.log(dog.name)
// let cat=animal("哈士奇",5,"母")
// console.log(cat)

// //构造函数1
// function Animal(name,age,sex){
//   console.log(this)
//     this.name=name;
//     this.age=age;
//     this.sex=sex;

// }
// // let obj=new Obj()
// // console.log(obj)   
// let dog=new Animal("dog",5,"公")
// dog.hobby="睡觉"
// console.log(dog)
// // console.log(window)   //全局方法都是window.方法；自定义的构造函数也在window下  
// // console.log(this)     //全局中指向window

// //2
// function Animal(name,age,sex){
//     this.name=name;
//     this.age=age;
//     this.sex=sex;

// }
// let dog=new Animal("dog",5,"公")
// dog.hobby="睡觉"                 //实例化上添加的属性，会增到构造函数身上
// delete dog.age
// let cat=new Animal()
// console.log(dog)
// console.log(cat)

// //构造函数3 
// function Person(name,age,sex,job,){
//     this.name=name;
//     this.sex=sex;
//     this.age=age;
//     this.job=job;
// }
// let student=new Person("学生",16,"男","学习");
// let tearch=new Person("老师",30,"女","教学");
// console.log(tearch)
// console.log(student)

// //原型
// function Person(name,age,sex,job,){
//     this.name=name;
//     this.sex=sex;
//     this.age=age;
//     this.job=job;
// }
// Person.prototype={         //json创建对象，let obj={}
//     say:function(){
//         console.log("我们都会说话")
//     },
//     eat(){
//         console.log("我们都需要吃饭")
//     },
// }
// let student=new Person("学生",16,"男","学习");
// console.log(student)
// console.log(student.__proto__)
// student.say()



// //原型继承
// function Person(name,age,sex,job,){
//     this.name=name;
//     this.sex=sex;
//     this.age=age;
//     this.job=job;
// }
// Person.prototype={         //json创建对象，let obj={}
//     say:function(){
//         console.log("我们都会说话")
//     },
//     eat(){
//         console.log("我们都需要吃饭")
//     },
// }
// function student(hobby){
//   this.hobby=hobby;
// }
// student.prototype=new Person("老王","男",20,"学习")
// let obj=new student("玩游戏")
// console.log(obj)
// console.log(obj instanceof student)
// console.log(obj instanceof Person)

// function Animal(name,age,sex){
//   this.name=name;
//   this.age=age;
//   this.sex=sex;
// }
// Animal.prototype={
//   say:function(){
//     console.log("我是一只动物")
//   }
// }
// function Dog(name,hobby){
//  this.name=name;
//  this.hobby=hobby;
// }
// Dog.prototype=new Animal("犬科",4,"公")
// let dog=new Dog("","拆家")
// console.log(dog)
// dog.say()
// console.log(dog instanceof Dog)
// console.log(dog instanceof Animal)




// //call
// function Animal(name,age,sex){
//   this.name=name;
//   this.age=age;
//   this.sex=sex;
//   this.say=(a,b,c)=>alert(`我是一只${a},我今年${b}了，我的性别是${c}`)
// }
// function Dog(){
//  }
//  let animal=new Animal("金毛",3,"公")
// //  animal.say("哈士奇",4,"公")
// //  console.log(animal)
//  let dog=new Dog() 
//  animal.say.call(dog)
// //  animal.name.call(dog)
//  animal.say.call(dog,"哈士奇",4,"公")
// //  Animal.call(dog)
// //  dog.say("哈士奇",4,"公")
// //  console.log(dog.name)



// //apply
//  function Animal(name,age,sex,say){
//   this.name=name;
//   this.age=age;
//   this.sex=sex;
//   this.say=function (a,b,c){
//     alert(`我是一只${a},我今年${b}了，我的性别是${c}`)
//   }
// }
// function Dog(name,hobby){
//   this.name=name;
//   this.hobby=hobby;
//  }
//  let animal=new Animal()
//  let dog=new Dog() 
//  animal.say.apply(dog)
//  animal.say.apply(dog,["哈士奇",4,"公"])
// //  animal.name.apply(dog)    //错误，函数的属性不可通过apply继承，只有方法可以

//  Animal.apply(dog)           //构造函数可全部apply继承
// dog.say()
// dog.say(["哈士奇",4,"公"])



// //bind
// function Animal(name,age,sex){
//   this.name=name;
//   this.age=age;
//   this.sex=sex;
//   this.say=function (a,b,c){
//     alert(`我是一只${a},我今年${b}了，我的性别是${c}`)
//   }
// }
// function Dog(){

//  }
//  let animal=new Animal()
//  let dog=new Dog() 
//  let a=animal.say.bind(dog,"哈士奇",4,"公")
//  a()




// function Animal(name,age,sex){
//   this.name=name;
//   this.age=age;
//   this.sex=sex;
//   this.say=(a,b,c)=>alert(`我是一只${a},我今年${b}了，我的性别是${c}`)
//   //指针函数
// }
// function Dog(){
// }
//  let animal=new Animal()
//  let dog=new Dog() 
//  Animal.call(dog)    //继承整个构造函数 (改变整个构造函数的this指向)，只赋，不执行
//  dog.say("哈士奇",4,"公")   //调用，赋值给变量
//  dog.name="hah"
//  console.log(dog.name)    //构造函数的name没有赋值，是undefined
 


