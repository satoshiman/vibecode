"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Drawer } from "./Drawer";

interface ConceptCardProps {
  title: string;
  purpose: string;
  whyThisMatters: string;
  whatYouNeedToKnow: string[];
  practicalUsage: string[];
  commonMistakes: string[];
  whenToLearnMore: string;
}

export function ConceptCard({ 
  title, 
  purpose,
  whyThisMatters,
  whatYouNeedToKnow,
  practicalUsage,
  commonMistakes,
  whenToLearnMore
}: ConceptCardProps) {
  return (
    <Drawer
      title={title}
      trigger={
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">{title}</CardTitle>
            <p className="text-sm text-muted-foreground">{purpose}</p>
          </CardHeader>
        </Card>
      }
    >
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-2">Why This Matters</h3>
          <p className="text-muted-foreground">{whyThisMatters}</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">What You Need to Know (Minimal)</h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {whatYouNeedToKnow.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Practical Usage</h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {practicalUsage.map((usage, index) => (
              <li key={index}>{usage}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Common Mistakes</h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {commonMistakes.map((mistake, index) => (
              <li key={index}>{mistake}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">When to Learn More</h3>
          <p className="text-muted-foreground">{whenToLearnMore}</p>
        </div>
      </div>
    </Drawer>
  );
}
