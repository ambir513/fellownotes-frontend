"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { setCookies } from "@/utils/set-cookies";
import { useMutation } from "@tanstack/react-query";
import { Activity, useEffect, useState } from "react";
import { toastManager } from "../ui/toast";
import { signIn } from "@/utils/sign-in";
import { LogOut, Undo2 } from "lucide-react";
import { getCookies } from "@/utils/get-cookies";
import { useRouter } from "next/navigation";

const isDevMode = process.env.NODE_ENV === "development" ? false : true;

export function LoginDialog() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState<boolean>(false);
  const Route = useRouter();

  const loginMutation = useMutation({
    mutationFn: async (email: string) => signIn(email),
  });

  useEffect(() => {
    async function getToken() {
      const token = await getCookies();
      setToken(token);
    }
    getToken();
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    loginMutation.mutate(email, {
      onSuccess: (data) => {
        setIsLoading(false);

        if (isDevMode) {
          setCookies(data.data.url).then(() => {
            toastManager.add({
              title: "Login Successful",
              description: data.data.message,
              type: "success",
            });
          });
          setOpen(false);
          Route.push("/dashboard");
        } else {
          setOpen(false);
          toastManager.add({
            title: "Success",
            description: "Login link sent to your email.",
            type: "success",
          });
        }
      },

      onError: (error: any) => {
        setIsLoading(false);
        setMessage(
          error?.response?.data?.message ||
            "An unknown error occurred during login."
        );
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button />}>Get Started</DialogTrigger>
      <DialogPopup className="sm:max-w-sm">
        <Activity mode={token ? "visible" : "hidden"}>
          <DialogHeader>
            <DialogTitle className="font-semibold">
              Your are already Logged In
            </DialogTitle>
            <DialogDescription>
              Please sign out to switch accounts.
            </DialogDescription>
          </DialogHeader>
          <DialogPanel className="grid gap-4"></DialogPanel>
          <DialogFooter>
            <Button>
              <Undo2 />
              Back to Dashboard
            </Button>
            <Button variant={"destructive-outline"}>
              <LogOut />
              Logout
            </Button>
          </DialogFooter>
        </Activity>
        <Activity mode={token ? "hidden" : "visible"}>
          <Form className="contents" onSubmit={handleLogin}>
            <DialogHeader>
              <DialogTitle className="font-semibold">
                Welcome to Fellow Notes
              </DialogTitle>
              <DialogDescription>
                Please sign in to get started.
              </DialogDescription>
            </DialogHeader>
            <DialogPanel className="grid gap-4">
              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input
                  placeholder="youremail@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setMessage("");
                  }}
                />
                {message && (
                  <p className="mt-1 text-sm text-destructive">{message}</p>
                )}
              </Field>
            </DialogPanel>
            <DialogFooter>
              <DialogClose render={<Button variant="ghost" />}>
                Cancel
              </DialogClose>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </DialogFooter>
          </Form>
        </Activity>
      </DialogPopup>
    </Dialog>
  );
}
