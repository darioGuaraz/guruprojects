// Inicializa EmailJS
emailjs.init("Tbd0un5y_p4ijDEww"); // API Key

document
  .getElementById("subscribeButton")
  .addEventListener("click", function (e) {
    e.preventDefault();  // Prevenir el comportamiento por defecto del botón (si es un formulario)

    const emailInput = document.getElementById("inputEmail");
    const emailValue = emailInput.value;

    // Validación de correo
    if (!emailValue || !validateEmail(emailValue)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Asegúrate de que el correo ingresado es válido
    console.log("Email a enviar:", emailValue);

    // Envía el correo de bienvenida usando EmailJS
    emailjs
      .send("service_3qsq00u", "template_eqyi1vv", {
        to_email: emailValue, // El valor dinámico del correo
        message: "Welcome to our newsletter! We're happy to have you on board.",
      })
      .then(
        function (response) {
          console.log("SUCCESS", response);
          alert("Please check your inbox to confirm your subscription!");
        },
        function (error) {
          console.error("FAILED", error);
          alert("Something went wrong. Please try again.");
        }
      );
  });

// Función para validar el formato del correo
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}
