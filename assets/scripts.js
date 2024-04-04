function randomizar(lista, butao) {
  const randIndex = Math.floor(Math.random() * lista.length);
  butao.innerHTML = lista[randIndex];

}

// achar listas do .json

fetch('assets/database/database.json')
  .then(response => response.json()) 
  .then(data => {
    const image = document.getElementById('image')
    const butao1 = document.getElementById('butao1') 
    const butao2 = document.getElementById('butao2') 
    const butao3 = document.getElementById('butao3')
    
    while (butao1.textContent !== butao2.textContent || butao2.textContent !== butao3.textContent || butao1.textContent !== butao3.textContent) {
      randomizar(data.nomes, document.getElementById('butao1'))
      randomizar(data.nomes, document.getElementById('butao2'))
      randomizar(data.nomes, document.getElementById('butao3'))
    }

    const randIndex2 = Math.floor(Math.random() * data.imgs.length);
    const randNome2 = data.imgs[randIndex2];

    console.log(randNome2)

    image.src = `assets/database/images/${randNome2}.png`  

  })
  .catch(error => console.error("Erro carregando database JSON: ", error))