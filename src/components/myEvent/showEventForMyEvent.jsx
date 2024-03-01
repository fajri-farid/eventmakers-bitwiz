"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const ShowEventsForMyEvent = ({ data }) => {
  const router = useRouter();

  router.refresh();

  const onErrorHandler = (event) => {
    event.target.onerror = null;
    event.target.src = "/gambar.webp"; // Ganti dengan URL gambar placeholder Anda
  };

  return (
    <main className="space-y-2 p-5">
      <h2 className="font-bold text-2xl text-center">My Event</h2>
      {data.map((event) => (
        <div key={event.events.id} className="m-2 p-10">
          {event.events.image ? (
            <img
              src={event.events.image}
              onError={onErrorHandler}
              alt={event.events.title}
              className="w-full h-auto max-w-[600px] max-h-[300px] object-cover"
            />
          ) : (
            <img
              src="/gambar.webp"
              alt="No Image"
              className="w-full h-auto max-w-[600px] max-h-[300px] object-cover"
            />
          )}
          <div className="pt-10">
            <h2>{event.events.title}</h2>
            <p>{event.events.description}</p>
            <p className="font-bold">price: Rp. 100.000</p>
            <p>nama pembuat</p>
          </div>
          <Link href={`/dashboard/my-event/${event.events.id}`}>
            <button className="btn btn-ghost bg-indigo-500 text-[#ffffff] hover:btn hover:bg-indigo-500">
              Detail
            </button>
          </Link>
        </div>
      ))}
    </main>
  );
};

export default ShowEventsForMyEvent;
