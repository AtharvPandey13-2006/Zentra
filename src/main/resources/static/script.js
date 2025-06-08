document.addEventListener('DOMContentLoaded', () => {
  const ctx1 = document.getElementById('taskChart').getContext('2d');
  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Tasks Completed',
        data: [5, 3, 4, 6, 2, 0, 1],
        backgroundColor: '#3498db'
      }]
    }
  });

  const ctx2 = document.getElementById('habitChart').getContext('2d');
  new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [{
        label: 'Habits Completed',
        data: [12, 15, 11, 17],
        borderColor: '#27ae60',
        backgroundColor: 'rgba(39,174,96,0.2)',
        fill: true
      }]
    }
  });

  const ctx3 = document.getElementById('timeChart').getContext('2d');
  new Chart(ctx3, {
    type: 'doughnut',
    data: {
      labels: ['Focus', 'Breaks', 'Meetings'],
      datasets: [{
        data: [60, 15, 25],
        backgroundColor: ['#8e44ad', '#f1c40f', '#e74c3c']
      }]
    }
  });
});
