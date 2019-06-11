//箭头函数
// let f=(num1,num2)=>num1+num2
// console.log(f(10,20))

// let v=()=>"这是一个箭头函数"
// console.log(v())

// let a=(num1,num2)=>{let temp=num1;num1=num2;num2=temp;console.log(num1,num2)}
// a(10,100)





//解构函数  
// let [a,,c]=[10,20,30]
// console.log(a,c)

// let {v: a, m: b} = {v: 10, m: 29}
// console.log(a, b)






// !function(a,b){
//     console.log(a+b)
// }(10,20)

// (function(a,b){
//     console.log(a+b)
// }(10,20))

// (function(a,b){
//     console.log(a+b)
// })(10,20)

// let username="张三"
// let obj={
//     username,
//     say(){
//         alert("李三你去哪里")
//     },
//     hui:function(){
//         alert("我去那")
//     },
    
// }
// console.log(obj.username)
// obj.say() 
// obj.hui()


// //对象增、改、查
// let obj={
//     name:"老王",
//     sex:"男",
//     age:18,
// }
// obj.hobby="玩游戏";
// obj.age=20;
// console.log(obj.name)
// console.log(obj.hobby)
// console.log(obj.age)

// //对象删
// let obj={}
// obj.name="老王";
// obj.sex="男"
// obj.age=18;
// console.log(obj)
// delete obj.age
// console.log(obj)
// obj=null
// console.log(obj)



// //对象遍历
// let suancai={
//     name:"酸菜",
//     price:"￥15/份",
//     taste:"酸辣爽口",
// }
// for(let i in suancai){
//     console.log(i)
// }
// for(let i in suancai){
//     console.log(suancai[i])
// }




//对象拷贝  
// let animal={
//     name:"动物",
//     age:4,
//     sex:"公",
//     color:{
//         color1:"black",
//         color2:"white",
//         color3:"red",
//     },
//     say:function(){
//         console.log("我是动物")
//     }
// }
// console.log(animal)
// let dog=animal
// dog.name="哈士奇"
// console.log(dog)
// console.log(animal)
// let cat={}
// for(let i in animal){
//     cat[i]=animal[i]
// }
// cat.sex="母"
// cat.color.color1="blue"
// console.log(animal)
// console.log(cat)

// //深拷贝
// let animal={
//     name:"动物",
//     age:4,
//     sex:"公",
//     color:{
//         color1:"black",
//         color2:"white",
//         color3:"red",
//         color4:{
//             a:10,
//             b:20,
//             c:30,
//         },
//     },
//     arr:[1,2,3,4,5],
//     say:function(){
//         console.log("我是动物")
//     }
// }
// function deepCopy(obj){
//     let newObj=null;
//     if(typeof obj==="object" && typeof obj!=="null"){
//         newObj=obj instanceof Array?[]:{}
//         for(let i in obj){
//             newObj[i]=deepCopy(obj[i])
//         }
//     }
//     else{
//         newObj=obj
//     }
//     return newObj
// }
// let f=deepCopy(animal)
// f.color.color1="#000"
// console.log(animal)
// console.log(f)