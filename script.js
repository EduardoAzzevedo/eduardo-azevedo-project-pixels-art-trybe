let color = 'rgb(0, 0, 0)';
const button = document.getElementById('clear-board');
const palette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');

window.onload = function() {
  createBoard();
}
function createBoard(){
  for (let index = 0; index < 5; index += 1) {
    const pixelParent = document.createElement('section');
    pixelBoard.appendChild(pixelParent);
    for (let index2 = 0; index2 < 5; index2 += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelParent.appendChild(pixel);
    };
  };
};

palette.addEventListener('click', function(event) {
  const element = event.target;
  if ( element === palette) {
    return ;
  }
  const previosSelected = document.querySelector('.selected');
  previosSelected.classList.remove('selected');
  element.classList.add('selected');
  cor = getComputedStyle(element).backgroundColor
});

pixelBoard.addEventListener('click', function(event) {
  const element = event.target;
  if ( element.classList.contains('pixel')) {
    element.style.backgroundColor = cor;
  };
});

button.addEventListener('click', function() {
  pixelBoard.innerHTML = null;
  createBoard();
});