// function getFormValue() {
//   // function varieable

//   const nameInput = document.getElementById("full-name");
//   const nameValue = nameInput.value;
//   const errorText = document.getElementById("error-text");

//   // condition

//   if (nameValue) {
//     console.log(nameValue);
//     errorText.innerHTML = "";
//     nameInput.value = "";
//   } else {
//     errorText.innerHTML = '<p class = "text-warning"<p>Fill in the form</P>';
//   }
// }

// // addEventListener
// const submitButton = document.getElementById("submit-button");
// submitButton.addEventListener("click", getFormValue);

// Start Form

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function () {
  const nameInput = document.getElementById("full-name");
  const fathersNameInput = document.getElementById("father-name");
  const mothersNameInput = document.getElementById("mother-name");
  const dateOfBirthInput = document.getElementById("date-of-birth");
  const emailInput = document.getElementById("email-address");
  const addressInput = document.getElementById("full-address");
  const contactInput = document.getElementById("contact-number");
  const nationalityInput = document.getElementById("nationality");

  const nameValue = nameInput.value;
  const fathersNameValue = fathersNameInput.value;
  const mothersNameValue = mothersNameInput.value;
  const dateOfBirthValue = dateOfBirthInput.value;
  const emailValue = emailInput.value;
  const addressValue = addressInput.value;
  const contactValue = contactInput.value;
  const nationalityValue = nationalityInput.value;
  const errorText = document.getElementById("error-text");
  const formData = document.getElementById("form-data");
  // condition

  if (
    nameValue &&
    fathersNameValue &&
    mothersNameValue &&
    dateOfBirthValue &&
    emailValue &&
    addressValue &&
    contactValue &&
    nationalityValue
  ) {
    formData.innerHTML = `<p>Form Submited By: ${nameValue}, Father Name: ${fathersNameValue}, Mother name: ${mothersNameValue}, Date Of Birth ${dateOfBirthValue}, Email Address: ${emailValue}, Address: ${addressValue}, Contact: ${contactValue}, Nationality: ${nationalityValue} </P>`;
    errorText.innerHTML = "";
    nameInput.value = "";
    fathersNameInput.value = "";
    mothersNameInput.value = "";
    dateOfBirthInput.value = "";
    emailInput.value = "";
    addressInput.value = "";
    contactInput.value = "";
    nationalityInput.value = "";
  } else {
    errorText.innerHTML =
      '<p class = "text-warning"<p> Please fill in the all input box!</P>';
    formData.innerHTML = "";
  }
});

// End From

// Start Budget

const calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", function () {
  const income = document.getElementById("income").innerText;
  const rentInput = document.getElementById("rent");
  const foodInput = document.getElementById("food");
  const utilitiesInput = document.getElementById("utilities");
  const insuranceInput = document.getElementById("insurance");
  const expensesDiv = document.getElementById("expenses");
  const balanceDiv = document.getElementById("balance");
  const errorText2 = document.getElementById("error-text2");

  const incomeValue = parseFloat(income);
  const rentValue = parseFloat(rentInput.value);
  const foodValue = parseFloat(foodInput.value);
  const utilitiesValue = parseFloat(utilitiesInput.value);
  const insuranceValue = parseFloat(insuranceInput.value);

  if (
    rentValue >= 0 &&
    foodValue >= 0 &&
    utilitiesValue >= 0 &&
    insuranceValue >= 0
  ) {
    errorText2.innerHTML = "";
    rentInput.value = "";
    foodInput.value = "";
    utilitiesInput.value = "";
    insuranceInput.value = "";

    const cost = rentValue + foodValue + utilitiesValue + insuranceValue;
    const balance = incomeValue - cost;
    expensesDiv.innerText = cost;
    balanceDiv.innerText = balance;
  } else {
    errorText2.innerHTML =
      '<p class = "text-warning"<p> Please fill in the all input box!</P>';
  }
});
