window.onload=()=>{

//按需加载：根据用户的需求去显示相应的内容，当页面滚到到某一阶段时，再进行图片的加载
//图片：加载中/加载完成

//1、确定按需加载的定义
//2、如何去进行
//3、通过将图片的地址放在字定义的属性中，当我们需要时再将这个地址放在img标签的src属性中
//4、获取操作元素，将图片的路径放在自定义属性中
//5、根据条件，页面滚动过的距离来判断用户是否需要加载图片，如果需要将自定义属性中的路径放在css 属性中，如果不需要就不需要进行这个操作



//1、js生成图片，通过for循环   
//str,用来保存拼接后的字符串   
//2、将要加载的图片的路径放在自定义属性data-src中
//获取img
//3、页面加载完成后，显示70张

let str=""   //str,用来保存拼接后的字符串  
for(let i=0;i<100;i++){
    str+=`<div class="image">
            <img src="img/jzz.jpg" alt="" />
          </div>`
    //``反引号，保留格式，可换行
    //"+=",字符串拼接合并，=赋值，会覆盖原来的
}
let bigbox=document.querySelector(".imgbox")
bigbox.innerHTML=str    //innerHTML,获取或修改元素的内容，识别标签(str中的标签被识别)，保留文本格式;=赋值
let imglist=document.querySelectorAll(".imgbox .image img")
//给每一个图片添加自定义属性，保存要加载的图片的路径，遍历
imglist.forEach((v,i)=>{  
    v.setAttribute("data-src","img/jzw.jpg")
})
imglist.forEach((v,i)=>{
    if(i<16){
        v.src=v.getAttribute("data-src")    //图片加载成功，
    } 
})
window.onscroll=()=>{
    imglist.forEach((v,i)=>{
        if(i>=16){
            let windowH=window.innerHeight
            let scrollH=document.documentElement.scrollTop
            if(v.offsetTop<=windowH+scrollH){
                setTimeout(() => {
                    v.src=v.getAttribute("data-src")
                }, 100);
              
            }
        }
    })
}









}
