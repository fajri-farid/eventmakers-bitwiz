import { BackButton } from "@/components/createevent/backBotton";
import { CreateEvents } from "@/components/createevent/createEvent";
import React from "react";

export default function page() {
  return (
    <main>
      <DashHeaderAfter />
      <div className="ml-10 mt-4">
        <BackButton />
      </div>
      <CreateEvents />
      <Footer />
    </main>
  );
}
