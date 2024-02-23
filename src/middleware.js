import { NextResponse } from "next/server";
import * as jose from "jose";
import { cookies } from "next/headers";
import { SECRET_KEY } from "./config/secretKey";

export async function middleware(request) {
  const token = cookies().get("token")?.value;
  const secretKey = SECRET_KEY; // string
  const secret = new TextEncoder().encode(secretKey); // Uint8array

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  try {
    await jose.jwtVerify(token, secret); //Uint8array
    return NextResponse.next(); // klw berhasil dia akan di next
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/dashboard"],
};

