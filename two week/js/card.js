window.onload=function(){
//在css中将content隐藏
//进去页面，默认显示第一个
//移入对应的元素显示对应的内容
//头部元素和内容元素的联系：他们的下标一一对应，


//1
// let hdlist=document.querySelectorAll(".box .hd>li")
// let content=document.querySelectorAll(".box .content>div")
// content[0].style.display="block";
// hdlist.forEach((v,i)=>{
//     v.onmouseover=function(){         //事件源.事件=执行函数
//         content.forEach((a,b)=>{content[b].style.display="none"})
//         content[i].style.display="block"
//         }
// })

//2
let hdlist=document.querySelectorAll(".box .hd>li")     //获取hd
let content=document.querySelectorAll(".box .content>div")    //获取content
content[0].style.display="block";     //元素.style.属性="";
hdlist.forEach((v,i)=>{          //事件源.事件=执行函数
    v.onmouseover=function(){
        content.forEach((a,b)=>a.style.display="none")
        content[i].style.display="block"
    }
})











}