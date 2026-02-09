"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Drawer } from "./Drawer";

interface MilestoneProps {
  number: number;
  title: string;
  goal: string;
  objective: string;
  whatYouWillBuild: string[];
  toolsUsed: string[];
  stepByStepTasks: string[];
  expectedOutcome: string;
  nextMilestoneTrigger: string;
}

export function Milestone({ 
  number, 
  title, 
  goal,
  objective,
  whatYouWillBuild,
  toolsUsed,
  stepByStepTasks,
  expectedOutcome,
  nextMilestoneTrigger
}: MilestoneProps) {
  return (
    <Drawer
      title={`Milestone ${number}: ${title}`}
      trigger={
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">Milestone {number}</Badge>
              <CardTitle className="text-lg">{title}</CardTitle>
            </div>
            <p className="text-sm text-muted-foreground mt-2">{goal}</p>
          </CardHeader>
        </Card>
      }
    >
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-2">Objective</h3>
          <p className="text-muted-foreground">{objective}</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">What You Will Build</h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {whatYouWillBuild.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Tools Used</h3>
          <div className="flex flex-wrap gap-2">
            {toolsUsed.map((tool, index) => (
              <Badge key={index} variant="outline">{tool}</Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Step-by-Step Tasks</h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {stepByStepTasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Expected Outcome</h3>
          <p className="text-muted-foreground">{expectedOutcome}</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Next Milestone Trigger</h3>
          <p className="text-muted-foreground">{nextMilestoneTrigger}</p>
        </div>
      </div>
    </Drawer>
  );
}
