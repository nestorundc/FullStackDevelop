const PUBLIC_KEY = "M-Cba_Buz53E8DJxo"; 
const SERVICE_ID = "service_1009"; 
const TEMPLATE_ID = "template_btg8d3f";

// Inicializar EmailJS
(function () {
  emailjs.init(PUBLIC_KEY);
})();

const form = document.getElementById('contact-form');
const btnSend = document.getElementById('btn-send');
const responseMsg = document.getElementById('response-msg');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Cambiar estado visual del botón
  btnSend.textContent = 'Enviando...';
  btnSend.disabled = true;
  responseMsg.className = 'hidden';

  // Envío a través de EmailJS
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
    .then(() => {
      showNotice('¡Correo enviado con éxito!', 'success');
      form.reset();
    })
    .catch((error) => {
      console.error('Error al enviar:', error);
      showNotice('Ocurrió un error al enviar el mensaje.', 'error');
    })
    .finally(() => {
      btnSend.textContent = 'Enviar Mensaje';
      btnSend.disabled = false;
    });
});

function showNotice(text, classType) {
  responseMsg.textContent = text;
  responseMsg.className = classType;
}