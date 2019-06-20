window.onload=function(){
    //通过动态的修改元素的定位的left,top来实现悬浮框
    //获取元素
    //运动的速度（left增大的步进值）
    //通过时间函数让left数值不断的变化
    //判断最大值，最小值
    //top与left同
let xfbox=document.querySelector(".xfbox")
let offl=xfbox.offsetLeft     //初始距离
let offt=xfbox.offsetTop
let speedX=10
let speedY=10
let timer=setInterval(movelt,40)
xfbox.onmouseover=()=>{
    clearInterval(timer)
}
xfbox.onmouseout=()=>{
    timer=setInterval(movelt,40)
}
function movelt(){
    offl+=speedX
    offt+=speedY
    if(offl>window.innerWidth-xfbox.offsetWidth||offl<=0){    //xfbox.offsetWidth盒子的实际宽度；window.innerWidth窗口的内宽
        speedX=-speedX       //弹回，步进值发生改变
    }
    if(offt>window.innerHeight-xfbox.offsetHeight||offt<=0){
        speedY=-speedY
    }
    xfbox.style.left=offl+"px";
    xfbox.style.top=offt+"px";

}






}