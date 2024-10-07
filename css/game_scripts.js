let CoordinateY, CoordinateX;
let spawnCoolDown = 3000;
let playerHeart = 3;
let score = 0;

// 랜덤 좌표 생성
function randomcoordinate() {
    CoordinateY = Math.floor(Math.random() * (90 - 11)) + 10;
    CoordinateX = Math.floor(Math.random() * (90 - 11)) + 10;
}

// 게임 시작
function start() {
    // 버튼 숨기기
    document.querySelector('input').style.display = 'none';

    // 적 스폰 시작
    enemySpawner();
}

function enemySpawner() {
    let enemyDiv = document.getElementById('enemy');
    randomcoordinate();
    responeEnemy(enemyDiv);

    // 적이 일정 시간 후에 사라지지 않으면 생명 감소
    setTimeout(function () {
        if (enemyDiv.getAttribute('data-alive') === 'true') {
            // 적을 놓쳤음 -> 생명 감소
            playerHeart -= 1;
            console.log("Heart lost! Remaining hearts: " + playerHeart);
        }

        // 스폰 쿨타임 감소
        spawnCoolDown = spawnCoolDown - (spawnCoolDown / 10);

        // 게임 오버 여부 확인
        if (playerHeart > 0) {
            enemySpawner();
        } else {
            gameover(enemyDiv);
        }
    }, spawnCoolDown);
}

// 적을 새로운 위치에 표시
function responeEnemy(enemyDiv) {
    enemyDiv.setAttribute('data-alive', 'true'); // 적이 살아있음
    enemyDiv.style.top = CoordinateY + '%';
    enemyDiv.style.left = CoordinateX + '%';
    enemyDiv.style.display = 'block';  // 적 표시
}

// 적을 클릭하여 제거
function destroyEnemy() {
    let enemy = document.getElementById('enemy');
    enemy.setAttribute('data-alive', 'false'); // 적이 죽음
    enemy.style.display = 'none'; // 적 숨기기
    score += 1;
    console.log("Enemy destroyed!");
}

// 게임 오버 처리
function gameover(enemyDiv) {
    let gameOverBox = document.getElementById('Gameover');
    let displayScore = document.getElementById('displayScore');
    let saveScore = document.getElementById('saveScore');

    displayScore.innerText = 'score:' + score;
    gameOverBox.style.display = 'block'; // 게임 오버 메시지 표시
    displayScore.style.display = 'block';
    saveScore.style.display = 'block';

    enemyDiv.style.display = 'none'; // 적 숨기기
    console.log("Game Over");
}
const obj = {};
function saveScore() {
    nickname = document.getElementById('Inputname').value;
    if (nickname in obj){
        savescore = obj.nickname;
        if (score > savescore) {
            obj.nickname = score;
        }
    }
    else {
        obj.nickname = score;
    }
    obj = Object.entries(obj).sort((a, b) => a[1] - b[1]);
}