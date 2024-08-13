document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario por defecto
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Aquí podrías agregar lógica para enviar el formulario a través de AJAX o mostrar un mensaje de éxito
    alert(`Gracias, ${name}. Hemos recibido tu mensaje y te contactaremos pronto.`);
});
