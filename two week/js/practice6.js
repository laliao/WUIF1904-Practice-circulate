window.onload=()=>{

// let box=document.querySelector(".box")
// console.log(box.previousSibling)
// console.log(box.nextSibling)
// console.log(box.firstChild)
// console.log(box.childNodes)
// console.log(box.parentNode)





// let b=document.createElement("div")     //创建div
// b.className="box"    
// let box2=document.querySelector(".box2")
// document.body.append(b)   //页面最后插入b元素,同时写几行这个代码，只显示一个，会覆盖
// document.body.insertBefore(b,box2)    //页面中box2元素的前面插入b
// document.body.replaceChild(b,box2)    //将页面中的box2替换为b,注意两个元素都需要在页面中

// b.cloneNode()
// document.body.append(b.cloneNode())   //克隆体，不会被覆盖
// document.body.remove(b)   //移除b,包括克隆



// //九九乘法表
// let table=document.createElement("table")
// table.cellPadding=0
// table.cellSpacing=0
// for(let i=1;i<10;i++){
//     let tr=document.createElement("tr")
//     for(let j=1;j<=i;j++){
//         let td=document.createElement("td")
//         td.style.border="1px solid #000"
//         let text=document.createTextNode(`${j}*${i}=${i*j}`)
//         td.append(text)
//         tr.append(td)
//     }
//     table.append(tr)
// }
// document.body.append(table)




// //事件监听  
// let box3=document.querySelector(".box3")
// box3.onclick=()=>{
//     alert("我是事件1")
// }
// box3.addEventListener("click",()=>{
//     alert("我是事件2")
// })

// function shij(){
//     alert("我是事件3")
// }
// box3.addEventListener('click',shij)
// box3.removeEventListener("click",shij)




let parent=document.querySelector(".parent")
let son=document.querySelector(".son")
let gson=document.querySelector(".gson")
parent.onclick=()=>{
    console.log("parent")
}
son.onclick=()=>{
    console.log("son")
}
gson.onclick=(e)=>{
    e.stopPropagation()
    console.log("gson")
}





}