import React from "react";
import { cookies } from "next/headers";
import ShowEvents from "@/components/mainpage/showEvent";
import { DashHeaderAfter } from "@/components/sharedUI/afterlogin/DashHeaderAfter";
import { Footer } from "@/components/sharedUI/footer/Footer";
import ShowEventsForMyEvent from "@/components/myEvent/showEventForMyEvent";
import { getMyEvents } from "@/components/myEvent/onlymine";
import { session } from "@/components/myEvent/session";

async function getEvents() {
  try {
    const res = await fetch("https://eventmakers-api.fly.dev/events", {
      method: "GET",
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("Failed to get event data.");
    }
    const { data } = await res.json();
    return data.reverse();
  } catch (error) {
    throw new Error(error.message);
  }
}

export default async function Page() {
  // const { createdEvents } = await getMyEvents(usersData.id);
  // console.log(usersData);
  const { userData } = session();
  const authorID = userData.id;
  let events;

  try {
    const data = await getEvents();
    const userEvent = data?.filter((item) => item.events.author === authorID);
    events = userEvent;
  } catch (error) {
    console.error("Error fetching event list:", error);
  }
  return (
    <div>
      <DashHeaderAfter />
      <ShowEventsForMyEvent data={events} userData={userData} />
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
