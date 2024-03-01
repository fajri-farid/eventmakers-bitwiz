"use client";
import React from "react";
import { useState, useEffect } from "react";
import { SingleEvent } from "./singleEvent";

export async function GetDetailEvent(eventId) {
  try {
    const res = await fetch(
      `https://eventmakers-api.fly.dev/events/${eventId}`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to get data detail event.");
    }
    const data = await res.json();
    console.log("API Response:", data); // Log the API response
    return data;
    // return { data, isLoading: false };
  } catch (error) {
    throw new Error(error.message);
  }
}

export const GetSingleEvent = ({ params }) => {
  const { eventId } = params;
  const [dataDetailEvent, setDataDetailEvent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await GetDetailEvent(eventId);
        setDataDetailEvent(data.events);
      } catch (error) {
        console.error("Error fetching detail event:", error);
      }
    };

    fetchData();
  }, []);
  // console.log("KONDISI DATA:", dataDetailEvent);

  return (
    <div>
      <SingleEvent event={dataDetailEvent} />
    </div>
  );
};
