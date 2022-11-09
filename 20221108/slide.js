document.addEventListener("DOMContentLoaded", () => {
    // let mask = document.querySelector(".mask");
    // let slider_con = document.querySelector(".slider_con");
    // let slide = document.querySelectorAll(".slide");
    // let slide_count = slide.length;
    // let prev_button = document.querySelector("#prev");
    // let next_button = document.querySelector("#next");
    // let current_index = 0;
    // console.log(slide);
    //
    // function move (idx) {
    //     slider_con.style.left = idx * -100 + "%";
    //     slider_con.classList.add("animated")
    //     current_index = idx;
    // }
    //
    // next_button.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     if(current_index < slide_count -1){
    //         move(current_index + 1);
    //     } else {
    //         move(0);
    //     }
    //     console.log(current_index);
    // })
    //
    // prev_button.addEventListener("click", (e) => {
    //     e.preventDefault();
    //
    //     if(current_index > 0){
    //         move(current_index - 1);
    //     } else {
    //         move(0)
    //     }
    // })
    // function autoMove(){
    //     time = setInterval(() => {
    //         let autoIdx = (current_index + 1)% slide_count
    //         move(autoIdx);
    //         console.log(autoIdx);
    //     },1000)
    // }
    // autoMove();
    // mask.addEventListener("mouseenter",()=>{
    //     clearInterval(time);
    // });
    // mask.addEventListener("mouseleave",() => {
    //     autoMove()})

    let slide = document.querySelector(".slide");
    let slide_img = document.querySelector(".slide_img");
    let slide_img_count = document.querySelectorAll(".slide_img").length;
    let slide_img_width = slide_img.offsetWidth;
    slide.style.width = slide_img_width * slide_img_count + "px";
    let prev_button = document.querySelector(".left_button");
    let next_button = document.querySelector(".right_button");
    let positon = 0;

    prev_button.addEventListener("click", (e) => {
        e.preventDefault();
        if (positon < slide.style.width ){
            slide.style.right = (slide.style.width - slide_img_width)  + "px";
            slide.classList.add("animated")
        }else {
            positon -= slide_img_width;
            slide.style.left = positon + "px";
        }
    })
    next_button.addEventListener("click", (e) => {
        e.preventDefault();
        slide.style.right = slide_img_width + "px";
    })
});