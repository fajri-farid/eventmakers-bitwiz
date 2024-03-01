import React from "react";
import Link from "next/link";

export const Back = () => {
  return (
    <div className="m-2">
      <Link href="/dashboard/my-event">
        <button className="bg-black text-white text-xl rounded-full p-4 m-4">
          {"<"}
        </button>
      </Link>
    </div>
  );
};
