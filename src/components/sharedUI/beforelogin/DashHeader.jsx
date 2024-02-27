"use client";

import Link from "next/link";

export const DashHeader = () => {
  return (
    <header>
      <div className="px-10 lg:px-40 py-10 flex justify-between">
        <div className="text-2xl text-bitwizz-blue font-semibold">
          Event <span className="text-bitwizz-pink">Corner</span>
        </div>
        <div>
          <Link href="/login" className="text-xl text-bitwizz-pink font-bold">
            Login
          </Link>
          <Link
            href="/register"
            className="text-xl text-bitwizz-pink font-bold"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};
