document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = this.nombre.value.trim();
  const email = this.email.value.trim();
  const mensaje = this.mensaje.value.trim();

  if (!nombre || !email || !mensaje) {
    alert("Por favor completa todos los campos.");
    return;
  }

  emailjs.send("service_8f7qmut", "template_sgbvqv9", {
    nombre: nombre,
    email: email,
    mensaje: mensaje
  }).then(function () {
    document.getElementById("mensaje-exito").style.display = "block";
    document.getElementById("formulario").reset();
  }, function (error) {
    console.error("Error al enviar:", error);
    alert("Hubo un error al enviar el mensaje.");
  });
});
