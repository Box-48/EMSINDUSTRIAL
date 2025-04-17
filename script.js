// 📌 Menú hamburguesa
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-menu").classList.toggle("show");
  });
  
  // 📌 Header sticky animado al hacer scroll
  window.addEventListener("scroll", function () {
    const header = document.getElementById("main-header");
    header.classList.toggle("shrink", window.scrollY > 50);
  });
  
  // 📌 EmailJS (ya incluido antes)
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
  