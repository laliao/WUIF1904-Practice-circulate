// //数字游戏
// let num=parseInt(Math.random()*100)
// while(true){
//     let num2=parseInt(prompt("请输入一个数字"))
//     if(num2==num){
//         alert("恭喜你猜对了")
//         break
//     }else if(num2>num){
//         alert("过大")
//     }else if(num2<num){
//         alert("过小")
//     }
// }


// //九九乘法表  
// for(let i=1;i<10;i++){
//     for(let j=1;j<=i;j++){
//         document.write(`${j}*${i}=${i*j}&nbsp;&nbsp`)
//     }
//     document.write("<br>")
// }


// //do while 与while
// let a=10
// do{
//     a++
// }while(a<5)
// console.log(a)

// let a=10
// while(a<5){
//     a++
// }
// console.log(a)




// //数组定义
// let arr=[1,2,3,4,5]
// let arr2=new Array(1,2,3,4,5)
// let arr3=new Array(5)
// let arr4=[undefined,NaN,"A",5]
// console.log(arr)
// console.log(arr2)
// console.log(arr3)
// console.log(arr4)




// //数组遍历
// let arr=[1,2,3,4,5]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
// for(let i of arr){
//     console.log(i)
// }

// //数组添加，修改
// let arr=[1,2,3,4,5]
// arr[5]=8
// arr[2]=9
// console.log(arr)


// //数组删除，加
// let arr=[1,2,3,4,5]
// arr.splice(2,2,8,9,10)
// console.log(arr)


// //数组浅拷贝  
// let arr=[1,2,3,4,5]
// let arr2=[]
// for(let i=0;i<arr.length;i++){
//     arr2[i]=arr[i]
// }
// arr[2]=8
// console.log(arr)
// console.log(arr2)



// //二维数组定义
// let arr=[[1,2],[3,4],[5,6],[7,8]]
// let arr1=[[1,2],[3,4],["a","b"]]
// console.log(arr)
// console.log(arr1[1])
// console.log(arr1)


//二维数组遍历 1
// let arr=[[1,2],[3,4],[5,6,7],[8,9]]
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         console.log(arr[i][j])
//     }
// }
//二维数组遍历 2
// let arr=[[1,2],[3,4],[5,6,7],[8,9]]
// for(let i of arr){
//     for(let j of i){
//         console.log(j)
//     }
// }


// //二维数组 深拷贝
// // let arr=new Array((1,2),("a","b"),(8,9))
// let arr=[[1,2],[3,4],[5,6,7],[8,9]]
// let arr2=[]
// for(i=0;i<arr.length;i++){
//     let newArr2=[]
//     for(let j=0;j<arr[i].length;j++){
//         newArr2[j]=arr[i][j]
//     }
//     arr2[i]=newArr2
// }
// arr[1][1]=3
// console.log(arr)
// console.log(arr2)



// //一维数组最大值
// let arr=[1,5,7,3,8,45,2,90]
// let maxNum=arr[0]
// for(let i=0;i<arr.length;i++){
//     if(maxNum<arr[i]){
//         maxNum=arr[i]
//     }
// }
// console.log(maxNum)

//二维数组最大值
// let arr=[[1,2],[3,4],[5,6,7],[8,9]]
// let maxNum=arr[0][0]
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         if(maxNum<arr[i][j]){
//             maxNum=arr[i][j]
//         }
//     }
// }
// console.log(maxNum)


//冒泡排序
let arr=[14,89,120,1,60,48,88,90]
for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-1-i;j++){
        if(arr[j]<arr[j+1]){
            let num=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=num
        }
    }
}
console.log(arr)