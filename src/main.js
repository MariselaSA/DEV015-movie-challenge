//Importar funciones para poder mostrar en pantalla principal
//import { sortData } from './dataFunctions.js';
//import { filterData } from './dataFunctions.js';
import { renderMovies } from './view.js';
import data from './data/dataset.js';
const lista = document.querySelector("#root>ul");
const html = renderMovies(data);
lista.innerHTML = html;
console.log(lista);
const genero=document.querySelector("#genero");
const ordenar=document.querySelector("#ordenar");

genero.addEventListener('change', function (event) {
    const filterBy = "departamento";
    const selectedValue = event.target.value; // Obtiene el valor seleccionado
    const filterData = filterData(data, filterBy, selectedValue); // Filtra los datos
    lista.innerHTML = renderItems(filterData); // Renderiza los datos filtrados
})