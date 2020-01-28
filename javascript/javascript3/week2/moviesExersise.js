
let requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json", requestOptions)
  .then(response => response.json())
  .then(cbFunction)
  .catch(error => console.log('error', error));



function cbFunction(movies) {
  let badMovies = movies.filter(item => item.rating < 7);
  let badMoviesSince2000 = badMovies.filter(item => item.year >= 2000);
  let badMoviesSince2000Title = badMoviesSince2000.map(item => item.title);
  let listOfTitle = document.getElementById("titlesOfBadMoviesSince2000");
  badMoviesSince2000Title.forEach(title => {
    let listItem = document.createElement('li');
    listItem.innerHTML = title;
    listOfTitle.appendChild(listItem);

  });
}















