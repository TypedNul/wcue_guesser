document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', fetchar);
  });

  fetchar()
});

function randomizar(lista, butao) {
  const randIndex = Math.floor(Math.random() * lista.length);
  butao.innerHTML = lista[randIndex];

}

function fetchar() {
  fetch('assets/database/database.json')
    .then(response => response.json()) 
    .then(data => {
      const image = document.getElementById('image')

      const butao1 = document.getElementById('butao1') 
      const butao2 = document.getElementById('butao2') 
      const butao3 = document.getElementById('butao3')
      
      const randIndex2 = Math.floor(Math.random() * data.imgs.length);

      const randNome2 = data.imgs[randIndex2];

      const randomButtonIndex = Math.floor(Math.random() * 3) + 1; // Randomly select a button (1, 2, or 3)
      const buttonWithSameIndex = document.getElementById(`butao${randomButtonIndex}`);
      buttonWithSameIndex.textContent = randNome2; // Assign the image name to the randomly selected button

      const otherButtons = [butao1, butao2, butao3].filter(button => button !== buttonWithSameIndex);
      otherButtons.forEach(button => randomizar(data.nomes, button));

      console.log(randNome2);
      image.src = `assets/database/images/${randNome2}.png`;
    })
    .catch(error => console.error("Erro carregando database JSON: ", error))  
}
