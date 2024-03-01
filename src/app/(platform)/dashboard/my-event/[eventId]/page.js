import { GetSingleEvent } from "@/components/myEvent/getSingleEvent";
import React from "react";

export default function page({ params }) {
  return (
    <div>
      <GetSingleEvent params={params} />
    </div>
  );
}
