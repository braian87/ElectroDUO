document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;
  
  if (nombre && email && mensaje) {
    document.getElementById('form-message').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('form-message').classList.add('hidden');
    }, 5000);
    
    this.reset();
  }
});