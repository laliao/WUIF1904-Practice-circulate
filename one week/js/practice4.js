// function aa(){
//     consosle.log(arguments)
//     console.log(this)      //普通函数的this指向window
// }
// console.dir(aa)


// function fn(a,b){
//     let c=a+b
//     return c

// }
// fn(10,20)
// console.log(fn(10,20))



// function fn(){
//     console.log(123)
//     return 123
// }
// fn()
// console.log(fn())




let arr=[1,2,3,4,5,6,7]
function splice(arr,index,length=0,...args){
    let newArr=[]
    let newIndex=0;
    for(let i=0;i<index;i++){
        newArr[newIndex]=arr[i]
        newIndex++
    }
    if(length==0){
        for(let j=0;j<args.length;j++){
            newArr[newIndex]=args[j]
            newIndex++
        }
    }
    for(let i=index;i<arr.length;i++){
        newArr[newIndex]=arr[i]
        newIndex++
    }
    return(newArr)
}
console.log(splice(arr,2,0,1.2,1.3,1.4))


//                         函数练习
//push(arr,item)   末尾添加  
//pop(arr)   末尾删除 
//unshift(arr,item)  开头添加item
//shift(arr)  开头删除item
//index(arr,item)  返回item在arr中的下标
//split(arr,atart,end)   截取arr从start到end前结束


// //push(arr,item)   末尾添加  
// let arr=[1,2,3,4,5,6]
// function push(arr,item){
//     arr[arr.length]=item
//     return arr
// }
// console.log(push(arr,10))


// //pop(arr)   末尾删除 
// function pop(arr){
//     let newArr=[]
//     let newIndex=0
//     for(let i=0;i<arr.length-1;i++){
//         newArr[newIndex]=arr[i]
//         newIndex++
//     }
//     return newArr
// }
// let arr=[1,2,3,4,5,6,7]
// console.log(pop(arr))



// //unshift(arr,item)  开头添加item
// function unshift(arr,item){
//     let newArr=[]
//     let newIndex=0
//     newArr[newIndex]=item
//     for(let i=0;i<arr.length;i++){
//         newIndex++
//         newArr[newIndex]=arr[i]
//     }
//     return newArr
// }
// let arr=[1,2,3,4,5,6,7]
// console.log(unshift(arr,10))


// //shift(arr)  开头删除item
// function shift(arr){
//     let newArr=[]
//     let newIndex=0
//     for(let i=1;i<arr.length;i++){
//         newArr[newIndex]=arr[i]
//         newIndex++
//     }
//     return newArr
// }
// let arr=[1,2,3,4,5,6,7]
// console.log(shift(arr))


// //index(arr,item)  返回item在arr中的下标
// function index(arr,item){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==item){
//             return i
//         }
//     }
//     return(`该数组中没有${item}`)
// }
// let arr=[1,2,3,4,5,6,7]
// let fn=index(arr,4)
// console.log(fn)




// //split(arr,atart,end)   截取arr从start到end前结束
// function split(arr,start,end){
//     let newArr=[]
//     let newIndex=0;
//     for(let i=start;i<=end;i++){
//         newArr[newIndex]=arr[i]
//         newIndex++
//     }
//     return newArr
// }
// let arr=[1,2,3,4,5,6,7]
// console.log(split(arr,2,4))


// //concat(arr1,arr2)
// function concat(arr1,arr2){
//     let newArr=[]
//     let newIndex=0
//     for(let i=0;i<arr1.length;i++){
//         newArr[newIndex]=arr1[i]
//         newIndex++
//     }
//     for(let j=0;j<arr2.length;j++){
//         newArr[newIndex]=arr2[j]
//         newIndex++
//     }
//     return newArr
// }
// let arr1=[1,2,3,4,5]
// let arr2=[10,20,30,40]
// console.log(concat(arr1,arr2))


// var name="小白"
// function fn(){
//     console.log(name)    
//     var name="小红"      
// }
// fn()


//                                作用域练习
//1
// var scope='global';
// function fn(){
//   alert(scope);
//   var scope='local';
//   alert(scope);
// }
// fn();    //alert(undefined)、alert(local)
// alert(scope);//alert(global)

//2
// var scope='global';
// function fn(){
//   alert(scope);
//   scope='local';
//   alert(scope);
// }
// fn();    //alert(global)、alert(local)
// alert(scope);//alert(local)

//3
// var scope='global';
// function fn(scope){
//   alert(scope);
//   scope='local';
//   alert(scope);
// }
// fn();    //alert(undefined)、alert(local)
// alert(scope);//alert(global)
