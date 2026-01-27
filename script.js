document.addEventListener('mousemove', (e) => {
    const stars = document.getElementById('stars');
    let x = e.clientX;
    let y = e.clientY;
    stars.style.transform = `translate(${x/50}px, ${y/50}px)`;
});

