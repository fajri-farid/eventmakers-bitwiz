import { LoginButton } from "@/components/mainpage/loginbutton";
import { RegisterButton } from "@/components/mainpage/registerbutton";
import ShowEvents from "@/components/mainpage/showEvent";

export async function getEvents() {
  const res = await fetch("https://eventmakers-api.fly.dev/events/");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const { data } = await getEvents();
  // console.log(data);

  return (
    <main className="p-5">
      <div className="flex justify-end gap-5">
        <LoginButton />
        <RegisterButton />
      </div>
      <ShowEvents data={data} />
    </main>
  );
}
