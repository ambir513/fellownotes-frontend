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

export function LoginDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Get Started</DialogTrigger>
      <DialogPopup className="sm:max-w-sm">
        <Form className="contents">
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
              <Input placeholder="youremail@example.com" type="email" />
            </Field>
          </DialogPanel>
          <DialogFooter>
            <DialogClose render={<Button variant="ghost" />}>
              Cancel
            </DialogClose>
            <Button type="submit">Sign in</Button>
          </DialogFooter>
        </Form>
      </DialogPopup>
    </Dialog>
  );
}
