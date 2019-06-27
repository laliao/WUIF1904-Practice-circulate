$(function() {
    $("img.lazy").lazyload({
        placeholder: "img/jzz.jpg", //中间用“，”隔开语句；占位，图片没有加载时，显示jzz图片
        effect: "fadeIn", //载入特效，淡入
        event: "click" //事件触发时才加载
    })



    $("form").validate({
        rules: {
            username: {
                required: true, //必填
                minlength: 4, //最少四个字符长度
                maxlength: 10
            },
            Password: {
                required: true, //必填
                minlength: 4, //最少四个字符长度
                maxlength: 10,
            },
            Password1: {
                required: true, //必填
                minlength: 4, //最少四个字符长度
                maxlength: 10,
                equalTo: "#check"
            },

        },
        message: {
            username: {
                required: "请输入用户名", //必填
                minlength: "您的名字太短", //最少四个字符长度
                maxlength: "您的名字过长"
            },
            Password: {
                required: "请输入密码", //必填
                minlength: "您的密码太短", //最少四个字符长度
                maxlength: "您的密码过长"
            },
            Password1: {
                required: "请输入密码", //必填
                minlength: "您的密码太短", //最少四个字符长度
                maxlength: "您的密码过长",
                equalTo: "以上面密码不一致"
            },
        }

    })





    $(".fullpage").fullpage({
        navigation: true,
        navigationPosition: "left",
        controlArrowColor: "#000",

    })




    var mySwiper = new Swiper(".swiper-container", {
        autoplay: {
            autoplay: true,
            disableOnInteraction: false,
            delay: 300,
        },
        loop: true,
    })



    var myScroll = new IScroll('#boxb')

})