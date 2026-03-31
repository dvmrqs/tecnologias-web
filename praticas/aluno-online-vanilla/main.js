document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const senhaInput = document.getElementById('senha');
  const emailError = document.getElementById('emailError');
  const senhaError = document.getElementById('senhaError');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    emailError.textContent = '';
    senhaError.textContent = '';

    let valido = true;

    if (emailInput.value.trim() === '') {
      emailError.textContent = 'O campo de email é obrigatório.';
      valido = false;
    }

    if (senhaInput.value.trim() === '') {
      senhaError.textContent = 'O campo de senha é obrigatório.';
      valido = false;
    }

    if (valido) {
      alert('Login realizado com sucesso!');
      form.reset();
    }
  });
});