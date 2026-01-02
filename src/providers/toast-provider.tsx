import React from "react";
import { AnchoredToastProvider, ToastProvider } from "@/components/ui/toast";

interface ToasterProviderProps {
  children: React.ReactNode;
}
export default function ToasterProvider({ children }: ToasterProviderProps) {
  return (
    <ToastProvider >
      <AnchoredToastProvider>{children}</AnchoredToastProvider>
    </ToastProvider>
  );
}
