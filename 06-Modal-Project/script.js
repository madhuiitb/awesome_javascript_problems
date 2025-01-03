'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');

const buttonsOpenModal = document.querySelectorAll('.show-modal');


const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    // modal.style.display = 'block';
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    // modal.style.display = 'none';
}


for (let i = 0; i < buttonsOpenModal.length; i++){
    buttonsOpenModal[i].addEventListener('click', openModal)      
}

btn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// keyup - when we removed finger
// keypress -continue event
// keydown - when you press
document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains(this.hidden)) {
        closeModal();
    }
})