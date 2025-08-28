function MovieCard({ movie }) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform">
      <img
        src={movie["#IMG_POSTER"] || "/placeholder.png"}
        alt={movie["#TITLE"]}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{movie["#TITLE"]}</h2>
        <p className="text-gray-400">{movie["#YEAR"]}</p>
        <p className="text-sm text-gray-500">{movie["#ACTORS"]}</p>
        <a
          href={movie["#IMDB_URL"]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline text-sm"
        >
          View on IMDb
        </a>
      </div>
    </div>
  );
}

export default MovieCard;
