"use client";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
//Styles
import heroStyle from "@/styles/eventpageStyles/hero.module.css";
import boxStyle from "@/styles/eventpageStyles/box.module.css";

export const CreateEvents = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [author, setAuthor] = useState("");

  // Mengatur tanggal hari ini sebagai tanggal minimum
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDateTime(today);
  }, []);

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

      router.push("/dashboard");
    } catch (error) {
      console.error("Error creating event:", error);
    }
  }

  return (
    <main>
      <div className="relative">
        <img
          src="/bg_eventCorner.png"
          className="absolute hidden md:block md:scale-100 lg:-top-96 -z-20 "
          alt=""
        />
      </div>
      <div className="relative">
        <img
          src="/bg_eventCorner_mobile.png"
          className="absolute  md:hidden -z-20 "
          alt=""
        />
      </div>
      <div className="pt-20 pb-10 pl-5 lg:pl-40">
        <div className="flex space-x-5 lg:space-x-10 items-center">
          <Link href="/dashboard">
            <button className={heroStyle.backButton}>{"<"}</button>
          </Link>
          <div>
            <div className={heroStyle.heroStyle}>Hello, Eveners.</div>
            <div className={heroStyle.heroStyle}>
              <div>
                Welcome to <span className="font-semibold">Event.</span>
                Corners
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={boxStyle.box}>
        <div className={boxStyle.title}>Create Event</div>
        <div className="md:flex justify-around">
          <div className="pl-[40px] md:pl-0">
            <div className="text-bitwizz-blue">Event Title</div>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              className={boxStyle.inputStyle}
            />
            <div className="text-bitwizz-blue">Description</div>
            <textarea
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              className={boxStyle.inputDesStyle}
            />
            <div className="text-bitwizz-blue">Author</div>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className={boxStyle.inputStyle}
            />
          </div>
          <div className={boxStyle.separator}></div>
          <div className="pl-[40px] md:pl-0">
            <div className="text-bitwizz-blue">Thumbnail Event</div>
            <input
              type="text"
              className={boxStyle.inputStyle}
              onChange={(e) => setImage(e.target.value)}
            />
            <div className="text-bitwizz-blue">Event Date</div>
            <input
              type="date"
              onChange={(e) => setDateTime(e.target.value)}
              min={dateTime}
              className={boxStyle.inputStyle}
            />
          </div>
        </div>
        <div className="w-fit m-auto py-10">
          <button onClick={handleCreateEvent} className={boxStyle.buttonStyle}>
            Create
          </button>
        </div>
      </div>
    </main>
  );
};
