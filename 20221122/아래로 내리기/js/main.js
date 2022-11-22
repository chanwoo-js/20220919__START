$(document).ready(function () {
    // 1. 윈도우 가로크기 설정
    let window_w = $(window).width();
    console.log(window_w);
    // 2. 윈도우 세로크기 설정
    let window_h = $(window).height();
    console.log(window_h);

    // time 1s
    // 1. btn1 을 클릭하면 wrap top 으로 -window_h 만큼 이동
    $("#btn1").on("click", function () {
        $("#wrap").animate({top: -window_h}, 1000);
    })
    // 2. btn2을 클릭하면 wrap top 에서  -window_h*2만큼 이동
    $("#btn2").on("click", function () {
        $("#wrap").animate({top: -window_h*2},1000)
    })
    $("#btn3").on("click", function () {
        $("#wrap").animate({top: -window_h*3},1000)
    })
    $("#btn4").on("click", function () {
        $("#wrap").animate({top: 0},1000)
    })
})