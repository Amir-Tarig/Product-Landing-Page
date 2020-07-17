const ham = document.querySelector('.ham');
const nav = document.querySelector('.nav-links');
const links = document.querySelectorAll('.links');


ham.addEventListener('click', () => {
    nav.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
        
    });
});