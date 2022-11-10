document.addEventListener("DOMContentLoaded", () => {
    //1. 변수 지정
    let mask = document.querySelector(".mask"), // 실 지정된 뷰 영역, (960 x 500)px
        slide = document.querySelector(".slide"), // slide 의 이미지가 깔리는 영역 ( 뷰 영역과 관계없이 길어짐 )
        slideBox = document.querySelectorAll(".slide>li"), // item box
        prev = document.querySelector("#prev"),//왼쪽 버튼
        next = document.querySelector("#next"), // 오른쪽 버튼
        currentIndex = 0, // 현재 index value
        slideCount = slideBox.length, // li 의 총 갯수
        slideWidth = 300,// 사진 하나당 width`
        slideMargin = 30; // 사진 하나당 마진

    console.log(slideBox);
    make();

    // 복제하는 함수 만들기
    function make() {
        //뒤에 복사
        for (let i = 0; i < slideCount; i++) {
            //객체.cloneNode();
            let cloneSlide = slideBox[i].cloneNode(true);
            slide.appendChild(cloneSlide)
            // appendChild 뒤에 복사
        }
        //앞에 복사
        for (let i = slideCount - 1; i >= 0; i--) {
            let cloneSlide = slideBox[i].cloneNode(true);
            slide.prepend(cloneSlide)
        }
    }

    // 3. slideBox 정렬 가로방향
    slideUpdate();

    function slideUpdate() {
        let currentSlideBox = document.querySelectorAll(".slide>li");
        let currentCount = currentSlideBox.length;
        console.log(currentSlideBox);
        console.log(currentCount);

        let newWidth = (slideWidth + slideMargin) * currentCount + "px";
        //(300+30)*15
        slide.style.width = newWidth;
    }

    // 4. 버튼 누르면 이동하는 함수
    console.log(slideCount)
    moveTransform();

    function moveTransform() {
        let transformSlide = -slideCount * (slideWidth + slideMargin);
        // 5 * (300 + 30);
        slide.style.transform = `translateX(${transformSlide}px)`;
    }

    function moveSlide(idx) {
        slide.style.left = -idx * (slideWidth + slideMargin) + "px";
        currentIndex = idx;
        console.log(currentIndex);

        // 버튼을 누르면 이동
        if (currentIndex === slideCount || currentIndex === -slideCount) {
            // 5===5 || 5===-5
            setTimeout(() => {
                slide.classList.remove("animate");
                slide.style.left = "0px";
                currentIndex = 0;
            }, 500);
            setInterval(() => {
                slide.classList.add("animate");
            }, 600);
        }
    }

    // 5. 버튼 클릭시 이동
    next.addEventListener("click", () => {
        moveSlide(currentIndex + 1);
    });
    prev.addEventListener("click", () => {
        moveSlide(currentIndex - 1);
    });

    // 6. 자동 클릭 이동
    autoSlide();

    function autoSlide() {
        timer = setInterval(() => {
            moveSlide(currentIndex + 1)
        }, 1500)
    }

// 7. 마우스를 올렸을때 엄춤
    mask.addEventListener("mouseenter", () => {
        clearInterval(timer)
    })
    mask.addEventListener("mouseleave", () => {
            autoSlide();
        }
    )
});
