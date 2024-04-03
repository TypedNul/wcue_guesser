// achar listas do .json

fetch('assets/database/database.json')
  .then(response => response.json()) // Converte a resposta para JSON
  .then(data => {
    const infoElement = document.getElementById('info')
    infoElement.textContent = `${data.imgs}, ${data.nomes}`;

  })
  .catch(error => console.error("Erro carregando database JSON: ", error))