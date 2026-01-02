import Image from "next/image";
import { Button } from "../ui/button";
import landingData from "@/data/landing.json";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { Badge } from "../ui/badge";

const DATA = landingData.heroSection[0];

export function HeroSection() {
  return (
    <section className="font-sans">
      <div className="flex relative justify-center items-center flex-col gap-12 sm:py-28 py-24">
        <Image
          src={DATA.image[0].src}
          alt={DATA.image[0].alt}
          width={200}
          height={300}
          sizes="(max-width: 640px) 120px, (max-width: 1024px) 160px, 200px"
          className="dark:invert absolute left-0 top-0 w-20 h-auto sm:w-40 lg:w-48"
        />
        <Image
          src={DATA.image[1].src}
          alt={DATA.image[1].alt}
          width={200}
          height={300}
          sizes="(max-width: 640px) 120px, (max-width: 1024px) 160px, 200px"
          className="dark:invert absolute right-0 sm:bottom-0 bottom-0 w-20 h-auto sm:w-40 lg:w-48"
        />
        <Badge
          className="text-xs sm:text-sm sm:w-fit w-xs font-medium p-3.5 tracking-wide"
          variant={"outline"}
        >
          {DATA.Announcement}
        </Badge>
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight md:w-2xl ">
            {DATA.title}
          </h1>
          <p className="text-base md:text-lg md:w-2xl text-muted-foreground">
            {DATA.description}
          </p>
        </div>
        <Button
          size={"icon-lg"}
          className="w-full max-w-xs sm:w-48 text-base sm:text-lg"
        >
          {DATA.ctaText}
          <IconArrowNarrowRight className="h-5 w-5" aria-hidden />
        </Button>
      </div>
    </section>
  );
}
