//-----------------------------------------------Validador de mail precarga
document
  .getElementById("subscribeButton")
  .addEventListener("click", function (e) {
    const emailInput = document.getElementById("inputEmail");
    const emailValue = emailInput.value;

    // Validación de email
    if (!emailValue || !validateEmail(emailValue)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Si es válido, mostrar mensaje de verificación
    alert("Please check your inbox to confirm your subscription!");
  });

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

//---------------------------------------------------------API EmailJS
// Inicializa EmailJS
emailjs.init("dario guaraz"); // Sustituye con tu User ID que obtienes de EmailJS

document
  .getElementById("subscribeButton")
  .addEventListener("click", function (e) {
    const emailInput = document.getElementById("inputEmail");
    const emailValue = emailInput.value;

    // Validación de correo
    if (!emailValue || !validateEmail(emailValue)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Envía el correo de bienvenida usando EmailJS
    emailjs
      .send("service_3qsq00u", "template_eqyi1vv", {
        to_email: emailValue,
        message: "Welcome to our newsletter! We're happy to have you on board.",
      })
      .then(
        function (response) {
          console.log("SUCCESS", response);
          alert("Please check your inbox to confirm your subscription!");
        },
        function (error) {
          console.log("FAILED", error);
          alert("Something went wrong. Please try again.");
        }
      );
  });
