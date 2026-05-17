function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300 p-5 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;