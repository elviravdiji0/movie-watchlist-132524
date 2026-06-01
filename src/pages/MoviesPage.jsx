// TODO: implement Add, Update (toggle watched), and Delete
import { AuthContext } from "../context/AuthContext";
import { useRef, useState, useContext } from "react";

function MoviesPage() {
  const { movies, setMovies } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("General");
  const [watched, setWatched] = useState(false);

  const titleRef = useRef(null);
  const directorRef = useRef(null);

  const addMovie = () => {
    if (!titleRef.current?.reportValidity?.() || !directorRef.current?.reportValidity?.()) return;

    setMovies(prev => [...prev, { id: Date.now(), title, director, genre, watched }])

    setTitle("");
    setDirector("");
    setGenre("General");
    setWatched(false);
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Movies</h1>
      <div className="flex flex-col border border-gray-500 rounded-md bg-gray-100 mb-6 p-4 gap-2">
        <h2 className="text-xl font-medium">New Movie</h2>
        <input type="text" required placeholder="Title *" ref={titleRef} value={title} className="px-2 py-1 border border-gray-200 rounded-md" onChange={e => setTitle(e.target.value)} />
        <input type="text" required placeholder="Director *" ref={directorRef} value={director} className="px-2 py-1 border border-gray-200 rounded-md" onChange={e => setDirector(e.target.value)} />
        <input type="text" placeholder="Genre" value={genre} className="px-2 py-1 border border-gray-200 rounded-md" onChange={e => setGenre(e.target.value)} />
        <label><input type="checkbox" checked={watched} onChange={e => setWatched(e.target.checked)} /> I have watched this movie!</label>
        <button onClick={addMovie} className="bg-green-400 text-white hover:bg-green-500 rounded-md py-1 px-3 w-fit ">Add Movie</button>
      </div>
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
