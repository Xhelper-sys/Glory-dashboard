function addText(){
  const inputText = document.querySelector('.js-input-search').value;
  const paragraphe = document.querySelector('.put-text');
  paragraphe.innerHTML = inputText;
  document.querySelector('.js-input-search').value = '';
}