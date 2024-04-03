// achar listas do .json

fetch('assets/database/database.json')
  .then(response => response.json()) // Converte a resposta para JSON
  .then(data => {
    const infoElement = document.getElementById('info')
    const data_pars = JSON.parse(data);

    const randomIndex = Math.floor(Math.random() * data_pars.names.length);
    const randomValue = data_pars[randomIndex].name;

    console.log(randomValue); 

  })
  .catch(error => console.error("Erro carregando database JSON: ", error))