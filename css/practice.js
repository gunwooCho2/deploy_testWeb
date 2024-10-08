const clickArea = document.getElementById('clickArea');
const coordDisplay = document.getElementById('coordDisplay');
let moving = false;

// 클릭 이벤트로 moving을 false로 설정하여 움직임을 멈춥니다.
clickArea.addEventListener('click', (event) => {
    moving = false;
    clickArea.style.cursor = 'grab';

    // 요소의 현재 위치를 정확히 얻기 위해 getBoundingClientRect() 사용
    const rect = clickArea.getBoundingClientRect();

    // 클릭한 위치에서 요소의 위치를 뺌
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const x_percent = Math.floor((x / rect.width) * 100);
    const y_percent = Math.floor((y / rect.height) * 100);

    const x_shadow = (x_percent - 50) * -1;
    const y_shadow = (y_percent - 50) * -1;
    const shadowing = `${x_shadow}px ${y_shadow}px ${Math.abs(x_shadow + y_shadow)}px black`;

    clickArea.style.background = `radial-gradient(circle at ${x_percent}% ${y_percent}%, white, black)`;
    clickArea.style.boxShadow = shadowing;
});

// 더블 클릭 시 moving을 true로 설정하여 움직임을 시작합니다.
clickArea.addEventListener('dblclick', (event) => {
    moving = true;
    clickArea.style.cursor = 'grabbing';
});

// 마우스 이동 시 moving이 true이면 요소를 이동시킵니다.
document.addEventListener('mousemove', (event) => {
    if (moving) {
        moveClick(event);
    }
});

function moveClick(event) {
    // 요소의 position을 absolute로 설정해야 left와 top이 적용됩니다.
    clickArea.style.position = 'absolute';

    // 마우스 위치에서 요소의 크기의 절반을 빼서 중앙에 위치시킵니다.
    const x = event.clientX - clickArea.offsetWidth / 2;
    const y = event.clientY - clickArea.offsetHeight / 2;

    // 요소의 위치를 left와 top으로 설정
    clickArea.style.left = `${x + window.pageXOffset}px`;
    clickArea.style.top = `${y + window.pageYOffset}px`;
}