const inputElement = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

const changeName = (event) => {
  const newValue = inputElement.value.trim();
  if (newValue === "") {
    userName.textContent = "Anonymous";
  } else {
    userName.textContent = newValue;
  }
};

inputElement.addEventListener("input", changeName);
