// 4 - Cria quadro de pixel, pixels dentro do quadro, classes e id.
//posso tentar usar uma function que será usada dentro de outra function para definir
//quantos quadrados serão criados(quantos divs serão criados com createElement)
function createBoard(){
let n = 5
  for (let index = 0; index < n; index += 1) {
    let pixelBoard = document.getElementById('pixel-board');
    let pixelParent = document.createElement('section');
    pixelBoard.appendChild(pixelParent);
    for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  
    let pixel = document.createElement('div');
    pixel.classList = 'pixel';
    pixelBoard.appendChild(pixel);
    };
  }
};
createBoard();
// //12
// function createRandomColor() {
//   let first3Numbers = Math.floor(Math.random() * 255);
//   let second3Numbers = Math.floor(Math.random() * 255);
//   let third3Numbers = Math.floor(Math.random() * 255);
//   let randomNumbers = `rgb(${first3Numbers}, ${second3Numbers}, ${third3Numbers})`;
//   return randomNumbers;
// }

// function getColor() {
//   let color1 = document.querySelector('#color1');
//   let color2 = document.querySelector('#color2');
//   let color3 = document.querySelector('#color3');
//   color1.getElementsByClassName.backgroundColor = createRandomColor;
//   color2.getElementsByClassName.backgroundColor = createRandomColor;
//   color3.getElementsByClassName.backgroundColor = createRandomColor;
// }