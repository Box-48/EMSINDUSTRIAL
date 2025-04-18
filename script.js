// Idioma por defecto
let idiomaActual = 'es';

document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-menu').classList.toggle('show');
});

window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  header.classList.toggle('shrink', window.scrollY > 50);
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario');
  const mensajeExito = document.getElementById('mensaje-exito');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      emailjs.sendForm('service_8f7qmut', 'template_sgbvqv9', this)
        .then(() => {
          mensajeExito.style.color = "white";
          mensajeExito.textContent = idiomaActual === "en"
            ? "✅ Message sent successfully"
            : "✅ Mensaje enviado con éxito";
          form.reset();
          setTimeout(() => {
            mensajeExito.textContent = "";
          }, 3000);
        }, error => {
          mensajeExito.style.color = "red";
          mensajeExito.textContent = idiomaActual === "en"
            ? "❌ Error sending message"
            : "❌ Error al enviar el mensaje";
        });
    });
  }

  const texts = {
    es: {
      menu_inicio: "Inicio",
      menu_nosotros: "Nosotros",
      menu_trabajos: "Trabajos",
      menu_equipos: "Tecnología",
      menu_contacto: "Contacto",
      hero_titulo: "SOLUCIONES INDUSTRIALES QUE INSPIRAN CONFIANZA",
      hero_texto: "Calidad, innovación y compromiso en cada proyecto.",
      nosotros_titulo: "Nosotros",
      nosotros_texto: "Somos EMSINDUSTRIAL, una empresa dedicada a soluciones técnicas y mantenimiento industrial con alta precisión y confiabilidad.",
      trabajos_titulo: "Trabajos",
      trabajo1_p1: "Instalamos un sistema eléctrico industrial de alta eficiencia energética.",
      trabajo1_p2: "Aplicamos técnicas de cableado estructurado para facilitar el mantenimiento.",
      trabajo2_p1: "Diseñamos un sistema de automatización con control de motores.",
      trabajo2_p2: "Los sensores industriales garantizaron una operación segura.",
      trabajo3_p1: "Realizamos mantenimiento predictivo con escaneo térmico.",
      trabajo3_p2: "Aumentamos el tiempo de actividad de la maquinaria crítica.",
      trabajo4_p1: "Instalamos un sistema de climatización industrial eficiente.",
      trabajo4_p2: "El sistema se ajusta automáticamente a la carga térmica.",
      video1_p1: "Este video muestra un sistema de bombeo inteligente.",
      video1_p2: "Perfecto para riego o distribución de agua industrial.",
      video2_p1: "Sistema de control de acceso con escáner biométrico.",
      video2_p2: "Adaptable y seguro para zonas restringidas industriales.",
      equipos_titulo: "Tecnología",
      equipos_texto: "Trabajamos con herramientas y tecnologías avanzadas para garantizar resultados eficientes.",
      contacto_titulo: "Contáctanos",
      label_nombre: "NOMBRE:",
      label_correo: "CORREO",
      label_mensaje: "MENSAJE",
      btn_enviar: "ENVIAR",
      footer_texto: "Todos los derechos reservados"
    },
    en: {
      menu_inicio: "Home",
      menu_nosotros: "About Us",
      menu_trabajos: "Our Work",
      menu_equipos: "Technology",
      menu_contacto: "Contact",
      hero_titulo: "INDUSTRIAL SOLUTIONS THAT INSPIRE TRUST",
      hero_texto: "Quality, innovation, and commitment in every project.",
      nosotros_titulo: "About Us",
      nosotros_texto: "We are EMSINDUSTRIAL, focused on high-precision and reliable industrial solutions.",
      trabajos_titulo: "Our Work",
      trabajo1_p1: "We installed an industrial electrical system with high energy efficiency.",
      trabajo1_p2: "Structured cabling techniques were used for easier maintenance.",
      trabajo2_p1: "We developed a motor control automation system.",
      trabajo2_p2: "Integrated sensors ensured safe and efficient operation.",
      trabajo3_p1: "Performed predictive maintenance with thermal scanning.",
      trabajo3_p2: "Extended uptime and reduced unplanned equipment stops.",
      trabajo4_p1: "Installed and calibrated a large-scale HVAC system.",
      trabajo4_p2: "Adjusts temperature dynamically based on thermal load.",
      video1_p1: "Video of intelligent pump system with automation.",
      video1_p2: "Ideal for irrigation or industrial water management.",
      video2_p1: "Industrial access control with biometric scanner.",
      video2_p2: "Flexible, secure solution for restricted areas.",
      equipos_titulo: "Technology",
      equipos_texto: "We work with advanced tools and technologies to ensure efficient results.",
      contacto_titulo: "Contact Us",
      label_nombre: "NAME:",
      label_correo: "EMAIL:",
      label_mensaje: "MESSAGE:",
      btn_enviar: "SEND",
      footer_texto: "All rights reserved"
    }
  };

  function setLanguage(lang) {
    idiomaActual = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (texts[lang][key]) el.textContent = texts[lang][key];
    });
  }

  document.getElementById('lang-es').addEventListener('click', () => setLanguage('es'));
  document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
});
