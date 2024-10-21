//Importar funciones para poder mostrar en pantalla principal
//import { sortData } from './dataFunctions.js';
import { filterData } from './dataFunctions.js';
import { renderMovies } from './view.js';
import { fetchMovies } from './api.js';
//import data from './data/dataset.js';

const dataMovie = fetchMovies()
    .then(data => {
        console.log(typeof data)
        console.log(data)
       
        const lista = document.querySelector("#root>ul");
        const html = renderMovies(data);
        const genero = document.querySelector("#genero");
        //const ordenar=document.querySelector("#ordenar")
        lista.innerHTML = html
        console.log(lista);



        
genero.addEventListener('change', function (event) {
    
    const selectedValue =  parseInt(event.target.value, 10); // Obtiene el valor seleccionado
    console.log(selectedValue)
    const filteredData = filterData(data, 'genre_ids', selectedValue); // Filtra los datos
    console.log("DATOS FILTADROS:", filteredData);
    lista.innerHTML = renderMovies(filteredData); // Renderiza los datos filtrados


})
    })

    .catch(error => console.error("Error al cargar las películas:", error));



//console.log(dataMovie);
//console.log(Array.isArray(data), data);
//const lista = document.querySelector("#root>ul");
;

//RENDERIZA LOS DATOS
//lista.innerHTML = html;






/*genero.addEventListener('change', function (event) {
    const filterBy = "genero";
    const selectedValue = event.target.value; // Obtiene el valor seleccionado
    const filteredData = filterData(data, filterBy, selectedValue); // Filtra los datos
    console.log("DATOS FILTADROS:", filteredData);
    lista.innerHTML = renderMovies(filteredData); // Renderiza los datos filtrados
})
  */