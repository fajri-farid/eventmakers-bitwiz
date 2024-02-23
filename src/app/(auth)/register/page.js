import { BackToDasboard } from "@/components/auth/login/back";
import { Register } from "@/components/auth/register/register";
import React from "react";

export default function page() {
  return (
    <div className="m-10 p-10">
      <div><BackToDasboard/></div>
      <div>
        <Register />
      </div>
    </div>
  );
}
