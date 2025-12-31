import Image from "next/image";
import Link from "next/link";
import { LoginAlertDialog } from "../login/login-alert-dialog";

const NAV_LINK = [
  { name: "About", href: "/" },
  { name: "Notes", href: "/" },
  { name: "Pricing", href: "/" },
];

export function Navbar() {
  return (
    <header className="font-sans mx-auto max-w-6xl p-4 sticky top-0 z-50">
      <div className="flex items-center justify-between px-8 py-2.5 border bg-blend-saturation bg-background/90  rounded-full backdrop-blur-sm">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={35} height={35} priority />
        </Link>
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-x-5">
            {NAV_LINK.map((link) => (
              <li
                key={link.name}
                className="hover:text-primary text-muted-foreground"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <LoginAlertDialog>
          <p className="rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/80">
            Get Started
          </p>
        </LoginAlertDialog>
      </div>
    </header>
  );
}
