document.querySelectorAll('.tab-link').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-link').forEach(btn => btn.classList.remove('bg-teal-600', 'text-white'));
      button.classList.add('bg-teal-600', 'text-white');
  
      document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
      document.getElementById(button.dataset.tab).classList.remove('hidden');
    });
  });
  
  document.querySelectorAll('.bg-white button').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      content.classList.toggle('hidden');
    });
  });
  