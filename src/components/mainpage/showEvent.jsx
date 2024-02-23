"use client";
import React from "react";

export const ShowEvents = ({ data }) => {
  const onErrorHandler = (event) => {
    event.target.onerror = null; 
    event.target.src = "/gambar.webp"; 
  };

  return (
    <main className="space-y-2 p-5">
      {data.map((event) => (
        <div key={event.events.id}>
          <img
            src={event.events.image}
            onError={onErrorHandler} 
            alt={event.events.title}
            className="w-full h-auto max-w-[600px] max-h-[300px] object-cover"
          />
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
