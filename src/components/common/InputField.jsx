function InputField({
  type = "text",
  placeholder,
  register,
  name,
  rules,
  error,
}) {
  return (
    <div>
      
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        className={`w-full border rounded-xl px-4 py-3 outline-none
        ${
          error
            ? "border-red-500"
            : "border-gray-300"
        }`}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error.message}
        </p>
      )}

    </div>
  );
}

export default InputField;