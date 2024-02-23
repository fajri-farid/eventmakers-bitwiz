"use client";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const CreateEvents = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [author, setAuthor] = useState("");

  const getLoggedInUserId = () => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      return user.id;
    }
    return null;
  };

  useEffect(() => {
    const loggedInUserId = getLoggedInUserId();
    ``;
    setAuthor(loggedInUserId);
  }, []);

  async function handleCreateEvent() {
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

      const res = await fetch("https://eventmakers-api.fly.dev/events/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description,
          image,
          dateTime,
          author,
        }),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error creating event:", error);
    }
  }

  return (
    <div className="flex flex-col space-y-4 p-10">
      <h2 className="text-center text-xl font-bold">Create Event</h2>
      <input
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
        className="border-2 border-black p-4 mb-4 block rounded-lg w-full"
      />
      <input
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
        className="border-2 border-black p-4 mb-4 block rounded-lg w-full"
      />
      <input
        placeholder="image"
        onChange={(e) => setImage(e.target.value)}
        className="border-2 border-black p-4 mb-4 block rounded-lg w-full"
      />
      <input
        type="date"
        placeholder="dateTime"
        onChange={(e) => setDateTime(e.target.value)}
        className="border-2 border-black p-4 mb-4 block rounded-lg w-full"
      />
      <input
        placeholder="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border-2 border-black p-4 mb-4 block rounded-lg w-full"
        disabled
      />
      <button
        onClick={handleCreateEvent}
        className="bg-pink-400 text-white py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8"
      >
        Create
      </button>
    </div>
  );
};
