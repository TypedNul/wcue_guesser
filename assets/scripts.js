// achar listas do .json

fetch('assets/database/database.json')
  .then(response => response.json()) 
  .then(data => {
    const image = document.getElementById('image')
    const info = document.getElementById('info')

    const randIndex1 = Math.floor(Math.random() * data.nomes.length);
    const randNome1 = data.nomes[randIndex];

    console.log(randNome1); 

    const randIndex2 = Math.floor(Math.random() * data.imgs.length);
    const randNome2 = data.imgs[randIndex2];

    console.log(randNome2)

    image.textContent = randNome2 
    info.textContent = randNome1 


  })
  .catch(error => console.error("Erro carregando database JSON: ", error))