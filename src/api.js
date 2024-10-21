
// Función para obtener películas populares
export const fetchMovies = () => {
    return fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=26bc332f82a4e95761fafc4a3238a13f")
        .then(response => response.json())
        .then(data => {
            return data.results;// retorno arregloa de los resultados
            
        })
        .catch(error=>{
            console.log(error)
        })
}


