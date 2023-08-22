document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const requiredMessage = document.getElementById("required"); 
  const modal = document.getElementById("modal");
  const emailSpan = document.getElementById("email-modal");
  const mainContent = document.getElementById("main-content");

  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const button = document.getElementById("buttonFormEmailSubmit");

  // function changeStyleInput() {
  //   const email = emailInput.value;
  
  //   if (regex.test(email)) {
  //     emailInput.style.border = "4px green solid"
  //   } else {
  //     emailInput.style.border = "4px red solid"
  //   }
  // }

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
        mainContent.style.display = "none";
      modal.addEventListener("click", event => event.preventDefault());
      emailInput.style.display = 'none'
      if (emailSpan) {
        emailSpan.innerHTML = email;
      }
      return true;
    } else {
      requiredMessage.classList.remove("invisible");
      return false;
    }
  }
  // email.addEventListener("change", changeStyleInput);
  button.addEventListener("click", validateEmail);
});

function reloadPage() {
  window.location.reload()
}
