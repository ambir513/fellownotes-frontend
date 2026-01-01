import {
  FileUser,
  Image,
  MessageCircle,
  Network,
  Sparkles,
  User,
  UserPen,
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import landingData from "@/data/landing.json";

const DATA = landingData.benefitsSection;

export function BenefitsSection() {
  return (
    <section>
      <div className="">
        <h2>{DATA.title}</h2>
        <p>{DATA.description}</p>
      </div>
      <div className="flex gap-4">
        {DATA.cards.map((card) => (
          <Card className="w-fit" key={card.id}>
            <CardHeader>
              <User />
            </CardHeader>
            <CardContent>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
