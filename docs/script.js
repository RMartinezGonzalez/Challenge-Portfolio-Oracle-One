const inputs = document.querySelectorAll('input, textarea');
const buttonSend = document.querySelector('button[type="submit"]');
const messages = document.querySelectorAll('.input-error-message');

inputs.forEach(input => {
  input.addEventListener('blur', input => {
    validInput(input.target);
  })
});

function validInput(input) {

  const inputType = input.dataset.type;
  

  if (input.validity.valid) {
    input.parentElement.querySelector('span').classList.remove('input-error-message');
    input.parentElement.querySelector('span').innerHTML = '';
  }
  else {
    input.parentElement.querySelector('span').classList.add('input-error-message');
    input.parentElement.querySelector('span').innerHTML = showErrorMessage(inputType, input);
  }
}

const errorTypes = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch'
]

const errorMessages = {
    name: {
      valueMissing: 'Ingrese su nombre',
      patternMismatch: 'Ingrese solamente letras'
    },
    email: {
      valueMissing: 'Ingrese su email',
      typeMismatch: 'El correo no es válido',
      patternMismatch: 'Ejemplo: nombre@mail.com'
    },
    subject: {
      valueMissing: 'Ingrese su asunto',
    },
    message: {
      valueMissing: 'Ingrese su mensaje',
    }
}

function showErrorMessage(inputType, input) {
  let message = '';
  errorTypes.forEach((error) => {
    if (input.validity[error]) {
      // console.log(inputType, error);
      // console.log(input.validity[error]);
      // console.log(errorMessages[inputType][error]);
      message = errorMessages[inputType][error];
    }
  });

  return message;
  
}

const form = document.querySelector('form');
form.addEventListener('change', () => {
    buttonSend.disabled = !form.checkValidity();
    if (!buttonSend.disabled) {
      buttonSend.classList.remove('grayscale');
      spanButton.classList.add('hidden');
    } else {
      buttonSend.classList.add('grayscale');
    }
});


buttonSend.addEventListener('click', () => {
  // event.preventDefault();
  const sendMessage = document.querySelector('#send-message');
  buttonSend.disabled = !form.checkValidity();
  buttonSend.classList.add('grayscale');
  sendMessage.showModal();

  setTimeout(() => {
    sendMessage.close();
    form.reset();
  }, 2000); 

})

// Open the navigation
const menutoggle = document.querySelector('.menu-button');
const navigation = document.querySelector('nav');
const links = document.querySelectorAll('.name-trasition.p-4');
const body = document.body;


menutoggle.addEventListener('click', () => {
  menutoggle.classList.toggle('active');
  navigation.classList.toggle('block');
  navigation.classList.toggle('hidden');
  body.classList.toggle('overflow-hidden');
});

navigation.addEventListener('click', () => {
  menutoggle.classList.toggle('active');
  navigation.classList.toggle('block');
  navigation.classList.toggle('hidden');
  body.classList.remove('overflow-hidden');
});

const spanButton = document.querySelector('span[type="hidden"]');
const spanCheck = document.querySelector('span[type="check"]');

spanCheck.addEventListener('click', () => {
  if (buttonSend.disabled) {
    spanButton.classList.remove('hidden');
  }
});