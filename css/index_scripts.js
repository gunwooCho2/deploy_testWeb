const Move = document.getElementById('Move');

Move.addEventListener('mouseenter', () => {
    Move.classList.add('hovered')
})

Move.addEventListener('mouseleave', () => {
    Move.classList.remove('hovered')
})
