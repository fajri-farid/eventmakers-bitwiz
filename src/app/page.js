import ShowEvents from "@/components/mainpage/showEvent";
import { DashHeader } from "@/components/sharedUI/beforelogin/DashHeader";
import { Footer } from "@/components/sharedUI/footer/Footer";

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
      <DashHeader />
      <ShowEvents data={data} />
      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}
