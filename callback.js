const newButton = (text, callback) => {
  const body = document.querySelector('body');
  const button = document.createElement('button');
  button.textContent = text;
  
  callback(button);
  
  body.insertAdjacentElement('beforeend', button);

  return button;
};

const btnLogin = newButton('Login', (button) => {
  button.style.cssText = `
    color: red;
    font-size:20px
  `;
});
const btnSignup = newButton('Sing Up', (button) => {
  button.style.cssText = `
    color: blue;
    font-size: 30px
  `;
});

// button.addEventListener('click', () => {
//   alert('oi')
// })