$(function (e){
    // e.preventDefault();
    // a tag 링크 제거
    // toggleClass
    // =>요소에 클래스값이 없으면 더해지고 , 있으면 빼줌
    // ham_but on 클래스값

    $(".ham_but").click(function (e) {
       e.preventDefault();
       $(this).toggleClass("on");
       $(".menu_box").toggleClass("show");
    })
})