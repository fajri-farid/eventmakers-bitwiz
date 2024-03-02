import { JoinEvent } from "@/components/joinevent/joinEvent";
import React from "react";

export default function page({ eventId }) {
  return (
    <div>
      <JoinEvent eventId={eventId} />
    </div>
  );
}
