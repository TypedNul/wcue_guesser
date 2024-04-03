// achar listas do .json

fetch('assets/database/database.json')
  .then(response => response.json()) 
  .then(data => {
    const infoElement = document.getElementById('info')

    const randomIndex = Math.floor(Math.random() * data.nomes.length);
    const randomValue = data.nomes[randomIndex];

    console.log(randomValue); 

  })
  .catch(error => console.error("Erro carregando database JSON: ", error))