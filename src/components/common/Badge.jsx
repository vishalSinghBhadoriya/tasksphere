function Badge({
  children,
  type = "default",
}) {
  const variants = {
    success:
      "bg-green-100 text-green-600",

    warning:
      "bg-yellow-100 text-yellow-600",

    danger:
      "bg-red-100 text-red-600",

    default:
      "bg-zinc-100 text-zinc-600",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${variants[type]}`}
    >
      {children}
    </span>
  );
}

export default Badge;