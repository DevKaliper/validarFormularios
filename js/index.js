let inputs = document.querySelectorAll('input')
let button = document.getElementById('submit')
let errorContainer = document.getElementById('errorContainer')

button.addEventListener('click', (e) => {
  errorContainer.innerHTML = ''
  e.preventDefault()
  if (isValid(inputs)) {
    alert('enviado')
  }
})

const isValid = (arrayOfInputs) => {
  let errors = []
  let password

  for (let input of arrayOfInputs) {
    if (input.value.length < 3 && input.type !== 'password') {
      errors.push(
        'El campo ' + input.name + ' debe ser de mínimo 3 caracteres '
      )
    }

    if (
      input.name === 'password' &&
      (input.value.length < 6 || input.value.length > 15)
    ) {
      errors.push(
        'El campo ' +
          input.name +
          ' debe ser de mínimo 6 caracteres y máximo 15 caracteres'
      )
    }

    if (input.name == 'password') {
      password = input.value
    }

    if (input.name == 'passwordValidado') {
      if (password !== input.value) {
        errors.push('Las contraseñas debe ser iguales.')
      }
    }
  }

  if (errors.length > 0) {
    for (let error of errors) {
      const li = document.createElement('li')
      li.textContent = error
      errorContainer.appendChild(li)
    }
    return false
  }

  return true
}
