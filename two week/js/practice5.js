// console.log(Boolean(' '==flase))
// console.log(Boolean( ))   //flase
// console.log(Boolean(undefined))    //flase
// console.log(Boolean(' '))   //true

// let arr=[1,2,3,4,5]
// let a=Math.max(...arr)
// // console.log(a)

// let a=location.href="http://js.hnz.kim/?file=002-BOM/03-location%E5%AF%B9%E8%B1%A1"
// console.log(a)



//DOM Document Object Model
let a=document.URL
console.log(a)

let c=document.getElementsByName("box1")
console.log(c)

let d=document.getElementsByClassName("box")
console.log(d)

let e=document.getElementsByTagName("img")
console.log(e)

window.onload=function(){
    let b=document.getElementById("yi")
    console.log(b)
}