import { useState } from 'react'
import './styles/app/app.css'
import { Nav, Greeting, Footer, FavoriteList } from './components'

function App() {
  const favoriteFoods = ["Pizza", "Sushi", "Burgers", "Ice Cream", "Pasta"];
  const favoriteMovies = ["Inception", "The Shawshank Redemption", "The Dark Knight", "Forrest Gump", "Pulp Fiction"];

  return (
    <div className='app'>
      <Nav />
      <div className='greeting'>
        <Greeting name="Et" />
        <Greeting name="To" />
        <Greeting name="Tre" />
      </div>
      <div className='favorite'>
        <FavoriteList items={favoriteFoods} title="Favorite Foods" />
        <FavoriteList items={favoriteMovies} title="Favorite Movies" />
      </div>

      <Footer />
    </div>
  )
}

export default App
