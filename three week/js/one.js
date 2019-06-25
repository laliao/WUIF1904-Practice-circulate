// window.onload=function(){
//     //事件委派
//     let father=document.querySelector(".father")
//     father.addEventListener("click",(e)=>{
//         console.log(e)
//         if(e.target.className=="son"){
//             alert(e.target.innerText)
//         }
//     },false)

// }



// //object对象
// let obj=null
// let obj1={sex:"男"}
// let obj2={say(){alert("Hello Word!")}}
// let a=Object.assign(obj,obj1,obj2)
// obj1.sex="女"
// console.log(a)
// console.log(obj)
// console.log(obj1)

// console.log(0===-0)
// console.log(Object.is(0===-0))




//正则对象


// let reg=new RegExp('a',"i")
// let str1=str.match(reg)
// console.log(str1)     //["a", index: 0, input: "acdefxfsavzhisKNASKasf", groups: undefined]
// let reg1=str.match(/a/g)  //["a", "a", "a"]
// str=str.replace(/a/g,"*")   //*cdefxfs*vzhisKNASK*sf
// str=str.replace(reg,"--")    //--cdefxfsavzhisKNASKasf
// let reg2=new RegExp('s',"g")
// str=str.replace(reg2,"--")    //*cdefxf--*vzhi--KN--SK*--f

// let str="acdefxfsavzhicsKNASKacsf"
// let reg=/c/g
// console.log(reg.test(str))   //true
// console.log(reg.exec(str));   //["c", index: 13, input: "acdefxfsavzhicsKNASKacsf", groups: undefined]
// console.log(reg.exec(str));  //["c", index: 21, input: "acdefxfsavzhicsKNASKacsf", groups: undefined]


let str="142624201505062185"
let reg=/^[1-9][0-9]{5}[1|2][0-9]{3}[0|1][0-9][0-3][0-9]{4}[0-9xX]$/
console.log(reg.test(str))    //true
let str1="142624201535062185"
console.log(reg.test(str1))   //false

let str3="18435202885"
let reg1=/^(13[0-9]|14[0-9]|15[0-9]|16[])$/
console.log(reg1.test(str3))

var rxPhone = /^(13[0-9]|15[012356789]|18[0-9]|17[678]|14[57])[0-9]{8}$/;