const tabMenu = document.querySelectorAll(".tab_menu > li"),
    underline = document.querySelector(".underline"),
    tab = document.querySelectorAll(".tab");

tabMenu.forEach((item, index) => {
    console.log(item, index);
    item.addEventListener("click", (e) => {
        e.preventDefault()// a태그가 가진 기본 속성을 제거한다.``
        showCon(index);
        moveUnderline(index);


    })
})

const showCon = (i) => {
    tab.forEach((i) => {
        i.style.display = "none";
    })
    tab[i].style.display = "block";
}

const moveUnderline = (i) => {
    let showLeft = tabMenu[i].offsetLeft;
    let showWidth = tabMenu[i].offsetWidth;
    console.log(showLeft, showWidth);

    underline.style.left = showLeft + "px";
    underline.style.width = showWidth + "px";
}
