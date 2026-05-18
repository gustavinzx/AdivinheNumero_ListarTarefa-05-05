let tarefas = [];
let filtroAtual = 'todas';

const input = document.getElementById('inputTarefa');

// Permite adicionar tarefa com Enter
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') adicionarTarefa();
});

function adicionarTarefa() {
  const texto = input.value.trim();
  if (!texto) return;

  tarefas.push({ id: Date.now(), texto, concluida: false });
  input.value = '';
  renderizar();
}

function toggleConcluida(id) {
  tarefas = tarefas.map(t => t.id === id ? { ...t, concluida: !t.concluida } : t);
  renderizar();
}

function removerTarefa(id) {
  tarefas = tarefas.filter(t => t.id !== id);
  renderizar();
}

function filtrar(tipo, btn) {
  filtroAtual = tipo;
  document.querySelectorAll('.filtros button').forEach(b => b.classList.remove('ativo'));
  btn.classList.add('ativo');
  renderizar();
}

function renderizar() {
  const lista = document.getElementById('listaTarefas');
  const msgVazio = document.getElementById('msgVazio');
  const contador = document.getElementById('contador');

  let visiveis = tarefas;
  if (filtroAtual === 'pendentes') visiveis = tarefas.filter(t => !t.concluida);
  if (filtroAtual === 'concluidas') visiveis = tarefas.filter(t => t.concluida);

  lista.innerHTML = '';

  visiveis.forEach(tarefa => {
    const li = document.createElement('li');
    if (tarefa.concluida) li.classList.add('concluida');

    li.innerHTML = `
      <input type="checkbox" ${tarefa.concluida ? 'checked' : ''} onchange="toggleConcluida(${tarefa.id})" />
      <span class="texto">${tarefa.texto}</span>
      <button class="btn-remover" onclick="removerTarefa(${tarefa.id})">✕</button>
    `;
    lista.appendChild(li);
  });

  msgVazio.style.display = visiveis.length === 0 ? 'block' : 'none';

  const concluidas = tarefas.filter(t => t.concluida).length;
  contador.textContent = `${concluidas} de ${tarefas.length} tarefa(s) concluída(s)`;
}

renderizar();
