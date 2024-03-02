"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const JoinEvent = ({ eventId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();

  const handleJoinEvent = async () => {
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];
      if (!token) {
        throw new Error("Token not found in cookies");
      }

      const userData = localStorage.getItem("user");
      const {
        id: userId,
        name: userName,
        email: userEmail,
      } = JSON.parse(userData);

      const response = await fetch(
        `https://eventmakers-api.fly.dev/events/${eventId}/join`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: name || userName,
            email: email || userEmail,
            phoneNumber,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to join event");
      }

      const responseData = await response.json();
      console.log("Join Event Response:", responseData);
      router.push("/dashboard");
    } catch (error) {
      console.error("Error joining event:", error.message);
    }
  };

  return (
    <div>
      <h2 className="text-center font-bold mt-10">JOIN EVENT</h2>
      <div className="flex flex-col w-full p-20 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          className="border-2 border-black p-4 mb-4 block rounded-lg w-full"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          className="border-2 border-black p-4 mb-4 block rounded-lg w-full"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={phoneNumber}
          className="border-2 border-black p-4 mb-4 block rounded-lg w-full"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button
          type="button"
          onClick={handleJoinEvent}
          className="btn btn-ghost bg-indigo-500 text-[#000000] hover:btn hover:rounded-badge"
        >
          Join Event
        </button>
      </div>
    </div>
  );
};
