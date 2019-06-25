window.onload=()=>{

 let imglist=document.querySelectorAll(".bigbox .imgbox .image")
 let dotlist=document.querySelectorAll(".bigbox .dian .dianl")
 let jianlist=document.querySelectorAll(".bigbox .jian>div")
 let big=document.querySelector(".bigbox")
 let index=0   //记录下标的变化，依据此进行展现
 //借用index，是因为，forEach()中嵌套setInterval(),不可实现想要的等一段时间遍历，因为js的异步特点
let timer

 imglist[0].style.opacity=1
 dotlist[0].classList.add("hot")

timer=setInterval(move,1200)

big.onmouseover=()=>{
    clearInterval(timer)
}
big.onmouseout=()=>{
    timer=setInterval(move,1200)
}
function move(){
    index++
    if(index>imglist.length-1){index=0}
    imglist.forEach((v,i)=>{
        v.style.opacity=0
        dotlist[i].classList.remove("hot")
    })
    imglist[index].style.opacity=1
    dotlist[index].classList.add("hot")
}

dotlist.forEach((v,i)=>{
    
    v.onclick=(){

    }
})





}