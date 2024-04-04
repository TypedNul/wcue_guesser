document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', checarResposta);
  });

  fetchar()
});

var respostas_corretas = 0;
var respostas_erradas = 0;
var botao_certo = null;

function randomizar(lista, butao) {
  const randIndex = Math.floor(Math.random() * lista.length);
  butao.innerHTML = lista[randIndex];

}

// é bem especifico e nao general-use, cuidado pq eu nao sei q porra eu fiz aq 

function hasDuplicates(array) {
  const buttonTexts = [];
  
  array.forEach(button => {
    buttonTexts.push(button.innerHTML);
    console.log(`butao¨: ${button.innerHTML}`)
  });

  console.log(`set: ${new Set(buttonTexts).size} vs ${buttonTexts.length}`)
  return new Set(buttonTexts).size !== buttonTexts.length;
}

function fetchar() {
  console.log('iniciando fetchar')
  
  fetch('assets/database/database.json')
    .then(response => response.json()) 
    .then(data => {
      const image = document.getElementById('image')

      const butao1 = document.getElementById('butao1') 
      const butao2 = document.getElementById('butao2') 
      const butao3 = document.getElementById('butao3')
      
      const randIndex2 = Math.floor(Math.random() * data.imgs.length);

      const randNome2 = data.imgs[randIndex2];

      const randIndex = Math.floor(Math.random() * 3) + 1;
      butaoCerto = document.getElementById(`butao${randIndex}`);
      butaoCerto.textContent = data.nomes[randIndex2]; 

      console.log(`img_ind = ${randIndex2}, but_ind = ${randIndex}, butaoCerto = ${butaoCerto.innerHTML}`)
      const butaoes = [butao1, butao2, butao3]
      const butaoes_sq2 = butaoes.filter(button => button !== butaoCerto)

      do {
        butaoes_sq2.forEach(button => randomizar(data.nomes, button));
      } while (hasDuplicates(butaoes))

      image.src = `assets/database/images/${randNome2}.png`;
    })
    .catch(error => console.error("Erro carregando database JSON: ", error))  

}

function checarResposta(id) {
  const butaoApertado = document.getElementById(id)
  if (butaoApertado.id = id) {
    respostas_corretas += 1
    fetchar()
  } else { 
    respostas_erradas += 1
    fetchar()
  }

}
