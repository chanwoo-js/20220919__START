// const BOX = document.querySelector('.picBox');
// const BOXIMG = document.querySelector('.picBox>img')
// var altText = BOXIMG.getAttribute('alt');
// var captionElement = document.createElement("figcaption"); // 요소를 생성

// captionElement.append(altText);
// BOX.append(captionElement);
// BOXIMG.setAttribute("alt", "pic")

// console.log(altText);
const img = document.querySelector("img");
const imgSrc = img.removeAttribute("alt");

console.log(img.getAttribute("alt"))
// 우리가 우주에서 본 지구의 모습니다.