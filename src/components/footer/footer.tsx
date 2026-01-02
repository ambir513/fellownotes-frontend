import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
  {
    name: "Contact",
    category: [
      { name: "About", href: "/" },
      { name: "Blog", href: "/" },
      { name: "Contact", href: "/" },
    ],
  },
  {
    name: "Legal",
    category: [
      { name: "Privacy Policy", href: "/" },
      { name: "Terms of Condition", href: "/" },
      { name: "Shipping & Delivery", href: "/" },
      { name: "Cancellation & Refund Policy", href: "/" },
    ],
  },
  {
    name: "Social",
    category: [
      { name: "Twitter", href: "/" },
      { name: "Github", href: "/" },
      { name: "LinkedIn", href: "/" },
      { name: "Email", href: "/" },
    ],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="w-full border-t font-sans">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold sm:text-3xl">Fellow Notes</h1>
            <p className="text-sm text-muted-foreground">
              Notes for Fellows, by Fellows
            </p>

            <div className="flex gap-3 items-center">
              <Image
                src="/brand/amarbiradar.jpeg"
                alt="Fellow Notes Logo"
                width={32}
                height={32}
                className="rounded-full"
                priority
              />
              <p className="text-sm font-mono text-muted-foreground">
                Cooked by AmBir
              </p>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {FOOTER_LINKS.map((group) => (
                <li key={group.name} className="flex flex-col space-y-3">
                  <h2 className="text-base font-semibold">{group.name}</h2>

                  <ul className="space-y-2">
                    {group.category.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="block text-sm text-muted-foreground transition hover:text-primary"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t pt-5 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>{`© ${CURRENT_YEAR} Fellow Notes. All rights reserved.`}</p>
          <p>Built with ❤️ by AmBir</p>
        </div>
      </div>
    </footer>
  );
}
