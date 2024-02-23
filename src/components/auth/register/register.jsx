"use client";

export const Register = () => {
  async function handleSubmitRegister(event) {
    //tidak me-refresh
    event.preventDefault();

    //how to get the value
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // console.log({ name, email, password });

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
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmitRegister}>
        <input name="name" placeholder="name" />
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <button>register</button>
      </form>
    </div>
  );
};
