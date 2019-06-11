// for(let i=1;i<10;i++){
//     for(let j=1;j<=i;j++){
//         document.write(`${j}*${i}=${j*i}`)
//     }
//     document.write("<br>")
// }




// //猜数字游戏
// let num=parseInt(Math.random()*100)

// while(true){
//     let num2=parseInt(prompt("请输入一个数字"))
//     if(num==num2){
//         alert("恭喜你猜对了")
//         break
//     }else if(num>num2){
//         alert("过小")
//     }else if(num<num2){
//         alert("过大")
//     }
// }



// //数组定义  
// let arr1=[1,2,3,4,5,]
// let arr2=new Array(1,2,3,4,5,6)
// let arr3=new Array(8)
// let arr4=[undefined,NaN,123,"string"]
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
// console.log(arr4)
// console.log(arr1.length)

// //数组遍历，加

// for(let i=0;i<arr2.length;i++){
//     console.log(arr2[i])
// }
// for(let j of arr4){
//     console.log(j)
// }

// for(let a=0;a<arr1.length||a<arr2.length;a++){
//     console.log(arr1[a]+arr2[a])
// }
// console.log(arr1+arr2)



// //数组添加修改
// let arr=[1,2,3,4,5]
// arr[1]="aa"
// arr[5]=10
// console.log(arr)



// //数组减，加
// let arr=new Array(1,2,3,4,5)
// arr.splice(1,2)
// console.log(arr)

// arr.splice(2,1,44)
// console.log(arr)

// arr.splice(2,0,33,44)
// console.log(arr)



//数组的浅拷贝
// let arr1=[1,2,3,4,5]
// let arr2=[]
// for(let i=0;i<arr1.length;i++){
//     arr2[i]=arr1[i]
// }
// arr2[2]='a'
// console.log(arr1)
// console.log(arr2)



//定义二维数组
// let arr=[[1,2],[3,4],[5,6,7],[8,9]]
// console.log(arr[0])
// console.log(arr[2][2])


//二维数组遍历
// let arr=[[1,2],[3,4],[5,6,7],[8,9]]
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         console.log(arr[i][j])
//     }
// }

// let arr=[[1,2],[3,4],[5,6,7],[8,9]]
// for(let i of arr){
//     for(let j of i){
//         console.log(j)
//     }
// }

// let arr=[[1,2],[3,4],[5,6,7],[8,9]]
// for(let i of arr){
//     console.log(i)
// }




//深拷贝,赋值
// let arr1=[[1,2],[2,3,4],[3,4]]
// let arr2=[]
// for(let i=0;i<arr1.length;i++){
//     let newArr=[]
//     for(let j=0;j<arr1[i].length;j++){
//         newArr[j]=arr1[i][j]
//     }
//     arr2[i]=newArr
// }
// arr1[1][1]="a"
// console.log(arr1)
// console.log(arr2)

// //赋址
// let arr1=[[1,2],[2,3,4],[3,4]]
// let arr2=arr1[0]
// let arr3=arr1[1]
// arr2[1]="a"
// arr1[1][0]="b"
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)



// //一维数组最大值
// let arr=[1,2,45,234,246,78,7,8,9]
// let MaxNum=arr[0]
// for(let i=0;i<arr.length;i++){
//     if(MaxNum<arr[i]){
//         MaxNum=arr[i]
//     }
// }
// console.log(MaxNum)

// //二维数组最大值
// let arr=[[1,2],[45,234,256],[78,7],[8,9]]
// let MaxNum=arr[0][0]
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         if(MaxNum<arr[i][j]){
//             MaxNum=arr[i][j]
//         }
//     }
// }
// console.log(MaxNum)


// //冒泡排序
// let arr=[1,5,26,3,89,567,4,100]
// for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length-1-i;j++){
//         if(arr[j]<arr[j+1]){
//             let num=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=num
//         }
//     }
// }
// console.log(arr)



let arr=[1,5,26,3,89,567,4,100]
var minIndex, temp;
for (var i = 0; i < arr.length- 1; i++) {
    minIndex = i;
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {     // 寻找最小的数
            minIndex = j;                 // 将最小数的索引保存
        }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}
console.log(arr)