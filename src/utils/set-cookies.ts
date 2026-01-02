"use server";
import { cookies } from "next/headers";

export const setCookies = async (token: string) => {
  (await cookies()).set("token", token, {
    httpOnly: true,
    path: "/",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  });
};
