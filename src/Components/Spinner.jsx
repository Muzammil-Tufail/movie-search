function Spinner() {
  return (
    <svg
      aria-hidden="true"
      className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-indigo-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* SVG path contents... */}
      <span className="sr-only">Loading...</span>
    </svg>
  );
}

export default Spinner;
