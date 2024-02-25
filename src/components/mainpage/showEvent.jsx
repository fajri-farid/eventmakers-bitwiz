"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
            <Image
              src={event.events.image}
              onError={onErrorHandler}
              alt={event.events.title}
              className="w-full h-auto max-w-[600px] max-h-[300px] object-cover"
            />
          ) : (
            <Image
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
        </div>
      ))}
    </main>
  );
};

export default ShowEvents;
