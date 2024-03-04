import { JoinedEvent } from "@/components/eventijoined/joinedEvent";
import { DashHeaderAfter } from "@/components/sharedUI/afterlogin/DashHeaderAfter";
import React from "react";

export default function page() {
  return (
    <div>
      <DashHeaderAfter />
      <JoinedEvent />
    </div>
  );
}
