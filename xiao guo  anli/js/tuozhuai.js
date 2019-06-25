window.onload=()=>{
//所用事件：鼠标按下事件，鼠标移动事件，鼠标抬起事件
//1、鼠标按下事件：根据事件对象保存初始位置的数据，x/y
//2、鼠标移动事件：保存鼠标移动过程的位置；将移动的位置与初始位置进行运算得出元素的定位位置；给元素设置相应d的定位属性，实现元素跟随鼠标移动一起移动
//3、鼠标抬起事件：鼠标抬起时需要清除掉鼠标移动事件，将元素放在当前位置；使用onmoueseover添加事件，将它改为null；通过addEventListener添加的事件监听，使用removeEventListener移除事件监听


//元素距离窗口左上角水平或垂直距离 （clientX/Y，坐标），鼠标在元素中点击时距离元素左上角水平或垂直距离 (offsetX/Y)  
//根据上面的两组距离，对元素进行位置设置，（元素需要定位，才有left,top等属性）
//给移动添加边界条件
//鼠标抬起后移除事件


//1、获取元素
//2、给元素添加鼠标按下事件
//3、事件触发时的一些信息保存在事件对象中（事件处理函数的第一个参数是事件对象）
//4、当鼠标按下时触发鼠标移动事件模拟拖拽。需要给窗口添加鼠标移动事件（在窗口上操作），通过监听的方式
//5、保存鼠标当前在浏览器窗口的位置
//6、给元素设置定位属性
//7、判断边界（最大与最小），防止元素超出浏览器；（水平最大：window.innerwidth-元素.offsetWidth  [浏览器窗口宽度-元素实际宽度];最小：0）
//8、添加鼠标抬起事件，清除onmousemove事件，为了鼠标在屏幕的任何位置抬起的时候都能清除mousemove事件，我们需要将鼠标抬起事件添加给window


let box=document.querySelector(".box")    
let startX,startY,endX,endY    
let x,y
box.onmousedown=(e)=>{    
    startX=e.offsetX         //鼠标按下时，鼠标在元素内部的横坐标，（以元素左上角为原点）
    startY=e.offsetY          //鼠标按下时，鼠标在元素内部的横坐标，（以元素左上角为原点）
    window.addEventListener("mousemove",move,false)    //鼠标按下添加鼠标移动事件
}

function move(event){
    endX=event.clientX           //鼠标移动后，鼠标在窗口中的位置对应的横坐标
    endY=event.clientY
    x=endX-startX                //鼠标移动后，元素横向的移动量
    y=endY-startY
    if(x>=window.innerWidth-box.offsetWidth){
        x=window.innerWidth-box.offsetWidth
    }
    if(y>=window.innerHeight-box.offsetHeight){
        y=window.innerHeight-box.offsetHeight
    }
    if(x<=0){x=0}
    if(y<=0){y=0}
    box.style.left=x+"px"         //元素位置
    box.style.top=y+"px"
}
window.onmouseup=()=>{
    window.removeEventListener("mousemove",move)   //鼠标抬起的时候，移除移动事件
}







}




