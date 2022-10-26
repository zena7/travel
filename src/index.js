const burgerItem = document.querySelector('.burger');
const navigation = document.querySelector('.nav');
const menuClose = document.querySelector('.header-nav-close');

burgerItem.addEventListener('click', () => {
    navigation.classList.add('nav-active')
})

menuClose.addEventListener('click', () => {
    navigation.classList.remove('nav-active')
})

document.querySelector('.main').addEventListener('click', () => {
     navigation.classList.remove('nav-active')
})

navigation.addEventListener('click', () => navigation.classList.remove('nav-active'));
window.scrollTo({
    behavior: 'smooth'
})

//SLIDER-mobile




//POPUP
const popUp = document.querySelector('[data-active="login-pop-up"]');
const backgroundDimming = document.querySelector('.background-dimming');

document.querySelector('[data-active="header-login-btn"]').addEventListener('click', () => {
    console.log('pop-up')
    popUp.classList.toggle('popup-active');
    backgroundDimming.style.display = 'block';

})

backgroundDimming.addEventListener('click', () => {
     popUp.classList.remove('popup-active');
    backgroundDimming.style.display = 'none';
})

//POPUP mobile
document.querySelector('[data-active="account-mobile"]').addEventListener('click', () => {
    popUp.classList.toggle('popup-active')
})
const form = document.querySelector('.login-pop-up-form');
const mistakeMail = document.createElement('p');

let checkValidation = () => {return form.email.value.includes('@')};

function createErrorMessage(elem) {
    elem.textContent = 'Enter a valid email';
    elem.classList.add('mail-error')
    form.elements.email.after(elem);
}

form.email.addEventListener('blur', () => {
   if (!checkValidation()) {
        createErrorMessage(mistakeMail)
   }
})

form.email.addEventListener('focus', () => mistakeMail.remove())

form.addEventListener('submit', (event) => {
    if (!form.email.value || !form.password.value || !checkValidation()) {
        alert('Fill in all the fields');
        event.preventDefault()
    } else {
        alert(`It's successful! Your email: ${form.email.value} and password: ${form.password.value}`)};
})

// POPUP registration
const popupArrayForm = [...popUp.children];
const register = () => {
   popupArrayForm.forEach(i => {
    if (i.tagName === 'BUTTON' ) {
        i.style.display = 'none';
    }
    i.classList.add('registration');
});

}

document.querySelector('.popup-registration').addEventListener('click', () => {
    popUp.style.height = '436px';
    register()
    popUp.firstElementChild.textContent = 'Create account';
    popupArrayForm[0].style.width = '219px';
    popupArrayForm[0].style.marginBottom = '0px';
    popupArrayForm[3].btnSign.textContent = 'Sign Up';
    popupArrayForm[3].btnSign.style.marginTop = '15px';
    popupArrayForm[4].style.display = 'none';
    popUp.lastElementChild.outerHTML = '<p>Already have an account? <span class="registr-to-login"><u>Log in</u></span></p>';
    popUp.lastElementChild.style.marginTop = '6px';
    mistakeMail.style.marginTop = '-20px';
    mistakeMail.style.color = 'rgba(242, 120, 92, 1)';
    mistakeMail.style.fontSize = '0.9rem';
})