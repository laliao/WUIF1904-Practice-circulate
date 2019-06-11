// let arr1=[1,2,3,4]
// let arr2=[...arr1]
// console.log(arr2)

//回调函数
// function say(content,fn){
//     alert(content)
//     fn()
// }
// function write(){
//     console.log("所以要学好回调函数")
// }
// say("回调函数很重要",write)


// function say(content,fn){
//     alert(content)
//     fn()
// }
// say("回调函数很重要",function fn(){    //fn()命名可随意，write()也可以
//     console.log("所以要学好回调函数")
// })


// //递归函数
// function fn(num){
//     if(num===1){
//         return num
//     }
//     else{
//         return num*(fn(num-1))
//     }
// }
// console.log(fn(10))


// //闭包
// function bibao(){
//     let a=10
//     return function(){
//         return a
//     }
// }
// let b=bibao()
// console.log(b())

// function f1(){
//     　　var n = 999;
//     　　nAdd = function(){
//     　　　　n += 1;
//     　　}   
//     　　function f2(){    
//     　　　　console.log(n);  
//     　　}  
//     　　return f2;  
//     }
//     var result = f1();
//     result();　　//从函数外部通过闭包f2获取到函数f1内部局部变量的值
//     nAdd();　　//从函数外部通过闭包修改局部变量n的值
//     result();　　//再次通过闭包f2获取到函数f1内部局部变量的值


// //内置顶层函数  
// console.log(isNaN("true"))
// console.log(Number.isNaN("true"))


// //鸡兔同笼，共有34个头，96只脚，问鸡兔个数   (20,14)
// for(let i=0;i<34;i++){
//     for(let j=34-i;i+j<=34;j++){
//         if(2*i+4*j==96){
//             console.log(`${i}只鸡，${j}只兔`)
//         }
//     }
// }


// //找出100-999之内的四个水仙花数，（每个数位的立方和等于它本身，比如153，1**3+5**3+3**3=153）  (153,370,371,407)
// for(let i=100;i<1000;i++){
//     if(parseInt(i/100)**3+parseInt(i%100/10)**3+parseInt(i%100%10)**3==i){
//         console.log(i)
//     }
// }




// //编写一个方法去掉数组中的重复元素  
// let arr=[1,2,3,4,4,5,5]
// let arr2=[]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             arr.splice(j,1)
//         }
//     }
// }
// for(let c=0;c<arr.length;c++){
//     arr2[arr2.length]=arr[c]
// }
// console.log(arr2)

// let arr=[1,1,2,3,3,4,5]
// let nArr=[]
// for(let i=0;i<arr.lentgh;i++){
//     for(let j=0;j<arr.length-1-i;j++){
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//         }
//     }
// }
// let num=arr[0]
// nArr[0]=arr[0]
// for(let c=0;c<arr.length;c++){
//     if(num!=arr[c]){
//         nArr[nArr.length]=arr[c]
//     }
// }
// console.log(nArr)




//  //将数组中的元素反转 
//  let arr=[1,2,3,4,5]
//  let arr2=[]
// for(let i=0;i<arr.length;i++){
//     arr2.unshift(arr[i])
// }
//  console.log(arr2)

let arr=[1,2,3,4,5,]
let arr2=[]
for(let i=arr.length-1;i>=0;i--){
    arr2[arr2.length]=arr[i]
}
console.log(arr2)




// //  实现随机打乱数组的功能，将数组乱序排列
// function getNewarr(a) {
//     var len = a.length;
//     for(var i=0;i<len;i++){
//         var end = len - 1 ;
//         var index = (Math.random()*(end + 1)) >> 0;
//         var t = a[end];
//         a[end] = a[index];
//         a[index] = t;
//     }
//     return a;
// }
//                     // 循环的把数组最后一项和随机的那一项调换位置，得出的就是一组随机的新数组
//  let arr=[1,2,3,4,5,6]
//  console.log(getNewarr(arr))

// let arr=[1,2,3,4,5,6,7]
// let len=arr.length-1
// for(let i=0;i<arr.length;i++){
//     let index=parseInt(Math.random()*arr.length)
//     let temp=arr[index]
//     arr[index]=arr[i]
//     arr[i]=temp
// }
// console.log(arr)

