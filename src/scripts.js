document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const requiredMessage = document.getElementById("required"); 
  const modal = document.getElementById("modal");
  const emailSpan = document.getElementById("email-modal");
  const mainContent = document.getElementById("main-content");

  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const button = document.getElementById("buttonFormEmailSubmit");

  const emailInputClass = "email-input";

  function changeStyleInput() {
    const email = emailInput.value;
  
    if (regex.test(email)) {
      emailInput.style.border = "1px green solid";
    } else {
      emailInput.style.border = "1px red solid";
    }
  } 

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
  emailInput.addEventListener("blur", changeStyleInput);
  button.addEventListener("click", validateEmail);
});

function reloadPage() {
  window.location.reload()
}
