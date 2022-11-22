$(document).ready(function () {
    // 1. 윈도우 가로크기 설정
    let window_w = $(window).width();
    console.log(window_w);
    // 2. 윈도우 세로크기 설정
    let window_h = $(window).height();
    console.log(window_h);

    // 리사이즈를 위한 함수화 작업
    function layout() {
        // 전체 여백 초기화
        $("*").css({
            margin: 0,
            padding: 0,
        });
        // wrap 스타일
        $("#wrap").css({
            width: window_w,
            height: window_h * 4,
        });
        // page 스타일
        let bg = ["lightgreen", "crimson", "gold", "lightcoral"]
        $(".page").css({
            width: window_w,
            height: window_h,
            // 배열로 4가지 컬러 저장
            // 함수 형식으로 속성 지정
            backgroundColor: function (i) {
                return bg[i]
            }
        })
        // in_page 가로, 세로 윈도우 크기 0.8비율
        $(".in_page").css({
            width: window_w * 0.8,
            height: window_h * 0.8,
        })
    }
    // 리사이즈를 위한 함수화 작업
    layout();
    $(window).resize(function () {
        window_w = $(window).width();
        window_h = $(window).height();
        // 브라우저 크기가 리사이즈 될때
        // 변경되어야할 수치값 함수화 작업해서 넣기
        layout();
    });

});