const ani = document.getElementById('ani')
const start = document.getElementById('start')
const end = document.getElementById('end')

start.addEventListener('mousedown',()=>{
    ani.style.animationDuration = '2s';
    ani.style.animationIterationCount = 'infinite'
});


end.addEventListener('mousedown',()=>{
    ani.style.animationDuration = '0s';
    ani.style.animationIterationCount = '0'
});