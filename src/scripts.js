document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const requiredMessage = document.getElementById("required");
  const modal = document.getElementById("modal");
  const emailSpan = document.getElementById("email-span");

  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const button = document.getElementById("buttonFormEmailSubmit");

  function validateEmail() {
    const email = emailInput.value;

    if (!email) {
      requiredMessage.classList.remove("invisible");
      return false;
    }

    if (regex.test(email)) {
      requiredMessage.classList.add("invisible");
      modal.style.display = "block";
      emailSpan.innerHTML = email;
      const emailModal = document.getElementById("email-modal");
      emailModal.innerHTML = email;
      setTimeout(() => {
        body.style.display = "none";
      }, 100);
      modal.addEventListener("click", event => event.preventDefault());
      if (emailSpan) {
        emailSpan.innerHTML = email;
      }
      return true;
    } else {
      requiredMessage.classList.remove("invisible");
      return false;
    }
  }

  button.addEventListener("click", validateEmail);
});