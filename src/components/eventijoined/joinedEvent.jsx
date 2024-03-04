"use client";

import { useState, useEffect } from "react";
import registeredEvent from "./registeredEvent";
import Link from "next/link";

export const JoinedEvent = () => {
  const { isLoading, dataEvent, user } = registeredEvent();

  const onErrorHandler = (event) => {
    event.target.onerror = null;
    event.target.src = "/gambar.webp";
  };

  return (
    <div className="px-6 py-3 lg:py-6 w-full">
      <h2 className="font-bold text-2xl text-center">Joined Event</h2>
      {isLoading ? (
        <div className="skeleton w-96 h-48 bg-slate-100 opacity-35"></div>
      ) : (
        <>
          {dataEvent !== null && dataEvent.length > 0 ? (
            dataEvent.map((event) => (
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
                  <p>creator: Bitwizz</p>
                </div>
                <Link href={`/dashboard/my-event/${event.events.id}`}>
                  <button className="btn btn-ghost bg-indigo-500 text-[#ffffff] hover:btn hover:bg-indigo-500">
                    Detail
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p>Data belum ada.</p>
          )}
        </>
      )}
    </div>
  );
};
