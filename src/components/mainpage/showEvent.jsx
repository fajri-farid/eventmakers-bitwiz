"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const ShowEvents = ({ data }) => {
  const router = useRouter();

  router.refresh();

  const onErrorHandler = (event) => {
    event.target.onerror = null;
    event.target.src = "/gambar.webp"; // Ganti dengan URL gambar placeholder Anda
  };

  return (
    <main className="space-y-2 p-5">
      {data.map((event) => (
        <div key={event.events.id}>
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
          </div>
          <Link href={`/detail-event/${event.events.id}`}>
            <button className="bg-pink-400 text-white py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-md font-bold">
              Get Info
            </button>
          </Link>
        </div>
      ))}
    </main>
  );
};

export default ShowEvents;
