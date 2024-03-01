"use client";
import React from "react";
import Link from "next/link";

export const SingleEvent = ({ event }) => {
  if (!event) {
    return null; // Render nothing if event is null or undefined
  }

  const onErrorHandler = (event) => {
    event.target.onerror = null; // Mencegah loop tak terbatas jika gambar default juga gagal dimuat
    event.target.src = "/gambar.webp"; // Path dari gambar default
  };

  return (
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
      <Link href={`/event-detail/join-event/${event?.id}`}>
        <div className="flex justify-between p-10">
          <button className="btn btn-ghost bg-indigo-500 text-[#ffffff] hover:btn hover:bg-indigo-500">
            Delete Event
          </button>
          <Link href={`/dashboard/my-event/edit-event/${event?.id}`}>
            <button className="btn btn-ghost bg-indigo-500 text-[#ffffff] hover:btn hover:bg-indigo-500">
              Edit Event
            </button>
          </Link>
        </div>
      </Link>
    </div>
  );
};
