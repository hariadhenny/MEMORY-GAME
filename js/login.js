

const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

const validateInput = ({target}) => {
    if(target.value.length > 3) {
        button.removeAttribute('disabled')
        return;
    } else{
        button.setAttribute('disabled', '')
    }
}

const handlesubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('nome', input.value)
    window.location = 'pages/jogo.html'

}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handlesubmit);
