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

      console.log(data.imgs[randIndex2])

      image.src = `assets/database/images/${data.imgs[randIndex2]}.png`  

      let matchingNames = 0;
      
      do {
        randomizar(data.nomes, butao1);
        randomizar(data.nomes, butao2);
        randomizar(data.nomes, butao3);

        matchingIndexes = data.nomes.filter((_, index) => index === randIndex2).length;

        console.log(`Loop: ${butao1.innerHTML}, ${butao2.innerHTML}, ${butao3.innerHTML}, imagem: ${randIndex2}, ${matchingNames}`)

      } while (matchingNames !== 1);

    })
    .catch(error => console.error("Erro carregando database JSON: ", error))  
}
