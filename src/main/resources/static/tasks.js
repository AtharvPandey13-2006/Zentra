let tasks = [];

function addTask() {
  const title = document.getElementById('taskTitle').value.trim();
  if (!title) return alert('Enter a task');
  tasks.push({ title, done: false });
  renderTasks();
  document.getElementById('taskTitle').value = '';
}

function toggleDone(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function markAllDone() {
  tasks.forEach(t => t.done = true);
  renderTasks();
}

function renderTasks() {
  const tbody = document.getElementById('itemsTableBody');
  tbody.innerHTML = '';
  tasks.forEach((task, i) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${task.title}</td>
      <td>
        <button onclick="toggleDone(${i})">${task.done ? '✔ Done' : '⏳ Pending'}</button>
      </td>
      <td><button onclick="deleteTask(${i})">🗑</button></td>
    `;
    tbody.appendChild(row);
  });
}
