const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const loginBtn = document.querySelector('.login-btn');

loginBtn.addEventListener('click', openModal)

close.addEventListener('click', closeModal)

window.addEventListener('click', (e) => {
    if(e.target === modal) {
        closeModal();
    }
})

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}


