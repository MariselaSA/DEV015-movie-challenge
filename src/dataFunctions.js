export function filterData(data, filterBy, value) {
  console.log(data, filterBy, value);
  const genreId = parseInt(value, 10);
  return data.filter(function (item) {
    //console.log(item,item.facts[filterBy],value);
    return item.genre_ids.includes(value);


  });
}
