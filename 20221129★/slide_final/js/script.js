$(function () {
    let bgColor = ["pink","green","blue","orange","purple"]
    $(".img").css({
        backgroundColor:function(i){
            return bgColor[i]
        }
    })
    let imgWidth = $(".img").width();
    console.log(imgWidth)
    $("#next").click(function() {
        $("#img_wrap").animate({
            left : -imgWidth,
        },500, function () {
            $("#img_wrap").css({
                left: 0
            }).find(".img:first").appendTo("#img_wrap")
        })
    })
    // prev 클릭하면~~
    $("#prev").click(function () {
        $("#img_wrap").css({
            left : -imgWidth
        }).find(".img:last").prependTo("#img_wrap")

        $("#img_wrap").animate({
            left : 0
        },500)
    });
    // setInterval(실행함수,  시간)
    // trigger 강제실행 $("선택자").trigger("click");
    // setInterval 멈추게 하는법 => clearInterval(이름)

    function moveSlide() {
        time = setInterval(function () {
            $("#next").trigger("click");
        },2000);
    }
    moveSlide();

    // 마우스 올리면 멈추고 마우스 떠나면 다시 실행

    $("#mask").hover(function () {
        clearInterval(time)
    }, function () {
        moveSlide();
    })
})
