const pages = document.querySelectorAll('.page');
let isDragging = false;
let startX = 0;

document.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaAngle = (e.clientX - startX) / 2;
        pagemove(deltaAngle);
    }
});

document.addEventListener('mouseup', (e) => {
    isDragging = false;
});

function pagemove(deltaAngle) {
    // 모든 페이지의 변환된 높이를 배열에 저장
    const heightList = [];

    for (let page of pages) {
        const angleY = parseInt(page.dataset.angle);
        const angle = deltaAngle + (angleY * 45);
        const inputTransform = `rotate3d(0, 1, 0, ${angle}deg) translateX(50%)`;
        page.style.transform = inputTransform;

        // 변환된 높이를 가져옴
        const transformedHeight = page.getBoundingClientRect().height;
        
        // 페이지와 변환된 높이를 배열에 저장
        heightList.push({ page, height: transformedHeight });
    }

    // 높이값을 기준으로 배열을 정렬 (높은 순서대로)
    heightList.sort((a, b) => b.height - a.height);

    // 높이 순서대로 z-index를 설정
    heightList.forEach((item, index) => {
        item.page.style.zIndex = pages.length - index; // 높이가 클수록 z-index가 높게 설정
    });
}
