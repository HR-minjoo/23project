const joinBtn = document.querySelector(".body-btn");
const closeBtn = document.querySelector(".close-btn")
const modalPage = document.querySelector(".modal-page");
const navBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

joinBtn.addEventListener('click',openModal);
closeBtn.addEventListener('click',closeModal);
navBtn.addEventListener('click',openNav);

function openNav(){
    links.classList.toggle('show-links');
}

function openModal(){
    modalPage.classList.add('show-modal');
}

function closeModal(){
    modalPage.classList.remove('show-modal');
}
