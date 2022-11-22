$(document).ready(function () {
    // 1. 윈도우 가로크기 설정
    let window_w = $(window).width();
    console.log(window_w);
    // 2. 윈도우 세로크기 설정
    let window_h = $(window).height();
    console.log(window_h);

    // time 1s
    // 1. btn1 을 클릭하면 wrap top 으로 -window_h 만큼 이동
    $("#but1").on("click", function () {
        $("#wrap").animate({top: -window_h}, 1000);
    })
    // 2. btn2을 클릭하면 wrap top 에서  -window_h*2만큼 이동``
    $("#but2").on("click", function () {
        $("#wrap").animate({top: -window_h*2},1000)
    })
    $("#but3").on("click", function () {
        $("#wrap").animate({left: -window_w},1000)
    })
    $("#but4").on("click", function () {
        $("#wrap").animate({left: -window_w*2},1000)
    })
    $("#but5").on("click", function () {
        $("#wrap").animate({top: 0, left : 0},1000)
    })
})