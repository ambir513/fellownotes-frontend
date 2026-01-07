"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toastManager } from "../ui/toast";

export function VerifyEmail({ token }: { token: string }) {
  const Route = useRouter();
  useEffect(() => {
    const verifyToken = async (token: string) => {
      const result = await axios.get(
        `${process.env
          .NEXT_PUBLIC_BACKEND_URL!}/auth/verify-email?token=${token}`,
        { withCredentials: true }
      );
      if (result.data.success) {
        Route.push("/");
        toastManager.add({
          title: "Email verified successfully!",
          type: "success",
        });
      }
    };
    verifyToken(token);
  }, [token]);

  return <div>VerifyEmail</div>;
}
