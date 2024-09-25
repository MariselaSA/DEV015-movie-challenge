export const renderMovies = (data) => {
    return data.map(movie => `
          <li class="li" itemtype="tarjeta" itemscope>
        <img src="https://image.tmdb.org/t/p/w342${movie.poster_path}" alt="${movie.title}">
        <p>${movie.title}</p>
        <p>${movie.overview}</p>
        <p>${movie.release_date}</p>
      </li>    
    `).join('');
  };
  