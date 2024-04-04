document.addEventListener('DOMContentLoaded', fetchar()) // basicamente inicia o fetchar() pra botar imagem e opção normal já no começo. tem q mudar 
                                                         // pra não fazer isso mesmo com outras seções abertas

// variáveis globais
var respostas_corretas = 0;
var respostas_erradas = 0;
var butaoCerto;

// pega 1 valor aleatório duma lista pra botar no butão innerHTML
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
      // definindo os bixin' q a gente precisa
      const image = document.getElementById('image')

      const butao1 = document.getElementById('butao1') 
      const butao2 = document.getElementById('butao2') 
      const butao3 = document.getElementById('butao3')

      const score = document.getElementById('score') 

      // fazendo os negócio aleatório q a gente precisa
      const randIndex2 = Math.floor(Math.random() * data.imgs.length);
      const randNome2 = data.imgs[randIndex2];

      const randIndex = Math.floor(Math.random() * 3) + 1;

      // finalmente definindo o butaoCerto (variavel global la em cima). fetchar() sempre tem q ser o primeiro a ser feito quando loada o quiz, se não vao tentar
      // acessar o butaoCerto e nao vao achar nada.
      butaoCerto = document.getElementById(`butao${randIndex}`);
      butaoCerto.textContent = data.nomes[randIndex2]; 

      //debugging, tira do comment caso necessário 
      //console.log(`img_ind = ${randIndex2}, but_ind = ${randIndex}, butaoCerto = ${butaoCerto.innerHTML}`)
      const butaoes = [butao1, butao2, butao3]
      const butaoes_sq2 = butaoes.filter(button => button !== butaoCerto)
      
      do {
        butaoes_sq2.forEach(button => randomizar(data.nomes, button));
      } while (hasDuplicates(butaoes))

      image.src = `assets/database/images/${randNome2}.png`;

      //o  score é tuas respostas_corretas menos as respostas_erradas. depois eu posso fazer uma config proq ela ser (sequencia ou isso). enfim.
      score.textContent = `${respostas_corretas - respostas_erradas}` 
      
    })
    .catch(error => console.error("Erro carregando database JSON: ", error))  

}

// adivinha... checa se o butao clicado tá certo
function checarResposta(element) {

  if (butaoCerto.id === element.id) {
    respostas_corretas += 1
    fetchar()
  } else { 
    respostas_erradas += 1
    fetchar()
  }
    

}
