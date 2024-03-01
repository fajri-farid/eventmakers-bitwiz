"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const DashHeaderAfter = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  // console.log(user);

  function handleLogOut() {
    // clear localstorage
    localStorage.removeItem("user");
    // clear cookies
    Cookies.remove("token");
    //redirect
    router.push("/");
  }

  useEffect(() => {
    const userFromLs = localStorage.getItem("user");
    const parsedUserData = JSON.parse(userFromLs);
    setUser(parsedUserData);
  }, []);

  return (
    <header>
      <div className="navbar bg-base-100 justify-between px-40 py-10">
        <Link
          href="/dashboard"
          className="font-semibold text-xl text-bitwizz-pink"
        >
          Event<span>Corner</span>
        </Link>
        <div>
          <div className="flex space-x-16 pr-2">
            <Link
              href="/dashboard/my-event"
              className="font-semibold text-slate-500 hover:text-slate-700"
            >
              My Event
            </Link>
            <Link
              href="/dashboard/create-event"
              className="font-semibold text-slate-500 hover:text-slate-700"
            >
              Create Event
            </Link>
            <div className="font-semibold text-bitwizz-pink">{user?.name}</div>
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
                <button onClick={handleLogOut}>logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
