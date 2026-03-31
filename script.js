const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+";

lengthEl.addEventListener("input", () => {
  lengthValue.textContent = lengthEl.value;
});

generateBtn.addEventListener("click", () => {
  let chars = "";
  if (uppercaseEl.checked) chars += upper;
  if (lowercaseEl.checked) chars += lower;
  if (numbersEl.checked) chars += number;
  if (symbolsEl.checked) chars += symbol;

  if (chars === "") {
    passwordEl.value = "Select options!";
    return;
  }

  let password = "";
  for (let i = 0; i < lengthEl.value; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  passwordEl.value = password;
});

copyBtn.addEventListener("click", () => {
  passwordEl.select();
  document.execCommand("copy");
  alert("Copied!");
});