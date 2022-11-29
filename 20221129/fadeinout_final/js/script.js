$(function () {
    // 이벤트 실행 click
    // fadeIn / fadeOut
    // eq() / 0 이 첫번째 의미
    let i = 0;
    $("#next").click(function () {
        i++;
        if(i>4){
            i = 0
        }
        //내가 클릭한 i 번째 요소는 보이고 나머지는 안보이게
        imgMove();
        console.log(i)
    })
    $("#prev").click(function () {
        i--;
        if(i<0){
            i = 4;
        }
        imgMove();
        console.log(i);
    })

    // 함수화 작업 imgMove
    function imgMove(){
        $(".box").fadeOut();
        $(".box").eq(i).fadeIn();
    }
    imgMove();


    function moveSlide() {
        time = setInterval(function () {
            $("#next").trigger("click");
        },2000);
    }
    moveSlide();
})