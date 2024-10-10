document.addEventListener('DOMContentLoaded', () => {
    const manues = document.querySelectorAll('.manu');
    const main = document.getElementById('main');
    const mainText = document.getElementById('mainText');
    let alin = false;
    let alinC = false;
    const divAlin = document.getElementById('alin')
    const divAlinC = document.getElementById('alinC')
    const divBlocks = document.querySelectorAll('#block')

    divAlin.addEventListener('mouseenter', ()=> {
        alin = true;
    })
    divAlin.addEventListener('mouseleave', ()=> {
        alin = false;
    })
    divAlinC.addEventListener('mouseenter', ()=> {
        for (const divBlock of divBlocks){
            divBlock.style.width='30%';
            divBlock.style.height='30%';
        }
        main.style.flexFlow = 'row wrap'
        alinC = true;
    })
    divAlinC.addEventListener('mouseleave', ()=> {
        for (const divBlock of divBlocks){
            divBlock.style.width='10%';
            divBlock.style.height='10%';
        }
        alinC = false;
    })

    // 각 manu 요소에 클릭 이벤트 추가
    for (const manu of manues) {
        manu.addEventListener('mousedown', () => {
            // manu.id 값에 따라 justifyContent를 설정
            mainText.textContent = manu.dataset.name;
            if (alin){
                main.style.alignItems = manu.dataset.name;
            }
            else if(alinC){
                main.style.alignContent = manu.dataset.name;
            }
            else {
                main.style.justifyContent = manu.dataset.name;
            }
        });
    }
});