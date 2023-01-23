const btnNextStep = $("#next-step");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPhone = document.querySelector("#phone");

btnNextStep.on("click", (event) => {
  console.log("next step");
  console.log(location.href);
  // event.preventDefault();
});
inputName.addEventListener("blur", () => {
  console.log("blur");
  console.log(inputName.value);
  if (inputName.value === "") {
    inputName.style.borderColor = "#dc2626";
    $("#warn-name").removeClass("hidden");
  } else {
    $("#warn-name").addClass("hidden");
    inputName.style.borderColor = "#94a3b8";
  }
});
inputEmail.addEventListener("blur", () => {
  console.log("blur");
  console.log(inputEmail.value);
  if (inputEmail.value === "") {
    inputEmail.style.borderColor = "#dc2626";
    $("#warn-email").removeClass("hidden");
  } else {
    $("#warn-email").addClass("hidden");
    inputEmail.style.borderColor = "#94a3b8";
  }
});
inputPhone.addEventListener("blur", () => {
  console.log("blur");
  console.log(inputPhone.value);
  if (inputPhone.value === "") {
    inputPhone.style.borderColor = "#dc2626";
    $("#warn-phone").removeClass("hidden");
  } else {
    $("#warn-phone").addClass("hidden");
    inputPhone.style.borderColor = "#94a3b8";
  }
});
