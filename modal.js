document.getElementById('btn-modal')?.addEventListener('click', function() {
    document.getElementById('overlay').classList.add('is-visible');
    document.getElementById('modal').classList.add('is-visible');

    // hide scroll bar
    document.body.style.overflow = 'hidden';
  });
  
  document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('overlay').classList.remove('is-visible');
    document.getElementById('modal').classList.remove('is-visible');

    // show scroll bar
    document.body.style.overflow = 'auto';
  });
  document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('overlay').classList.remove('is-visible');
    document.getElementById('modal').classList.remove('is-visible');

    // show scroll bar
    document.body.style.overflow = 'auto';
  });
  