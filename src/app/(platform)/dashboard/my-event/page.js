import React from "react";
import { cookies } from "next/headers";
import ShowEvents from "@/components/mainpage/showEvent";
import { DashHeaderAfter } from "@/components/sharedUI/afterlogin/DashHeaderAfter";
import { Footer } from "@/components/sharedUI/footer/Footer";
import ShowEventsForMyEvent from "@/components/myEvent/showEventForMyEvent";

async function getUsers() {
  const token = cookies().get("token").value;
  // return token;
  const res = await fetch("https://eventmakers-api.fly.dev/users/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
}

export async function getEvents() {
  const res = await fetch("https://eventmakers-api.fly.dev/events/");
  const data = await res.json();
  return data;
}

export default async function Page() {
  const usersData = await getUsers();
  const { data } = await getEvents();
  // console.log(usersData);
  return (
    <div>
      <DashHeaderAfter />
      <ShowEventsForMyEvent data={data} />
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
