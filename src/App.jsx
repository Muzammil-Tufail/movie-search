import { useEffect, useState } from "react";
import Search from "./Components/Search";
import Spinner from "./Components/Spinner";
import MovieCard from "./Components/MovieCard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      if (searchTerm.trim() === "") return;

      setLoading(true);
      try {
        const res = await fetch(
          `https://imdb.iamidiotareyoutoo.com/search?q=${searchTerm}`
        );
        const data = await res.json();

    
        if (data && Array.isArray(data.description)) {
          setMovies(data.description);
        } else {
          setMovies([]);
        }
      } catch (err) {
        console.error(err);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [searchTerm]);

  return (
    <div
      className="min-h-screen bg-gray-900 text-white p-6"
      style={{
        backgroundImage: "url('/hero-bg.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl font-bold text-center mb-6">Movie Search</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {loading ? (
        <div className="flex justify-center mt-8">
          <Spinner />
        </div>
      ) : movies.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {movies.map((movie, index) => (
            <MovieCard key={movie["#IMDB_ID"] || index} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 mt-8">
          No movies found. Try another search.
        </p>
      )}
    </div>
  );
}

export default App;

