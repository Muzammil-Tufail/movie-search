function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex items-center bg-gray-800 rounded-lg px-4 py-2 w-full max-w-lg mx-auto">
      <img src="/search.svg" alt="Search" className="w-5 h-5 mr-3" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search through thousands of movies"
        className="bg-transparent outline-none w-full text-white placeholder-gray-400"
      />
    </div>
  );
}

export default Search;
