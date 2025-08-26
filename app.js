const textArea = document.getElementById('textArea');
const charCount = document.getElementById('count');

textArea.addEventListener('input', () => {
  charCount.textContent = textArea.value.length;
});
