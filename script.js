const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

// Regex for Bangladeshi mobile numbers
// Optional country code: +88 or 0088
// Must start with 013-019 (except 012)
const bdPhoneRegex = /^(?:\+88|0088)?(01[3-9]\d{8})$/;

checkBtn.addEventListener("click", () => {
  const value = userInput.value.trim();

  if (value === "") {
    alert("Please provide a phone number");
    return;
  }

  const match = value.match(bdPhoneRegex);
  if (match) {
    resultsDiv.textContent = `Valid Bangladesh number: ${value}`;
    resultsDiv.style.color = "green";
  } else {
    resultsDiv.textContent = `Invalid Bangladesh number: ${value}`;
    resultsDiv.style.color = "red";
  }
});

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
  userInput.value = "";
});
