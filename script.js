// <!-- <main>
// <header>
//   <h1 id="title">Paleta de Cores</h1>
// </header>
// <div id="color-palette">
//  <div id="black" class="color"></div>
//  <div id="color1" class="color"></div>
//  <div id="color2" class="color"></div>
//  <div id="color3" class="color"></div>
// </div>
// </main> -->

// 1 - Cria uma tag "h1" com um id "title".
let body = document.querySelector('body');
let elementH1 = document.createElement('h1');
elementH1.innerText = 'Paleta de Cores';
elementH1.id = 'title';
document.body.appendChild(elementH1);


// 2 - Cria div que vai receber as divs com as paletas de cores.
let classOfColors = 'color';
let divOfPalette = document.createElement('div');
divOfPalette.id = 'color-palette';
document.body.appendChild(divOfPalette);

let divPalette1 = document.createElement('div');
divPalette1.className = classOfColors;
divPalette1.id = 'color1';
divOfPalette.appendChild(divPalette1);

let divPalette2 = document.createElement('div');
divPalette2.className = classOfColors;
divPalette2.id = 'color2';
divOfPalette.appendChild(divPalette2);

let divPalette3 = document.createElement('div');
divPalette3.className = classOfColors;
divPalette3.id = 'color3';
divOfPalette.appendChild(divPalette3);

let divPalette4 = document.createElement('div');
divPalette4.className = classOfColors;
divPalette4.id = 'color4';
divOfPalette.appendChild(divPalette4);


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