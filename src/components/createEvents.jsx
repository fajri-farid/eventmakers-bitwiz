"use client";

import React from "react";
import { useState } from "react";

export const CreateEvents = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [author, setAuthor] = useState("");

  async function handleCreateEvent() {
    fetch("https://eventmakers-api.fly.dev/events/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "",
        description: "",
        image: "",
        dateTime: "",
        author: "",
      }),
    });

    const data = await res.json();
    console.log(data);
  }

  return (
    <div className="flex flex-col space-y-4 p-10">
      <h2>Create Event</h2>
      <input placeholder="title" onChange={(e) => setTitle(e.target.value)} />
      <input
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input placeholder="image" onChange={(e) => setImage(e.target.value)} />
      <input
        placeholder="dateTime"
        onChange={(e) => setDateTime(e.target.value)}
      />
      <input placeholder="author" onChange={(e) => setAuthor(e.target.value)} />
      <button
        onClick={handleCreateEvent}
        className="bg-pink-400 text-white py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8"
      >
        Create
      </button>
    </div>
  );
};
