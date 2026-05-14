import { useState, useEffect } from "react";

function UserForm({
  onSubmit,
  initialData,
}) {
  const [firstName, setFirstName] =
    useState("");

  const [lastName, setLastName] =
    useState("");

  const [email, setEmail] =
    useState("");

  useEffect(() => {
    if (initialData) {
      setFirstName(initialData.firstName);

      setLastName(initialData.lastName);

      setEmail(initialData.email);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: initialData?.id || Date.now(),

      firstName,
      lastName,
      email,
    });

    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) =>
          setFirstName(e.target.value)
        }
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) =>
          setLastName(e.target.value)
        }
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        className="w-full border rounded-xl px-4 py-3"
      />

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