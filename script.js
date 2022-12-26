const signInBtn = document.querySelector('.signIn');
const signInPopup = document.querySelector('.login_page');

signInBtn.addEventListener('click', () => {
  signInPopup.classList.toggle('display_block');
});
