//arr

// arr=[1,2,3,2,4,5,6]
// let a=arr.indexOf(2)
// let d=arr.indexOf(0)
// console.log(d)    //-1
// console.log(a)     //1
// console.log(arr)   //[1, 2, 3, 2, 4, 5, 6]
// let b=arr.lastIndexOf(2)   
// console.log(b)           //3
// let c=arr.slice(2,-1)    
// console.log(c)           //[3, 2, 4, 5]
// console.log(arr)         //[1, 2, 3, 2, 4, 5, 6]
// arr1=[10,20,30]
// let e=arr.concat(arr,arr1)   //在arr上再添加arr和arr1   
// console.log(e)               //[1, 2, 3, 2, 4, 5, 6, 1, 2, 3, 2, 4, 5, 6, 10, 20, 30]
// let arr2=[]
// console.log(arr2.concat(arr,arr1))    //[1, 2, 3, 2, 4, 5, 6, 10, 20, 30]
// console.log(arr)  //[1, 2, 3, 2, 4, 5, 6]
// console.log(arr2)   //[]
// let f=arr1.splice(2,1,"this")
// console.log(f)    //[30]
// console.log(arr1)   //[10,20,"this"]

// let arr=[9,8,1,5,3,4,6,2]
// let a=arr.sort((a,b)=>a-b)
// console.log(a)   // [1, 2, 3, 4, 5, 6, 8, 9]
// console.log(arr)   // [1, 2, 3, 4, 5, 6, 8, 9]
// let b=arr.sort((a,b)=>b-a)
// console.log(b)    // [9, 8, 6, 5, 4, 3, 2, 1]
// let c=arr.forEach((v,i)=>console.log(v,i))   //9 0  \n   8 1   \n  6 3...  (\n换行)  
// let d=arr.filter(function(v,i){return v>5})
// console.log(d)    //[9, 8, 6]
// console.log(arr)   //[9, 8, 6, 5, 4, 3, 2, 1]
// let e=arr.map((v,i)=>{return v*2})      //参数是两个，元素和元素下标，在返回结果的时候，可下拉查看，为下标：元素
// console.log(e)   //[18, 16, 12, 10, 8, 6, 4, 2]
// console.log(arr)   //[9, 8, 6, 5, 4, 3, 2, 1]

// let arr=[0,1,5,7,6,4,3]
// let a=arr.sort(()=>Math.random()-0.5)
// console.log(a)
// let b=arr.sort(()=>{Math.random()-0.5?1:-1})
// console.log(b)
   
// let arr=[1,4,2,3,4,7,6]  
// let a=arr.some((a,b)=>a>4)
// console.log(a)       //true
// console.log(arr)    //[1, 4, 2, 3, 4, 7, 6]
// let b=arr.some((a,b)=>a<1)
// console.log(b)     //flase
// let c=arr.every((v,i)=>v>0)
// console.log(c)     //true
// let d=arr.every((v,i)=>v>4)
// console.log(d)    //flase
// let e=arr.reverse()
// console.log(e)   //[6, 7, 4, 3, 2, 4, 1]
// console.log(arr)   //[6, 7, 4, 3, 2, 4, 1]
// let obj={a:10}
// let arr1=[1,2,3,5,6,{a:10},obj]
// let f=arr1.includes(2)
// console.log(f)    //true
// console.log(arr1.includes(obj))   //true
// console.log(arr1.includes({a:10}))   //flase
// console.log(arr1.includes(2,4))

// let a=Array.of(1,5,7)
// console.log(a)    //[1,5,7]
// let b=Array.of()
// console.log(b)   //[]
// Array.of(10,20)
// let c={length:3,0:"老王",1:"男"}
// console.log(Array.from(c))   //["老王", "男", undefined]
// let d={length:3,0:"老王",1:"男",2:"4"}
// console.log(Array.from(d))   //["老王", "男", "4"]
// let e={length:2}
// console.log(Array.from(e))   //[undefined, undefined]






// //object.assign  拼接
// let obj1={name:"老王",age:18}
// let obj2={work:"老师",hobby:"玩游戏"}
// let obj3={say:function(){alert("我是一名老师")}}
// console.log(Object.assign(obj1,obj2,obj3));
// console.log(obj1)
// console.log(obj2)

// //object拷贝
// let obj1={name:"老王",age:18}
// let obj2=Object.assign({},obj1)   //深拷贝
// console.log(obj2)
// obj2.name="小王"
// console.log(obj1.name)

// // Object.is(a,b);   ===,针对值
// console.log(Object.is(5,4))
// console.log(Object.is(true,"true"))
// console.log(Object.is(i,"i"))  //错

