import { useEffect } from "react";

import { useForm } from "react-hook-form";

function UserForm({
  onSubmit,
  initialData,
}) {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const submitHandler = (data) => {
    onSubmit({
      id:
        initialData?.id ||
        Date.now(),

      ...data,
    });

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(
        submitHandler
      )}
      className="space-y-4"
    >
      
      {/* First Name */}
      <div>

        <input
          type="text"
          placeholder="First Name"
          {...register(
            "firstName",
            {
              required:
                "First name is required",
            }
          )}
          className={`w-full border rounded-xl px-4 py-3 outline-none
${
  errors.firstName
    ? "border-red-500"
    : "border-gray-300"
}`}
        />

        {errors.firstName && (
          <p className="text-red-500 text-sm mt-1">
            {
              errors.firstName
                .message
            }
          </p>
        )}

      </div>

      {/* Last Name */}
      <div>

        <input
          type="text"
          placeholder="Last Name"
          {...register(
            "lastName",
            {
              required:
                "Last name is required",
            }
          )}
          className="w-full border rounded-xl px-4 py-3"
        />

        {errors.lastName && (
          <p className="text-red-500 text-sm mt-1">
            {
              errors.lastName
                .message
            }
          </p>
        )}

      </div>

      {/* Email */}
      <div>

        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required:
              "Email is required",

            pattern: {
              value:
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

              message:
                "Invalid email address",
            },
          })}
          className="w-full border rounded-xl px-4 py-3"
        />

        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {
              errors.email.message
            }
          </p>
        )}

      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-xl"
      >
        Save User
      </button>

    </form>
  );
}

export default UserForm;