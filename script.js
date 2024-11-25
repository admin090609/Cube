let mouseX = 0;
let mouseY = 0;
let cubeX = 0;
let cubeY = 0;

document.addEventListener('mousemove', function(e) {
    const cube = document.querySelector('.cube');
    mouseX = e.clientX - window.innerWidth / 2;
    mouseY = e.clientY - window.innerHeight / 2;
    
    cubeX = (mouseX / window.innerWidth) * 360;
    cubeY = (mouseY / window.innerHeight) * 360;
    
    cube.style.transform = `rotateY(${cubeX}deg) rotateX(${-cubeY}deg)`;
});