const quadro = document.querySelector('#pixel-board');
const paleta = document.querySelector('#color-palette');
let cor = 'rgb(0, 0, 0)';
const botao = document.querySelector('#clear-board');

window.onload = function() {
  criaQuadro();
}
  function criaQuadro(){
    for (let index = 0; index < 5; index += 1) {
      let linha = document.createElement('section');
      quadro.appendChild(linha);
      for (let index2 = 0; index2 < 5; index2 += 1) {
        let novoPixel = document.createElement('div');
        novoPixel.className = ('pixel');
        linha.appendChild(novoPixel);
      }
    }
  }

  paleta.addEventListener('click', function(event){
   const el = event.target;
   if (el === paleta) {
     return;
   }
   const previousSelected = document.querySelector('.selected');
   previousSelected.classList.remove('selected');
   el.classList.add('selected');
   cor = getComputedStyle(el).backgroundColor;
  })

  quadro.addEventListener('click', function(event){
    const el = event.target;
    if (el.classList.contains('pixel')) {
      el.style.backgroundColor = cor;
    };
  });

  botao.addEventListener('click', function(){
    quadro.innerHTML = null;
    criaQuadro();
  }); 
  //Feito junto com a Maria Isabella. Olhei de cimma a baixo no meu codigo que tinhamos feito juntos mas não achei oq estava errado então copiei o código, por que meu requisito 8 e 9 não estavam passando.
  //
// let color = 'rgb(0, 0, 0)';
// const palette = document.getElementById('color-palette');
// const pixelBoard = document.getElementById('pixel-board');
// const button = docume.getElementById('clear-board');
// for (let index = 0; index < 5; index += 1) {
//   const pixelParent = document.createElement('section');
//   pixelBoard.appendChild(pixelParent);
//   for (let index2 = 0; index2 < 5; index2 += 1) {
//     window.onload = function() {
//       createBoard();
//     };

//     function createBoard(){
//       for (let index = 0; index < 5; index += 1) {
//         const pixelParent = document.createElement('section');
//         pixelBoard.appendChild(pixelParent);
//         for (let index2 = 0; index2 < 5; index2 += 1) {
//         let pixel = document.createElement('div');
//         pixel.classList = 'pixel';
//         pixelParent.appendChild(pixel);
//         };
//       };
//     };
//   };
// };

//   palette.addEventListener('click', function(event) {
//     const element = event.target;
//     if ( element === palette) {
//       return ;
//     }
//     const previosSelected = document.querySelector('.selected');
//     previosSelected.classList.remove('selected');
//     element.classList.add('selected');
//     cor = getComputedStyle(element).backgroundColor
//   });

// pixelBoard.addEventListener('click', function(event) {
//   const element = event.target;
//   if ( element.classList.contains('pixel')) {
//     element.style.backgroundColor = cor;
//   };
// });

// button.addEventListener('click', function(event) {
//   pixelBoard.innerHTML = null;
//   createBoard()
// });