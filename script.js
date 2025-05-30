const decimalInput = document.getElementById('decimal');
const binaryInput = document.getElementById('binary');
const octalInput = document.getElementById('octal');
const hexInput = document.getElementById('hex');
const inputs = [decimalInput, binaryInput, octalInput, hexInput];
const converterBox = document.querySelector('.converter');

function convertFromDecimal(value) {
  const num = parseInt(value, 10);
  if (isNaN(num)) return shake();
  binaryInput.value = num.toString(2);
  octalInput.value = num.toString(8);
  hexInput.value = num.toString(16).toUpperCase();
}

function convertFromBinary(value) {
  const num = parseInt(value, 2);
  if (isNaN(num)) return shake();
  decimalInput.value = num;
  octalInput.value = num.toString(8);
  hexInput.value = num.toString(16).toUpperCase();
}

function convertFromOctal(value) {
  const num = parseInt(value, 8);
  if (isNaN(num)) return shake();
  decimalInput.value = num;
  binaryInput.value = num.toString(2);
  hexInput.value = num.toString(16).toUpperCase();
}

function convertFromHex(value) {
  const num = parseInt(value, 16);
  if (isNaN(num)) return shake();
  decimalInput.value = num;
  binaryInput.value = num.toString(2);
  octalInput.value = num.toString(8);
}

function shake() {
  converterBox.classList.add('shake');
  setTimeout(() => converterBox.classList.remove('shake'), 500);
}

decimalInput.addEventListener('input', e => convertFromDecimal(e.target.value));
binaryInput.addEventListener('input', e => convertFromBinary(e.target.value));
octalInput.addEventListener('input', e => convertFromOctal(e.target.value));
hexInput.addEventListener('input', e => convertFromHex(e.target.value));

window.addEventListener('DOMContentLoaded', () => {
  converterBox.classList.add('fade-in');
});
