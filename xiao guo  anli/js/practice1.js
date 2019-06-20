window.onload=function(){

let a=document.querySelector(".box")
// a.style.width="200px";
// a.style.height="200px";
// a.style.backgroundColor="red";


a.style.cssText="width:300px;height:300px;background-color:green;"

let b=window.getComputedStyle(a,null).width

console.log(b)
console.log(parseInt(b))

}