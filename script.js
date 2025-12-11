// 🏀 Validación del formulario emergente (popup)
document.getElementById("formInscripcion").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombreIns").value.trim();
  const correo = document.getElementById("correoIns").value.trim();
  const edad = document.getElementById("edadIns").value.trim();
  const nivel = document.getElementById("nivelIns").value;

  if (!nombre || !correo || !edad || !nivel) {
    alert("Por favor completa todos los campos.");
    return;
  }

  // Mostrar confirmación
  "alert(✅ ¡Gracias por inscribirte, ${nombre}! Pronto recibirás información en tu correo.);"
  
  // Limpiar campos
  document.getElementById("formInscripcion").reset();

  // Cerrar popup
  window.location.hash = "";
});

// 📬 Validación del formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !correo || !mensaje) {
    alert("Por favor completa todos los campos.");
    return;
  }

  "alert(📩 Gracias ${nombre}, hemos recibido tu mensaje.);"
  document.getElementById("contactForm").reset();
});