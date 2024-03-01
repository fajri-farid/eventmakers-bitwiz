import { EditEvent } from "@/components/myEvent/editEvent";
import React from "react";

export default function page({ params }) {
  return (
    <div>
      ini edit event!
      <div>
        <EditEvent params={params} />
      </div>
    </div>
  );
}
