// $(
//     function() {
//         console.log($(".box"))
//     })



function jquery(selector) {
    var ele = document.querySelectorAll(selector)
        //通过隐式循环将元素放在juery对象上，方便我们调用每一个元素
    for (let i = 0; i < ele.length; i++) {
        // if (typeof boxlist[i] == String) {
        //     this[i] = boxlist[i]
        // }
        // if (typeof boxlist[i] == Function) {
        //     return selector
        // }
        this[i] = ele[i]
    }
    //设置jquery对象长度
    this.length = ele.length
}


//在jq的原型上封装需要的方法
jquery.prototype = {
    css: function(attr, value) { //attr保存属性名的变量
        //将获取到的每一个样式进行设置
        for (let i = 0; i < this.length; i++) {
            this[i].style[attr] = value //每一个的样式设置
        }
        //给方法一个返回值，返回值是jq本身，这样可以保证每次方法调用结束后，结果都是一个jq对象，方便链式调用
        return this;
    },
    html: function(text) {
        for (let i = 0; i < this.length; i++) {
            this[i].innerHTML = text
        }
        return this;
    }

}

let a = new jquery(".box")
    // a.css("color", "red")
    // a.html("这是一端文本")
a.css("color", "red").html("这是一段文本")







$("#single").val("Single2");
$("#multiple").val(["Multiple2", "Multiple3"]);
$("input").val(["check2", "radio1"]);


// $("p").slideUp("slow")
// $("p").slideToggle("slow");
// $("p").slideToggle("fast", function() {
//     alert("Animation Done.");
// });
// $("p").fadeIn("slow");
// $("p").fadeOut("slow");
// $("p").fadeTo("slow", 0.66);
// $("p").fadeToggle("slow", "linear");


$("#go").click(function() {
    $("#block").animate({
        width: "90%",
        height: "100%",
        fontSize: "10em",
        borderWidth: 10
    }, 1000);
});
$("p").animate({
    height: 'toggle',
    opacity: 'toggle'
}, "slow");