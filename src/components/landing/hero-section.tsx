import Image from "next/image";
import { Button } from "../ui/button";
import data from "@/data/landing/hero-sectino.json";
import { IconArrowNarrowRight } from "@tabler/icons-react";

export function HeroSection() {
  return (
    <section className="font-sans h-screen">
      <div className="flex relative justify-center items-center flex-col gap-12 pb-18 pt-18">
        <Image
          src={data.image[0].src}
          alt={data.image[0].alt}
          width={200}
          height={300}
          sizes="(max-width: 640px) 120px, (max-width: 1024px) 160px, 200px"
          className="dark:invert absolute left-0 top-0 w-20 h-auto sm:w-40 lg:w-48"
        />
        <Image
          src={data.image[1].src}
          alt={data.image[1].alt}
          width={200}
          height={300}
          sizes="(max-width: 640px) 120px, (max-width: 1024px) 160px, 200px"
          className="dark:invert absolute right-0 sm:bottom-0 bottom-0 w-20 h-auto sm:w-40 lg:w-48"
        />
        <p className="text-xs sm:text-sm font-medium tracking-wide ">
          {data.Announcement}
        </p>
        <div className="space-y-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight sm:w-2xl ">
            {data.title}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            {data.subtitle}
          </p>
        </div>
        <Button
          size={"icon-lg"}
          className="w-full max-w-xs sm:w-48 text-base sm:text-lg"
        >
          {data.ctaText}
          <IconArrowNarrowRight className="h-5 w-5" aria-hidden />
        </Button>
      </div>
    </section>
  );
}
