function chessStart() {
    const button = document.getElementById('chessStart');
    button.style.display = 'none'; // 버튼 숨기기
    const coolsA = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

    const chessboard = document.getElementById('chessboard');

    let color = 0;
    for (let coolA of coolsA) { // 외부 루프 변수 변경
        for (let col = 1; col <= 8; col++) { // 내부 루프 변수 변경
            color = Math.abs(color - 255);
            const square = document.createElement('div');
            square.classList.add('chess-square');
            square.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
            square.dataset.cool = coolA+col;
            
            // 생성된 div를 체스보드에 추가
            chessboard.appendChild(square);
        }
        color = Math.abs(color - 255);
    }
}

// 버튼에 클릭 이벤트 리스너 추가
document.getElementById('chessStart').addEventListener('click', chessStart);