// script.js
const input = document.getElementById('tarefaInput');
const btn = document.getElementById('addBtn');
const lista = document.getElementById('listaTarefas');

btn.addEventListener('click', adicionarTarefa);

function adicionarTarefa() {
  const texto = input.value.trim();
  if (texto === '') return;

  const li = document.createElement('li');
  li.textContent = texto;

  li.addEventListener('click', () => {
    li.classList.toggle('concluida');
  });

  const btnExcluir = document.createElement('button');
  btnExcluir.textContent = 'X';
  btnExcluir.style.marginLeft = '10px';
  btnExcluir.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(btnExcluir);
  lista.appendChild(li);

  input.value = '';
}
