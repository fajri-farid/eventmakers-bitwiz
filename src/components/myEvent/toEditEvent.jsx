"use client";
import React, { useState, useEffect } from "react";
import { Back } from "../sharedUI/back";
import { useRouter } from "next/navigation";

export const ToEditEvent = ({ event }) => {
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedImage, setEditedImage] = useState("");
  const [editedDateTime, setEditedDateTime] = useState("");
  const [editedAuthor, setEditedAuthor] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (event) {
      // Inisialisasi nilai yang diedit dengan nilai awal dari event
      setEditedTitle(event.title || "");
      setEditedDescription(event.description || "");
      setEditedImage(event.image || "");
      setEditedDateTime(event.dateTime || "");
      setEditedAuthor(event.author || "");
    }
  }, [event]);

  const handleSaveClick = async () => {
    const editedEvent = {
      title: editedTitle,
      description: editedDescription,
      image: editedImage,
      dateTime: editedDateTime,
      author: editedAuthor,
    };
    try {
      const cookies = document.cookie.split(";").reduce((acc, cookie) => {
        const [name, value] = cookie.trim().split("=");
        acc[name] = value;
        return acc;
      }, {});

      const token = cookies["token"];

      const res = await fetch(
        `https://eventmakers-api.fly.dev/events/${event.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(editedEvent),
        }
      );
      if (!res.ok) {
        throw new Error("Failed to update event.");
      }
      console.log("Event updated successfully!");
      router.push("/dashboard/my-event");
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  return (
    <div>
      <Back />
      <div className="flex flex-col w-full p-20 gap-4">
        <h2 className="text-center text-2xl">UPDATE EVENT</h2>
        <input
          placeholder="title"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          className="border-2 border-black p-4 mb-4 block rounded-lg w-full"
        />
        <input
          placeholder="description"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          className="border-2 border-black p-4 mb-4 block rounded-lg w-full"
        />
        <input
          placeholder="title"
          value={editedImage}
          onChange={(e) => setEditedImage(e.target.value)}
          className="border-2 border-black p-4 mb-4 block rounded-lg w-full"
        />
        <input
          type="date"
          placeholder="title"
          value={editedDateTime}
          onChange={(e) => setEditedDateTime(e.target.value)}
          className="border-2 border-black p-4 mb-4 block rounded-lg w-full"
        />
        <input
          placeholder="title"
          value={editedAuthor}
          onChange={(e) => setEditedAuthor(e.target.value)}
          className="border-2 border-black p-4 mb-4 block rounded-lg w-full"
          disabled
        />
        <button
          onClick={handleSaveClick}
          className="bg-pink-400 text-white py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-md font-bold"
        >
          Update
        </button>
      </div>
    </div>
  );
};
