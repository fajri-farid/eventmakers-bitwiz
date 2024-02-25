"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="space-y-10 md:space-y-0 md:flex justify-evenly pb-[45px] px-10">
        <div>
          <div className="text-bitwizz-pink pb-[15px] text-5xl">
            Event<span className="text-bitwizz-blue">Corner</span>
          </div>
          <div className="font-light">Create an event so easy and fun</div>
        </div>
        <div className="space-y-5 md:space-y-0 md:flex w-[800px] justify-evenly">
          <div>
            <div className="font-semibold pb-[15px]">For Eveners</div>
            <div>
              <Link href={""} className="font-light">
                New Account
              </Link>
            </div>
            <div>
              <Link href={""} className="font-light">
                Create an Event
              </Link>
            </div>
          </div>
          <div>
            <div className="font-semibold pb-[15px]">Explore Us</div>
            <div>
              <Link href={""} className="font-light">
                About
              </Link>
            </div>
            <div>
              <Link href={""} className="font-light">
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link href={""} className="font-light">
                Term & Conditions
              </Link>
            </div>
          </div>
          <div>
            <div className="font-semibold pb-[15px] ">Connect Us</div>
            <div>
              <Link href={""} className="font-light">
                support@eventcorner.com
              </Link>
            </div>
            <div>
              <Link href={""} className="font-light">
                265-2204-1406
              </Link>
            </div>
            <div className="font-light">EventCorner.Inc,Bandung</div>
          </div>
        </div>
      </div>
      <div className="w-fit m-auto">
        <div>Copyright 2024 • All rights reserved • EventCorner</div>
      </div>
    </footer>
  );
};
