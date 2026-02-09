"use client";

import { Milestone } from "./Milestone";

interface TimelineProps {
  milestones: Array<{
    number: number;
    title: string;
    goal: string;
    objective: string;
    whatYouWillBuild: string[];
    toolsUsed: string[];
    stepByStepTasks: string[];
    expectedOutcome: string;
    nextMilestoneTrigger: string;
  }>;
}

export function Timeline({ milestones }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
      
      {/* Timeline items */}
      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative flex items-start space-x-4">
            {/* Timeline dot */}
            <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-border bg-background">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
            </div>
            
            {/* Milestone content */}
            <div className="flex-1 pt-1">
              <Milestone {...milestone} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
