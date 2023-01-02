const inputEl = document.querySelector('input')
const buttonEl = document.querySelector('button')
const moviesEl = document.querySelector('ul.movies')

let searchText = ''
inputEl.addEventListener('input', function () {
  searchText = inputEl.value
})
buttonEl.addEventListener('click', function () {
  getMovies()
})

let movies = []
async function getMovies() {
  console.log('searchText:', searchText)
  const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&s=${searchText}`)
  const json = await res.json()
  console.log(json)
  movies = json.Search
  renderMovies(true)
}
function renderMovies (isFirst) {
  const movieEls = movies.map(function (movie) {
    const liEl = document.createElement('li')
    const TitleEl = document.createElement('h2')
    const posterEl = document.createElement('img')
    
    TitleEl.textContent = movie.Title
    posterEl.src = movie.Poster
    liEl.append(TitleEl,posterEl)
    return liEl
  })
  if (isFirst) {
    moviesEl.innerHTML = ''
  }
  
  moviesEl.append(...movieEls)
}