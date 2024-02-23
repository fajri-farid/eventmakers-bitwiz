"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Register = () => {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function handleSubmitRegister(event) {
    event.preventDefault();

    const { name, email, password } = formValues; // Mengambil nilai dari formValues yang telah diperbarui

    //fetch the api
    const res = await fetch("https://eventmakers-api.fly.dev/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await res.json();
    console.log(data);

    router.push("/login");
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // disable button jika ada field yang kosong
  const isFormValid =
    formValues.name && formValues.email && formValues.password;

  return (
    <div>
      <h2 className="mb-2 font-bold text-xl text-center">Register</h2>
      <form onSubmit={handleSubmitRegister}>
        <h2>User Name</h2>
        <input
          name="name"
          placeholder="name"
          value={formValues.name}
          type="text"
          className="border-2 border-black p-4 mb-4 block rounded-lg w-full"
          onChange={handleChange}
        />
        <h2>Email</h2>
        <input
          name="email"
          placeholder="email"
          value={formValues.email}
          type="email"
          className="border-2 border-black p-4 mb-4 block rounded-lg w-full"
          onChange={handleChange}
        />
        <h2>Password</h2>
        <input
          name="password"
          placeholder="password"
          value={formValues.password}
          type="password"
          className="border-2 border-black p-4 mb-4 block rounded-lg w-full"
          onChange={handleChange}
        />
        <button
          className="bg-indigo-600 text-white p-2 rounded-xl w-full"
          disabled={!isFormValid}
        >
          register
        </button>
      </form>
    </div>
  );
};
