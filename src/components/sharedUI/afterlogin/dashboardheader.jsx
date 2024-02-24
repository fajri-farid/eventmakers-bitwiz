import Link from "next/link";
import React from "react";

export const DashboardHeader = () => {
  return (
    <div className="flex justify-between p-4">
      <h2>EventMakers</h2>
      <Link href="/dashboard/create-event">Create Events</Link>
    </div>
  );
};
