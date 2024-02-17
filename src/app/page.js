import { ShowEvents } from "@/lib/showEvents";

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
      <ShowEvents data={data} />
    </main>
  );
}
