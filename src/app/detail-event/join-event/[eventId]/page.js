import { JoinEvent } from "@/components/joinevent/joinEvent";
import { TryJoinEvent } from "@/components/joinevent/tryJoinEvent";
import React from "react";

export default function page({ params }) {
  return (
    <div>
      {/* <JoinEvent eventId={eventId} /> */}
      <TryJoinEvent params={params} />
    </div>
  );
}
