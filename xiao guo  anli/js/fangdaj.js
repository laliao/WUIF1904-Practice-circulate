// window.onload = function() {
//思路
//通过提前放好一张放大的图片，移动图片进行放大镜的展示（模拟放大镜）
//需要显示的区域与放大的图片之间有一个比例
//根据比例计算出小块与图片的位置关系，通过定位不断的去改变显示的区域



//步骤
//鼠标移入小图，显示放大镜和旁边大图
let ol, ot
$(function() {
    $(".mask").on("mousemove", function(e) {
        // console.log(e)
        ol = e.offsetX - $(".smallbox").width() / 2 //鼠标距离事件元素左上角的水平距离
        ot = e.offsetY - $(".smallbox").height() / 2
        if (ol < 0) {
            ol = 0
        }
        if (ol >= $(".mask").width() - $(".smallbox").width()) {
            ol = $(".mask").width() - $(".smallbox").width()
        }
        if (ot < 0) {
            ot = 0
        }
        if (ot >= $(".mask").height() - $(".smallbox").width()) {
            ot = $(".mask").height() - $(".smallbox").width()
        }
        $(".small .smallbox").css({
                display: "block",
                left: ol + "px",
                top: ot + "px",
            })
            // $(".big").css("display", "block")
            // $(".big>img").css({
            //     left: -(ol * 6) + "px",
            //     top: -(ot * 6) + "px",
            // })
        $(".big").css("display", "block").children().css({
            left: -(ol * 6) + "px",
            top: -(ot * 6) + "px",
        })
    })
    $(".mask").on("mouseout", function() {
        $(".big").css("display", "none")
        $(".smallbox").css("display", "none")
    })

})



// }