const textInput = document.querySelector(`#text-input`);
const translator = document.querySelector(`.translator`);
const output = document.querySelector(`.output`);
const url = `https://api.funtranslations.com/translate/vulcan.json`;

translator.addEventListener("click", () => {
    const text = textInput.value;
  
    fetch(`${url}?text=${text}`)
    .then(response => response.json())
    .then(json => output.innerText = json.contents.translated)
    .catch(err => console.log(err))
})


// Style

translator.addEventListener("mousedown", () => {
    document.querySelector('.translator').classList.add('click');
})
translator.addEventListener("mouseup", () => {
    document.querySelector('.translator').classList.remove('click');
})