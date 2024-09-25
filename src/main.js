//Importar funciones para poder mostrar en pantalla principal
//import { sortData } from './dataFunctions.js';
//import { filterData } from './dataFunctions.js';
import { renderMovies } from './view.js';
import data from './data/dataset.js';
const lista = document.querySelector("#root>ul");
const html = renderMovies(data);
lista.innerHTML = html;
console.log(lista);