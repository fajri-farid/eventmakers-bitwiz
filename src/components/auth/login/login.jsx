"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

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
        <h2>Login</h2>
        <form onSubmit={handleSubmitLogin}>
          <input name="email" placeholder="email" />
          <input name="password" placeholder="password" />
          <button>login</button>
        </form>
      </div>
    </div>
  );
};