// //obj.prototype.isPrototypeOf(b);     确定一个对象是否存在于另一个对象的原型链中
// function person()
// let student=new person()
// console.log(person.prototype.isPrototypeOf(student))   // person存在于student的原型链中，of,属于

//Object.defineProperty()    直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，
// 并返回这个对象。如果不指定configurable(解构), writable, enumerable ，则这些属性默认值为false，如果不指定value, get, set，则这些属性默认值为undefined

// //
// let obj={
//     name:"老王",
//     age:18,
//     sex:"男",
// }
// console.log(Object.getOwnPropertySymbols(obj));
// console.log(Object.getOwnPropertyNames(obj));
// console.log(Reflect.ownKeys(obj))


 




// Math.abs(x)	返回x的绝对值。             absoult   绝对的，绝对值
// Math.round(x)	返回x四舍五入之后的整数值       runding off    四舍五入 
// Math.ceil(x)	返回x的近似值，向上取整           ceil   天花板
// Math.floor(x)	返回x的近似值，向下取整
// Math.max(x,y)	返回x,y中的最大值
// Math.min(x,y)	返回x,y中的最小值
// Math.random()	返回一个0~1之间的数字
// Math.trunc(x)	将x的小数部分去除，返回整数部分(ie不能使用)       截尾取整
// Math.pow(x,y)	取x的y次幂
// Math.sqrt(x)	返回x的平方根
// Math.sin(x)	返回x的正弦值
// Math.cos(x)	返回x的余弦值
// Math.tan(x)	返回x的正切值
// Math.asin(x)	返回x的反正弦值
// Math.acos(x)	返回x的反余弦值
// Math.atan(x)	返回x的反正切值
// NumberObject.toFixed(num)	可把 Number 四舍五入为指定小数位数的数字





// // str
// let str='Hello woRd hello Word';
// console.log(str.charAt(6))    //w
// console.log(str.charCodeAt(6))   //119
// console.log(String.fromCharCode(97))   //a
// console.log(str.indexOf("l"))    //2
// console.log(str.lastIndexOf("l"))    //14
// console.log(str.replace("w","ab"))    //Hello aboRd hello Word
// console.log(str.slice(8,-3))    //Rd hello W  
// console.log(str.substring(8,10))  //Rd
// console.log(str.substr(8,2))     //Rd
// console.log(str.split("o"))    //["Hell", " w", "Rd hell", " W", "rd"]
// console.log(str.toLowerCase())    //hello word hello word
// console.log(str)    //Hello woRd hello Word
// console.log(str.toUpperCase())    //HELLO WORD HELLO WORD
// console.log(str.concat("true","1234"))   //Hello woRd hello Wordtrue1234
// console.log(str)   //Hello woRd hello Word
// console.log(str.match("llo"))   //["llo", index: 2, input: "Hello woRd hello Word", groups: undefined]    【查找第一个，位置，来自哪个字符串】
// console.log(str.match(/llo/))   //["llo", index: 2, input: "Hello woRd hello Word", groups: undefined]    
// console.log(str.match(/llo/g))   // ["llo", "llo"]   ,【“g”,全字符串中，查找全部】
// console.log(str.padStart(30,"abcd"))    //abcdabcdaHello woRd hello Word
// console.log(str.padStart(10,"abcd"))     //Hello woRd hello Word
// console.log(str.padStart(30))            //         Hello woRd hello Word    【前有空格】
// console.log(str.padStart(30,"abcdefhigklmnopq"))    //abcdefhigHello woRd hello Word
// console.log(str.padEnd(30,"abcd"))    //Hello woRd hello Wordabcdabcda
// console.log(str)   //Hello woRd hello Word
// let str1="   hello world  "
// console.log(str1.trim())    //hello world    【前后无空格】

//JSON  字符与对象  
// let obj={name:"老王",age:18}
// let str='{"1":10,"2":20}'
// let b=JSON.parse(str)
// console.log(b)    //{1: 10, 2: 20}   【可展开】
// console.log(b["1"])    //10
// let a=JSON.stringify(obj)
// console.log(a)     //{"name":"老王","age":18}   【不可展开，仅仅是字符串】
// console.log(obj)   //{name: "老王", age: 18} [age: 18   name: "老王"   __proto__: Object]   【可展开】
// obj.name="李四"
// console.log(a)    //{"name":"老王","age":18}
// console.log(obj)   //{name: "李四", age: 18}








//DOM
let arr=[10,20,30,40,50,60]
let index=0
setInterval(()=>{
   console.log(arr[index]);
   index++;
   if(index==arr.length-1){
       index=0;
   }
 
},1000)