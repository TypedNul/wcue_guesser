function randomizar(lista, butao) {
  const randIndex = Math.floor(Math.random() * lista.length);
  butao.innerHTML = lista[randIndex];
}


// achar listas do .json

fetch('assets/database/database.json')
  .then(response => response.json()) 
  .then(data => {
    const image = document.getElementById('image')
   
    randomizar(data.nomes, document.getElementById('butao1'))
    randomizar(data.nomes, document.getElementById('butao2'))
    randomizar(data.nomes, document.getElementById('butao3'))
    

    const randIndex2 = Math.floor(Math.random() * data.imgs.length);
    const randNome2 = data.imgs[randIndex2];

    console.log(randNome2)

    image.src = `assets/database/images/${randNome2}.png` 
    info.textContent = randNome1 


  })
  .catch(error => console.error("Erro carregando database JSON: ", error))