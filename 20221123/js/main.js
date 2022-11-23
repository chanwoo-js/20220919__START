// $(document).ready(function () {
//
// })
// 축약 버전
$(function () {
    let ww = $(window).width();
    let wh = $(window).height();

    // 함수화
    function layout () {
        $("#wrap").css({
            width:ww*3,
            height:wh*3,
            top : -wh,
            left: -ww
        });
        $("section").css({
            width: ww,
            height: wh,
        });
        $("#align").css({
            width:ww*3,
            height:wh
        });
        $("#top_page, #bottom_page").css({
            left:ww
        })

    }
    layout();
    //리사이즈
    $(window).resize(function () {
        ww = $(window).width();
        wh = $(window).height();
        layout();
    })

    // top
    $("#main_to_top").click(function () {
        $("#wrap").animate({
            top : 0,
        })
    })
    $("#top_to_main").click(function () {
        $("#wrap").animate({
            top : -wh,
        })
    })
    //left
    $("#main_to_left").click(function () {
        $("#wrap").animate({
            left: 0,
        })
    })
    $("#left_to_main").click(function () {
        $("#wrap").animate({
            left: -ww,
        })
    })
    // bottom
    $("#main_to_bottom").click(function () {
        $("#wrap").animate({
            top: -wh*2,
        })
    })
    $("#bottom_to_main").click(function () {
        $("#wrap").animate({
            top: -wh,
        })
    })
    // right
    $("#main_to_right").click(function () {
        $("#wrap").animate({
            left: -ww*2,
        })
    })
    $("#right_to_main").click(function () {
        $("#wrap").animate({
            left: -ww,
        })
    })
})