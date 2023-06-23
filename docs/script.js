const inputs = document.querySelectorAll('input, textarea');
const button = document.querySelector('button');
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
    button.disabled = !form.checkValidity();
    if (!button.disabled) {
      button.classList.remove('grayscale');
    } else {
      button.classList.add('grayscale');
    }
});


button.addEventListener('click', () => {
  // event.preventDefault();
  const sendMessage = document.querySelector('#send-message');
  button.disabled = !form.checkValidity();
  button.classList.add('grayscale');
  sendMessage.showModal();

  setTimeout(() => {
    sendMessage.close();
    form.reset();
  }, 2000); 

})
