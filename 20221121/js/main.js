$(document).ready(function (keyframes, options) {
    // 1. box : 가로 세로 400px, 배경
    // 2. 위치 : 절대 위치 ( 위 :0 / 왼쪽 : 0 )
    // 3. 텍스트 정렬 : 가로, 세로 , 중앙정렬
    // 4. 폰트 : 가장 두껍게, 진하기, 사이즈 : 50px
    $("#box").css({
        width: 400,
        height: 400,
        backgroundColor: "crimson",
        position: "absolute",
        top: 0,
        left: 0,
        textAlign: "center",
        lineHeight: "400px",
        fontWeight: 900,
        fontSize: "50px"
    })
    // animate
    // css 속성중에 크리값, 위치값, 여백값, 색상을 지정시간 동안 변화시키는 명령어
    // $("선택자").animate({
    //        속성 : 속성값,
    //        속성 : 속성값,
    //        ...
    // },시간, 가속도, 콜백함수);
    // => 가속도, 콜백함수는 생략 가능
    // => 콜백함수 : animate 식이 끝난 후 실행하는 식
    // 사용가능한 속성
    // 1) 크기값 width, height
    // 2) 위치값 position, top, left, bottom, right
    // 3) 여백값 margin, padding
    // 4) 배경색상, 투명도
    // $("#box").animate({
    //     left: 500,
    // }, 3000, function () {
    //     $("#box").delay(3000).animate({
    //         left: 0,
    //     }, 2000)
    // })
    // // box 를 클릭하면 box의 가로 크기를 2초동안 1000으로 변경시켜주세요
    // $("#box").on({
    //     click : function (){
    //         $("#box").animate({
    //             width: 1000,
    //         },2000)
    //     }
    // })
    // 위를 좀 더 간단하게
    $("#box").click(function () {
        $(this).animate({
            width: 1000,
        }, 2000)
    })
    $("#box2").css({
        width: 300,
        height: 300,
        backgroundColor: "crimson",
        position: "absolute",
        top: 400,
        left: 0,
        textAlign: "center",
        lineHeight: "300px",
        fontWeight: 900,
        fontSize: "30px"
    })


    function boxMove() {
        $("#box2").animate({
            left: 600,
        }, 4000, function () {
            $("#box2").animate({
                left: 0,
            }, 4000)
        })
    }
    setInterval(() => {
        boxMove();
    },8000)
    // setInterval(()=>{
    //     // 쿵
    //     $("#box2"). animate({
    //         left:600,
    //     },800) // 휙
    //     $("#box2"). animate({
    //         left:700,
    //     },800) //
    //     $("#box2"). animate({
    //         left:650,
    //     },500)
    //     $("#box2"). animate({
    //         left:700,
    //     },500)
    //     $("#box2"). animate({
    //         left:680,
    //     },500)
    //     $("#box2"). animate({
    //         left:700,
    //     },500)
    //     $("#box2"). animate({
    //         left:0,
    //     },1000)
    // },1000)

})
