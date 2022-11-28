$(function () {
    let ww = $(window).width();
    // window  전체 가로크기를 실시간x 새로고침하면 현재 상태를 나타내줌
    console.log(ww);

    function layout() {
        // 1200px 이상
        if (ww >= 1200) {
            $("#box").css({
                width: 1000, height: 500, backgroundColor: "red", margin: "0 auto", color: "white", float: "none"
            })
        }
        ///1200px 미만 ~ 960 이상
        if (ww < 1200 && ww >= 960) {
            $("#box").css({
                width: 760, height: 800, backgroundColor: "yellow", color:"black", float: "right"
            })
        }
        ///960px 미만 ~
        if (ww < 960) {
            $("#box").css({
                width: 460, height: 400, backgroundColor: "blue", color : "yellow"
            })
        }
    }
    layout();

    //resize
    $(window).resize(function () {
        ww = $(window).width();
        layout();
    })
})