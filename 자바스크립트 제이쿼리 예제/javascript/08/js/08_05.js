const BTN = document.querySelector(".cta>a")
const ALERT = document.querySelector("#no")

function info(){
    ALERT.classList.toggle("hide"); // 아이디가 no인 태그에 class hide가 없으면 추가하겠다. 
    // 있다면 삭제하겠다.
}
//1 .  BTN.onclick = info // a태그를 마우스로 클릭하면 info 를 실행하라;

BTN.addEventListener("click", info)
