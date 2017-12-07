const signUpBtn = document.getElementById('signUpBtn');
const signUpModal = document.getElementById('signUpModal');
const signUpSubmitBtn = document.getElementById('signUpSubmitBtn');
const loginSubmitBtn = document.getElementById('loginSubmitBtn');
const loginModal = document.getElementById('loginModal');
const modalOverlay = document.getElementById('modalOverlay');
const loginBtn = document.getElementById('loginBtn');

const openSignupModal = () => {
    if (modalOverlay.classList.contains('hidden')) {
        modalOverlay.classList.remove('hidden');    
        signUpModal.classList.remove('hidden');
    } else {
        modalOverlay.classList.add('hidden');    
        signUpModal.classList.add('hidden');
    }
};

const openLoginModal = () => {
    if (modalOverlay.classList.contains('hidden')) {
        modalOverlay.classList.remove('hidden');    
        loginModal.classList.remove('hidden');
    } else {
        modalOverlay.classList.add('hidden');    
        loginModal.classList.add('hidden');
    }
};

const closeModal = () => {
    if (signUpModal.classList.contains('hidden')) {
        loginModal.classList.add('hidden');
        modalOverlay.classList.add('hidden')
    }
    if (loginModal.classList.contains('hidden')) {
        signUpModal.classList.add('hidden');
        modalOverlay.classList.add('hidden')
    }
};

const submitAddUser = () => {
    let { email, username, password } = req.body
};

const submitLoginInfo = () => {
    
};


signUpBtn.addEventListener('click', openSignupModal);
loginBtn.addEventListener('click', openLoginModal);
modalOverlay.addEventListener('click', closeModal);
signUpModal.addEventListener('click', closeModal);
loginModal.addEventListener('click', closeModal);



