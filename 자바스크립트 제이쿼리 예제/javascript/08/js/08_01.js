document.querySelector("nav>ul>li:nth-child(1)").classList.add("sub");
// 선택된 tag에 class명 추가 (원래 class 명을 가지고 있었다면 교체되는게 아니라 추가가 된다)
document.querySelector("nav>ul>li:nth-child(2)").classList.remove("num02")
// // 선택된 tag에 class 명 삭제  ( 몇개가 있던지 상관없이 다 삭제 )

const sub = document.querySelector("nav>ul>li:nth-child(3)").classList.contains("num03");
console.log(sub)
// 선택된 태그에 해당되는 tag.classList.contains("class") 클래스가 있는지 boolean으로 뱉어줌 ( ture / false )


const sub1 = document.querySelector("nav>ul>li:nth-child(3)").classList.toggle("num03");
console.log(sub1)
// 선택된 태그에 해당되는 tag.classList.toggle("class")
// class를 가지고 있다면 false값으로 뱉고 해당 클래스를 삭제시킨다.
const sub2 = document.querySelector("nav>ul>li:nth-child(3)").classList.toggle("num03");
console.log(sub2)
//반대로 class가 없다면 true로 만들고 해당 클래스를 추가한다.

