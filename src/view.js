export const renderMovies = (data) => {
    return data.map(movie => `
          <li class="li" itemtype="tarjeta" itemscope>
        <img src="https://image.tmdb.org/t/p/w185${movie.poster_path}" alt="${movie.title}">

        <p class="title">${movie.title}</p>      
        <p class="estreno">AÑO DE ESTRENO:>${movie.release_date}</p>
      </li>    
    `).join('');
  };
  