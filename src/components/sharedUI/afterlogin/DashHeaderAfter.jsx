"use client";

import Link from "next/link";

export const DashHeaderAfter = () => {
  return (
    <header>
      <div className="navbar bg-base-100 justify-between px-40 py-10">
        <Link href={""} className="font-semibold text-xl text-bitwizz-pink">
          Event<span>Corner</span>
        </Link>
        <div>
          <div className="flex space-x-16 pr-2">
            <Link
              href={""}
              className="font-semibold text-slate-500 hover:text-slate-700"
            >
              My Event
            </Link>
            <Link
              href={""}
              className="font-semibold text-slate-500 hover:text-slate-700"
            >
              Create Event
            </Link>
            <div className="font-semibold text-bitwizz-pink">Username</div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="avatar"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">My Event</a>
              </li>
              <li>
                <a>Joined Event</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
