"use client";
import Image from "next/image";
import Link from "next/link";
import { LoginDialog } from "../login/login-dialog";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const NAV_LINK = [
  { name: "Pricing", href: "/#pricing", externalLink: false },
  {
    name: "Notes",
    href: "/",
    externalLink: true,
    icon: <ArrowUpRight className="size-2.5" />,
  },
  {
    name: "About",
    href: "/",
    externalLink: true,
    icon: <ArrowUpRight className="size-2.5" />,
  },
];

export function Navbar() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;

      if (window.scrollY > 50) {
        headerRef.current.classList.add(
          "border",
          "bg-blend-saturation",
          "bg-background/90",
          "rounded-full",
          "backdrop-blur-sm"
        );
      } else {
        headerRef.current.classList.remove(
          "border",
          "bg-blend-saturation",
          "bg-background/90",
          "rounded-full",
          "backdrop-blur-sm"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="font-sans mx-auto max-w-6xl p-4 sticky top-0 z-50">
      <div
        ref={headerRef}
        className="flex items-center justify-between px-8 py-2.5 transition-all duration-300"
      >
        <Link href="/">
          <Image
            src="/brand/logo.png"
            alt="Logo"
            width={35}
            height={35}
            priority
          />
        </Link>
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-x-5">
            {NAV_LINK.map((link) => (
              <li key={link.name} className="text-muted-foreground relative">
                <Link href={link.href} className="hover:text-primary">
                  {link.name}
                </Link>
                {link.externalLink && (
                  <span className="absolute top-0 -right-3">{link.icon}</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <LoginDialog />
      </div>
    </header>
  );
}
