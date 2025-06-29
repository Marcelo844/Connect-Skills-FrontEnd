const form = document.getElementById('formCadastro');
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmarSenha');
const erroSenha = document.getElementById('erro-senha');
const erroRequisitos = document.getElementById('erro-senha-requisitos');
const tipoHidden = document.getElementById('tipoHidden');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // sempre previne primeiro

  let valido = true;

  senha.classList.remove('is-invalid');
  confirmarSenha.classList.remove('is-invalid');
  erroSenha.classList.add('d-none');
  erroRequisitos.style.display = 'none';

  const senhaValor = senha.value.trim();
  const confirmarValor = confirmarSenha.value.trim();
  const senhaValida = senhaValor.length >= 8 && /[^A-Za-z0-9]/.test(senhaValor);

  if (!senhaValida) {
    senha.classList.add('is-invalid');
    erroRequisitos.style.display = 'block';
    valido = false;
  }

  if (senhaValor !== confirmarValor) {
    confirmarSenha.classList.add('is-invalid');
    erroSenha.classList.remove('d-none');
    valido = false;
  }

  if (valido) {
    const tipo = tipoHidden.value;

    if (tipo === 'candidato') {
      window.location.href = '/pages/candidatos/cadastro-de-nome-e-sobrenome-candidatos.html';
    } else if (tipo === 'empresa') {
      window.location.href = '/pages/empresas/nome-empresa.html';
    } else {
      alert('Por favor, selecione o tipo de pessoa.');
    }
  }
});
