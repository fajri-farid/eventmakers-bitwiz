import { CreateEvents } from "@/components/createevent/createEvent";
import { Footer } from "@/components/sharedUI/footer/Footer";
import React from "react";

export default function page() {
  return (
    <main>
      <CreateEvents />
      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}
