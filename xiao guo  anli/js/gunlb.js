//1、当前图片在中间显示，下一张图片应该从在右边进入，到中间结束
//2、如果点击显示上一张图片，当前图片向右移，下一张图片从左往右移到中间结束
//3、轮播点点击或移入显示对应的图片,将轮播点下标与图片一一对应，需要判断下一张与当前张的小标的大小，决定轮播的方向

window.onload=function(){

//获取轮播图、轮播点、箭头
//默认显示第一张图，选中第一个轮播点






let imglist=document.querySelectorAll(".imgbox .image")
let dotlist=document.querySelectorAll(".dian .dianl")
let jian=document.querySelectorAll(".jian .jiant")
let big=document.querySelector(".bigbox")
let flag=true;     //判断开关，连续点击时存在闪过情况，所以，开关的作用是判断一次点击事件是否执行完成
imglist[0].style.left=0;
dotlist[0].classList.add("hot")
let index=0;
let next=0;
let timer=setInterval(move,1200)
big.onmouseover=function(){
    clearInterval(timer)
}
big.onmouseout=()=>{timer=setInterval(move,1200)}
jian[1].onclick=function(){
    move()
}
jian[0].onclick=function(){
    if(!flag){return}      //一开始，!true,是flase,不执行return,向下执行，开始执行事件
    flag=false             //准备执行事件之前，给flase, 在没有执行完这次事件之前都是flase，!flase为true,执行return
    next--
    if(next<0){next=imglist.length-1}     //给next循环添加一个条件，否则到后面会报错，next一直加，到后面会没有内容
    imglist[index].style.left=0;             
    imglist[next].style.left="-1226px"      //初始位置
    animate(imglist[index],{left:1226})       //运动后的位置
    animate(imglist[next],{left:0},()=>{                    //animate(要操作的元素，执行函数1，1执行之后需要执行的函数2)
        flag=true       //执行完之后，给true;返回到函数开始，可执行另一次事件
        dotlist.forEach((v)=>{v.classList.remove("hot")})
        dotlist[next].classList.add("hot")
    })
    index=next
}
dotlist.forEach((v,i)=>{
    
    v.onclick=function(){
        
        if(i>index){
            if(!flag){return}
            flag=false
            next=i
            dotlist.forEach((v)=>{v.classList.remove("hot")})
            v.classList.add("hot")
            imglist[index].style.left=0;
            imglist[next].style.left="1226px";
            animate(imglist[index],{left:-1226});
            animate(imglist[next],{left:0},()=>{flag=true})
            index=next
        }
        if(i<index){
            if(!flag){return}
            flag=false
            next=i
            dotlist.forEach((v)=>{v.classList.remove("hot")})
            v.classList.add("hot")
            imglist[index].style.left=0;
            imglist[next].style.left="-1226px"
            animate(imglist[index],{left:1226})
            animate(imglist[next],{left:0},()=>{flag=true;})
            index=next
        }
        if(i==index){flag=true;return}

    }

})


function move(){
    if(!flag){return}
    flag=false
    next++
    if(next>imglist.length-1){
        next=0
    }
    imglist[index].style.left=0;
    imglist[next].style.left="1226px"
    animate(imglist[index],{left:-1226})
    animate(imglist[next],{left:0},()=>{
        flag=true
        dotlist.forEach((v)=>{v.classList.remove("hot")})
        dotlist[next].classList.add("hot")
    })
    index=next
}



}