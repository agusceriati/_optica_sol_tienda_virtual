const form = document.getElementById('contact-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
  // Aquí es donde se procesa el formulario y se envía el correo electrónico
}

function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Aquí es donde se procesa el formulario y se envía el correo electrónico
    // Por ejemplo, utilizando la API de correo electrónico de Google
    fetch('https://www.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'raw': btoa(`To: agusceriati@gmail.com\nSubject: Nuevo mensaje de ${name}\n\n${message}`)
      })
    }).then(response => {
      if (!response.ok) {
        throw new Error(`Error al enviar el correo electrónico: ${response.status}`);
      }
      alert('¡Mensaje enviado!');
    }).catch(error => {
      alert(error);
    });
  }