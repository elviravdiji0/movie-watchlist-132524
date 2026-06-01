// TODO: import movies from utils/movies.js
// TODO: implement Read - display the list of movies
// TODO: implement Add, Update (toggle watched), and Delete
import { movies } from "../utils/movies"

function MoviesPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Movies</h1>
      <div className="flex flex-col gap-4">
        {movies.map(movie => (
        <div key={movie.id} className="border border-gray-300 rounded-md p-4">
          <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
          <p>Directed by <span className="font-medium">{movie.director}</span></p>
          <p>Genre: <span className="font-medium">{movie.genre}</span></p>
          <p>Status: <span className="font-medium">{movie.watched ? "Watched" : "Planned"}</span></p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default MoviesPage
