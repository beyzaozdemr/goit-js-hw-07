const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", newName);
function newName(event) {
  const inputValue = event.target.value.trim();
  nameOutput.textContent = inputValue ? inputValue : "Anonymus";
}
