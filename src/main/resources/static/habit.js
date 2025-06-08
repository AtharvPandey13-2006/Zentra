let habits = JSON.parse(localStorage.getItem('habits')) || [];

function saveHabits() {
  localStorage.setItem('habits', JSON.stringify(habits));
}

function renderHabits() {
  const list = document.getElementById('habitList');
  list.innerHTML = '';
  habits.forEach((habit, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'habit-card';

    const title = document.createElement('div');
    title.className = 'habit-title';
    title.textContent = habit.name;

    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    const progress = document.createElement('div');
    progress.className = 'progress';
    progress.style.width = habit.progress + '%';
    bar.appendChild(progress);

    const controls = document.createElement('div');
    controls.className = 'habit-controls';

    const inc = document.createElement('button');
    inc.textContent = '+';
    inc.onclick = () => {
      habit.progress = Math.min(habit.progress + 10, 100);
      saveHabits();
      renderHabits();
    };

    const dec = document.createElement('button');
    dec.textContent = '−';
    dec.onclick = () => {
      habit.progress = Math.max(habit.progress - 10, 0);
      saveHabits();
      renderHabits();
    };

    const del = document.createElement('button');
    del.textContent = '🗑';
    del.onclick = () => {
      habits.splice(index, 1);
      saveHabits();
      renderHabits();
    };

    controls.appendChild(inc);
    controls.appendChild(dec);
    controls.appendChild(del);

    wrapper.appendChild(title);
    wrapper.appendChild(bar);
    wrapper.appendChild(controls);

    list.appendChild(wrapper);
  });
}

function addHabit() {
  const name = document.getElementById('habitName').value.trim();
  if (!name) return alert('Enter habit name');
  habits.push({ name, progress: 0 });
  saveHabits();
  renderHabits();
  document.getElementById('habitName').value = '';
}

renderHabits();
