window.onload=function(){
    //通过动态的修改元素的定位的left,top来实现悬浮框
    //获取元素
    //运动的速度（left增大的步进值）
    //通过时间函数让left数值不断的变化
    //判断最大值，最小值
    //top与left同
// let xfbox=document.querySelector(".xfbox")
// let offl=xfbox.offsetLeft     //初始距离
// let offt=xfbox.offsetTop
// let speedX=10
// let speedY=10
// let timer=setInterval(movelt,40)
// xfbox.onmouseover=()=>{
//     clearInterval(timer)
// }
// xfbox.onmouseout=()=>{
//     timer=setInterval(movelt,40)
// }
// function movelt(){
//     offl+=speedX
//     offt+=speedY
//     if(offl>window.innerWidth-xfbox.offsetWidth||offl<=0){    //xfbox.offsetWidth盒子的实际宽度；window.innerWidth窗口的内宽
//         speedX=-speedX       //弹回，步进值发生改变
//     }
//     if(offt>window.innerHeight-xfbox.offsetHeight||offt<=0){
//         speedY=-speedY
//     }
//     xfbox.style.left=offl+"px";
//     xfbox.style.top=offt+"px";

// }




//将实现悬浮框的整个过程通过构造函数的方式进行封装，然后通过实例化这个构造函数来实现悬浮框
//1、创建一个构造函数
//2、构造函数接收参数
//3、参数中包括选择器，时间，运动的速度
//4、在构造函数中通过this来添加属性和方法，使用参数中的选择器获取元素，时间来控制运动速度的快慢，运动速度可以动态的改变
//5、实例化构造函数，实现悬浮框效果


function Float(obj){
    this.ele=document.querySelector(obj.selector)    //obj.selector不需要加"";加了""，代表里面是类名；
    this.speedX=obj.speedX
    this.speedY=obj.speedY
    this.offl=this.ele.offsetLeft    //注意是this.ele；因为在构造函数中需要有指向，这样实例化之后才能确定this；ele与 this.ele不一样；ele是一个变量，this.ele是构造函数中的一个内容，外部可传递
    this.offt=this.ele.offsetTop
    this.timer=setInterval(()=>{
        this.offl+=this.speedX    //注意this
        this.offt+=this.speedY
        if(this.offl>=window.innerWidth-this.ele.offsetWidth||this.offl<=0){
            this.speedX=-this.speedX
        }
        if(this.offt>=window.innerHeight-this.ele.offsetHeight||this.offt<=0){
            this.speedY=-this.speedY
        }
        this.ele.style.left=this.offl+"px"
        this.ele.style.top=this.offt+"px"
    },obj.time)
}
let obj1={
    selector:".xfbox",
    speedX:10,
    speedY:10,
    time:20,
}
let float=new Float(obj1)
console.log(float)








}