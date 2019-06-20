window.onload=function(){
//offsetTop;下标的一一对应，scrollTo

//先将每个楼层的距离文档顶部的距离保存下来
//根据点击的按钮不同将页面滚动到相应的位置（保存下来的距离）
//通过时间函数自己定义一个动画，让滚动的过程不再单调
//定义动画需要页面滚动的速度

let conlist=document.querySelectorAll(".box")
let btnlist=document.querySelectorAll(".btn")
let btnc=document.querySelector(".btnc")
let back=document.querySelector(".back")

let arr=[]     //存储每个box距离页面的高度
conlist.forEach((v)=>{arr.push(v.offsetTop)})
let timer=null   //定义一个全局的时间函数
let scrollt   //定义存储滚动的位置
btnlist[0].classList.add("hot")
btnlist.forEach((v,i)=>{

    v.onclick=function(){
        // conlist.forEach((a,b)=>{btnlist[b].classList.remove("hot")})
        // v.classList.add("hot")
        // btnlist[i].classList.add("hot")
        clearInterval(timer)
        timer=setInterval(()=>{
            scrollt=document.documentElement.scrollTop    //现有位置
            let speed=(arr[i]-document.documentElement.scrollTop)/10     //arr[i]目标位置
            speed=speed>0?Math.ceil(speed):Math.floor(speed)
            scrollt+=speed
            scrollTo(0,scrollt)    //每次移动到的位置
            if(scrollt==arr[i]){
                clearInterval(timer)
            }
        },20)       
    }
})

window.onwheel=()=>{clearInterval(timer)}



// window.onscroll=()=>{
//     let scrollT=window.scrollY;
//     if(scrollT>=500){
//         clearInterval(timer)
//         btnc.style.display="block"
//         back.style.display="block"
//         timer=setInterval(()=>{
//             btnc.style.height="250px"
//             btnc.style.width="80px"
//         },20)
//     }
//     if(scrollT<500){  
//         timer=setInterval(()=>{
//             btnc.style.height="0px"
//             btnc.style.width="0px"
//         },20)
//         // btnc.style.height="0px"
//         // btnc.style.width="0px"
//         back.style.display="none" 
//     }
//     btnlist.forEach((v,i)=>{
//         if(scrollT>=arr[i]){
//             conlist.forEach((a,b)=>{btnlist[b].classList.remove("hot")})
//             v.classList.add("hot")
//         }
//     }) 
// }




back.onclick=()=>{
    clearInterval(timer)
    timer=setInterval(()=>{
        scrollt=document.documentElement.scrollTop 
        speed=Math.floor((0-scrollt)/10)
        scrollt+=speed
        scrollTo(0,scrollt)
        if(scrollt==0){
            clearInterval(timer)
        }
    },20)
}

}

