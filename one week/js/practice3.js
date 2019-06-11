// //数组最大值
// let arr=[1,5,8,90,7,5,]
// let maxIndex=0
// for(let i=1;i<arr.length;i++){
//     if(arr[i]>arr[maxIndex]){
//         maxIndex=i
//     }
// }
// console.log(maxIndex,arr[maxIndex])


// //选择排序降序
// let arr=[1,8,45,61,5,3,87]
// for(let i=0;i<arr.length-1;i++){
//     let maxIndex=i                      //默认最大值的下标  
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[maxIndex]<arr[j]){
//             maxIndex=j
//         }
//     }
//     if(maxIndex!=i){
//         let num=arr[i]
//         arr[i]=arr[maxIndex]
//         arr[maxIndex]=num
//     }
// }
// console.log(arr)


// //选择升序
// let arr=[1,8,45,61,5,3,87]
// for(let i=0;i<arr.length-1;i++){
//     let minIndex=i
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[minIndex]>arr[j]){
//             minIndex=j
//         }

//     }
//     if(minIndex!=i){
//         let temp=arr[i]
//         arr[i]=arr[minIndex]
//         arr[minIndex]=temp
//     }
// }
// console.log(arr)


// //冒泡升序
// let arr=[1,5,8,54,63,2,4]
// for(let i=0;i<arr.length-1;i++){
//     for(let j=1;j<arr.length-1-i;j++){
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//         }
//     }
// }
// console.log(arr)




// //输出*****
// function printX(){
//     console.log("*****")
// }
// printX()
// alert()

// //g[0,1]制冷制热     w[16-32]温度时16-32
// function kongtiao(g,w){
//     console.log("正在使用")
//     console.log(`正在${g==0?"制冷":"制热"}，温度为${w}°`)
// }
// kongtiao(0,20)
// kongtiao(1,30)
// kongtiao(0,16)


// //加
// function add(a,b){
//     console.log(`${a+b}`)
// }
// add(100,200)



// //四则运算  
// function fn(a,b,c){
//     if(c=="+"){
//         console.log(`${a+b}`)
//     }
//     else if(c=="-"){
//         console.log(`${a-b}`)
//     }
//     else if(c=="*"){
//         console.log(`${a*b}`)
//     }
//     else if(c=="/"){
//         console.log(`${a/b}`)
//     }
// }
// fn(12,3,"/")
// fn(2,6,"*")
// fn(10,20,"+")
// fn(50,10,"-")


// //求数组的最大函数  
// function maxValue(arr){
//     max=arr[0]
//     for(let i=0;i<arr.length;i++){
//         if(max<arr[i]){
//             max=arr[i]
//         }
//     }
//     console.log(`[${arr}]的最大值是${max}`)
// }
// let arr1=[1,2,5,8,45,12]
// console.log(arr1)
// maxValue(arr1)


// //数组排序--冒泡
// function fn(arr,flag){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=0;j<arr.length-1-i;j++){
//                 if(flag){                    //flag,隐式类型转换;true/false,1/0
//                     if(arr[j]<arr[j+1]){
//                         let temp=arr[j]
//                         arr[j]=arr[j+1]
//                         arr[j+1]=temp
//                     }  
//                 }
//                 else{
//                     if(arr[j]>arr[j+1]){
//                         let temp=arr[j]
//                         arr[j]=arr[j+1]
//                         arr[j+1]=temp
//                     }
//                 }
//         }
//     }
//     console.log(arr)
// }
// let arr2=[12,56,8,1,59,102]
// fn(arr2)
// fn(arr2,"a")
// fn(arr2,false)
// fn(arr2,true)
// fn(arr2,5)


// //数组排序--选择
// function fn(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let maxNum=arr[i]
//         for(let j=i+1;j<arr.length-1;j++){
//             if(arr[j]>arr[maxNum]){
//                 maxNum=j
//             }
//         }
//         if(i!=maxNum){
//             let temp=arr[i]
//             arr[i]=arr[maxNum]
//             arr[maxNum]=temp
//         }
//     }
//     console.log(arr)
// }
// let arr1=[1,5,4,50,78,11]
// fn(arr1)


// //星号
// function xing(n){
//     for(let i=0;i<n;i++){
//         for(let j=0;j<=i;j++){
//             document.write("*")
//         }
//         document.write("<br>")
//     }
// }
// let num=4
// xing(num)




// function fn(a,b,c){
//     console.log(a,b,c)
// }
// fn(1,2)
// fn(1,2,3,4)

// function fn(a,b,c){
//     console.log(arguments)
//     console.log(a,b,c)
//     console.log(arguments[3])
// }
// fn(1,2,3,4,5)


// function fn(a,b,...arr){
//     console.log(a,b,...arr)
// }
// fn(1,8,9,5,7,6)



// function fn(name="小白"){
//     console.log(name)
// }
// fn()
// fn("小红")



// //将数组下标index上的数字改为num1
// function fn(arr,index,num1){
//     for(let i=0;i<arr.length;i++){
//         if(i==index){
//             arr[i]=num1
//         }
//     }
//     console.log(arr)
// }
// fn([1,2,3,4,5],2,10)














// function fn(arr,index,length,...num){
//     let arr2=[]
//     for(let i=0;i<arr.length;i++){
//         if(i<index){
//             arr2[arr2.length]=arr[i]
//         }
//         else if(i==index){
//             for(let j=0;j<length;j++){
//                 i++
//             }
//             for(let a=0;a<num.length;a++){
//                 arr2[arr2.length]=num[a]
                
//             }
//             if(arr[i]!=null){
//                 arr2[arr2.length]=arr[i]
//             }
         
//         }
//         else{
//                 arr2[arr2.length]=arr[i]
//         }
//     }
//     console.log(arr2)
// }
// let arr1=[1,2,3,4,5]
// fn(arr1,2,1,10,20,30)
// fn(arr1,0,5,10,20,30,40)
// fn(arr1,2,3,10)
// fn(arr1,2,0,10,20,30)

