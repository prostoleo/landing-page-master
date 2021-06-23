const form = document.querySelector('.form-contact');

const input = form.querySelector('#input-email');

function validEmail(str) {
  const regName = /^[a-zA-z_\.0-9]+@[a-z0-9]+\.[a-z]{2,5}$/g;

  return regName.test(str);
}

input.addEventListener('input', (e) => {
  input.classList.remove('confirm', 'error');

  const value = e.target.value;

  if (value.trim() !== '') {
    validEmail(value)
      ? input.classList.add('confirm')
      : input.classList.add('error');
  } else {
    input.classList.remove('confirm', 'error');
  }
});
