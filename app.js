const navBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navBtn.addEventListener('click',openNav);

function openNav(){
    links.classList.toggle('show-links');
}
