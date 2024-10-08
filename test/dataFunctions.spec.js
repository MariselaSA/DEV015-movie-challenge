import { filterData } from "../src/dataFunctions";
import { dataTest } from '../test/dataTest.js';
//console.log(dataTest);
describe('filterData', () => {
    it('Debe filtrar las películas por género', () => {
        const resultfilterData = filterData(dataTest, 'genres', 'Comedia');
        // Comprobamos si cada película filtrada incluye el género 'Comedia'
        resultfilterData.forEach((movie) => {//usaremos forEach 
            expect(movie.genres).toContain('Comedia');
        });
    });
});

describe('filerData',()=>{
    it ('Debe votar un arreglo vacío cuando no hay una pelicula con el género que se pone',()=>{
        const resultfilterData=filterData(dataTest,'genres','drama');
    //COMPROBARÉ SI HAY PELICULA CON UN GÉNERO QUE NO HAYA ENTONCES 
   expect(resultfilterData).toEqual([]);

    }

    )
}
    


)