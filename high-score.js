const storageInput = document.querySelector("#enter");
const text = document.querySelector("#text");
const button = document.querySelector("#save");

storageInput.addEventListener("input", (letter) => {
  console.log(letter);
  text.textContent = letter.target.value;
});
// document.getElementById("#save").addEventListener("click", function () {
//   document.getElementById("#text").innerHTML = "Hello World";
// });
