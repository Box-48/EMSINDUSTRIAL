// Menu hamburguesa
document.getElementById("menu-toggle").addEventListener("click", function () {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("show");
  });
  
  // Header sticky animado
  window.addEventListener("scroll", function () {
    const header = document.getElementById("main-header");
    header.classList.toggle("shrink", window.scrollY > 50);
  });
  
  // Envío de formulario con EmailJS
  document.getElementById("formulario")?.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nombre = this.nombre.value.trim();
    const email = this.email.value.trim();
    const mensaje = this.mensaje.value.trim();
  
    if (!nombre || !email || !mensaje) {
      alert("Por favor completa todos los campos.");
      return;
    }
  
    emailjs.send("service_8f7qmut", "template_sgbvqv9", {
      nombre,
      email,
      mensaje,
    }).then(() => {
      document.getElementById("mensaje-exito").style.display = "block";
      this.reset();
    }).catch((error) => {
      console.error("Error:", error);
      alert("Hubo un error al enviar el mensaje.");
    });
  });
  