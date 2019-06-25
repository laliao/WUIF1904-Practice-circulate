window.onload=()=>{
//倒计时  
//1、确定当前时间
//2、确定目标时间
//3、将目标时间和当前时间进行减法运算，再根据计算结果算倒计时的时间
//4、通过时间函数不断的获取当前的时间来实现最终的倒计时
//获取显示时间的元素

//获取当前时间的毫秒数
//获取目标时间的毫秒数
//时间差
//计算剩余时间的秒，分，时

// let tlist=document.querySelectorAll(".time")
// setInterval(()=>{
//     let nowTime=new Date().getTime()    //new Date()  是一个对象；对象.方法；getTime是将对象时间转为毫秒
//     let futureTime=new Date(2019,5,21,19,0,0).getTime()
//     ctime=futureTime-nowTime
//     let s=Math.floor(ctime/1000%60)
//     s=s<10?`0${s}`:s
//     let m=Math.floor(ctime/1000/60%60)
//     m=m<10?`0${m}`:m
//     let h=Math.floor(ctime/1000/60/60%24)
//     h=h<10?`0${h}`:h
//     tlist[0].innerHTML=h   //操作元素的内容
//     tlist[1].innerHTML=m
//     tlist[2].innerHTML=s
// },1)







////电子表
//通过时间对象身上的getHours,getMinuts,getSeconds方法获得当前的时分秒显示在页面中
//通过setInterval每隔一秒重新获取一次当前的时分秒，实现正常的时间展示

//1、获取页面元素
//2、实例化Date对象
//3、通过这个对象获得当前的时分秒
//4、通过setInterval每隔一秒重新获取一次当前的时间
//5、将时间显示在页面中
let tlist=document.querySelectorAll(".time")
console.log(tlist)
let a,b,c,d
setInterval(()=>{
    a=new Date()
    b=a.getHours()
    b=b<10?`0${b}`:b
    tlist[0].innerHTML=b
    c=a.getMinutes()
    c=c<10?`0${c}`:c
    tlist[1].innerHTML=c
    d=a.getSeconds()
    d=d<10?`0${d}`:d
    tlist[2].innerHTML=d
},1)

}
