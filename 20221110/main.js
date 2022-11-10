document.addEventListener("DOMContentLoaded", () => {
    let header = document.querySelector("header"),
        topMenu = document.querySelectorAll(".top_menu"),
        subMenu = document.querySelectorAll(".sub_menu"),
        subMenuHeight = 0,
        headerHeight = header.offsetHeight; // 80

    for (let i = 0; i < topMenu.length; i++) {
        topMenu[i].addEventListener("mouseenter", (e) => {
            subMenuHeight = e.target.offsetHeight;
            console.log(subMenuHeight)
            console.log(headerHeight);
            subMenu.style.height = headerHeight +  subMenuHeight + "px";
        })
        topMenu[i].addEventListener("mouseleave",()=>{
            header.style.height = headerHeight + "px";
        })
    }
})