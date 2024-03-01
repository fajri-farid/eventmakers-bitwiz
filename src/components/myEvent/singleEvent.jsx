"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Back } from "../sharedUI/back";

export const SingleEvent = ({ event }) => {
  const router = useRouter();

  async function handleDeleteEvent(eventId) {
    try {
      const cookies = document.cookie.split(";").reduce((acc, cookie) => {
        const [name, value] = cookie.trim().split("=");
        acc[name] = value;
        return acc;
      }, {});

      const token = cookies["token"];
      if (!token) {
        throw new Error("Token not found in cookies");
      }

      const res = await fetch(
        `https://eventmakers-api.fly.dev/events/${eventId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`, // Menambahkan header Authorization dengan token
            "Content-Type": "application/json", // Menentukan tipe konten
          },
        }
      );
      if (res.ok) {
        console.log(`Event with ID ${eventId} deleted successfully.`);
        router.push("/dashboard/my-event");
      } else {
        console.error(`Failed to delete event with ID ${eventId}.`);
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  }

  if (!event) {
    return null; // Render nothing if event is null or undefined
  }

  const onErrorHandler = (event) => {
    event.target.onerror = null; // Mencegah loop tak terbatas jika gambar default juga gagal dimuat
    event.target.src = "/gambar.webp"; // Path dari gambar default
  };

  return (
    <div>
      <Back />
      <div className="flex flex-col w-full p-20 gap-4">
        {event.image ? (
          <img
            src={event.image}
            onError={onErrorHandler}
            alt={event.title}
            className="w-full h-auto max-w-[600px] max-h-[300px] object-cover"
          />
        ) : (
          <img
            src="/gambar.webp"
            alt="No Image"
            className="w-full h-auto max-w-[600px] max-h-[300px] object-cover"
          />
        )}
        <p className="font-bold text-2xl">{event?.title}</p>
        <p className="text-2xl">{event?.description}</p>
        <p className="text-2xl">{event?.dateTime}</p>
        <p className="text-2xl">author by admin {event?.author}</p>
        <div className="flex justify-between p-10">
          <div>
            <button
              className="btn btn-ghost bg-indigo-500 text-[#ffffff] hover:btn hover:bg-indigo-500"
              onClick={() => handleDeleteEvent(event.id)}
            >
              Delete Event
            </button>
          </div>
          <div>
            <Link href={`/dashboard/my-event/edit-event/${event?.id}`}>
              <button className="btn btn-ghost bg-indigo-500 text-[#ffffff] hover:btn hover:bg-indigo-500">
                Edit Event
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
