// Script da página1 (index.html)
const btnSidebar = document.querySelector('.btnSidebar');
const sidebar = document.querySelector('.sidebar');

let aberto = false; // inicialmente fechado

btnSidebar.addEventListener('click', () => {
    aberto = !aberto; // alterna entre true/false
    sidebar.style.left = aberto ? '0px' : '-350px';
});