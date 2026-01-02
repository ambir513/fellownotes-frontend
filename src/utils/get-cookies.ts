"use server";
import { cookies } from "next/headers";

export const getCookies = async () => {
  const tokenValue = (await cookies()).get("token")?.value;

  if (!tokenValue) {
    return false;
  } else {
    return true;
  }
};
