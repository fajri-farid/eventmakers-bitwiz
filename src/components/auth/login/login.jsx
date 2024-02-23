"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Login = () => {
  const router = useRouter();

  async function handleSubmitLogin(event) {
    //tidak me-refresh saat klik login
    event.preventDefault();

    //how to get the value
    const email = event.target.email.value;
    const password = event.target.password.value;

    //fetch the api
    const res = await fetch("https://eventmakers-api.fly.dev/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const { payload, token } = await res.json();

    // save payload to local storage
    localStorage.setItem("user", JSON.stringify(payload));

    // store token to cookies
    Cookies.set("token", token);

    router.push("/dashboard");
  }

  return (
    <div>
      <div>
        <h2 className="mb-2 font-bold text-xl text-center">Login</h2>
        <form onSubmit={handleSubmitLogin} className="flex flex-col">
          <h2>Email</h2>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="border-2 border-black p-4 mb-4 block rounded-lg w-full"
          />
          <h2>Password</h2>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="border-2 border-black p-4 mb-4 block rounded-lg w-full"
          />
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <button className="bg-indigo-600 text-white p-2 rounded-xl w-full">
            login
          </button>
        </form>
        <p className="mt-2 text-center">
          don't have an account?{" "}
          <Link href="/register" className="text-blue-600">
            create your account here
          </Link>
        </p>
      </div>
    </div>
  );
};
