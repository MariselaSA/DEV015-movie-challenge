export function filterData(data, filterBy, value) {
    console.log(data, filterBy, value);
    return data.filter(function (item) {
      //console.log(item,item.facts[filterBy],value);
      return item.genres.includes(value);
      
  
    });
  }
