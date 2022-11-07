var divDom = document.querySelector("div");

for (let i = 0; i < 6; i++) {
    let img = document.createElement("img"); // 이미지 태그를 생성하겠다
    img.setAttribute("src",`./images/color_${i}.png`) // 생성한 이미지 태그에 속성을 추가하겠다
    // src 경로는 , 여기다
    divDom.append(img) // append는 자식으로 들어가게된다
}