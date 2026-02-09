"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Drawer } from "./Drawer";

interface SetupStepCardProps {
  title: string;
  goal: string;
  requiredActions: string[];
  helpfulLinks: { text: string; url: string }[];
  validationChecklist: string[];
}

export function SetupStepCard({
  title,
  goal,
  requiredActions,
  helpfulLinks,
  validationChecklist,
}: SetupStepCardProps) {
  return (
    <Drawer
      title={title}
      trigger={
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">{title}</CardTitle>
          </CardHeader>
        </Card>
      }
    >
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-2">Goal</h3>
          <p className="text-muted-foreground">{goal}</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Required Actions</h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {requiredActions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Helpful Links</h3>
          <ul className="space-y-1">
            {helpfulLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Validation Checklist</h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {validationChecklist.map((item, index) => (
              <li key={index}>
                <code className="bg-muted px-1 rounded">{item}</code>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Drawer>
  );
}
