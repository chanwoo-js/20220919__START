const main = document.getElementById("skill");
console.log(main);
const sub = document.getElementsByTagName("a");
console.log(sub);
const sub2 = document.getElementsByTagName("a")[2];
console.log(sub2);
sub2.style.background = "red"; // 배경 색상 바꾸기
document.getElementsByTagName("a")[2].style.color = "white"; // 폰트 색상 바꾸기

const se01 = document.querySelector("#skill > dl");
console.log(se01);
se01.style.background = "yellow"; // 배경 색상 바꾸기

const se02 = document.querySelectorAll("nav>ul>li>a");
console.log(se02);

const se03 = document.querySelectorAll("nav > ul > li > a")[2];
console.log(se03);
se03.innerHTML = `${se02}`; // 선택한 태그 안에 텍스트추가하기

c
