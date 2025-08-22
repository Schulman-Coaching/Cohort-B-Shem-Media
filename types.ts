
import type React from 'react';

export interface Rationale {
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
}

export interface ProgramComponent {
  title: string;
  description: string;
  details: string;
}

export interface CurriculumWeek {
  title: string;
  content: string;
}

export interface FlagshipProgram {
  name: string;
  targetAudience: string;
  facilitator: string;
  duration: string;
  curriculum: CurriculumWeek[];
  outcome: string;
  color: string;
}

export interface MarketingStrategy {
    title: string;
    description: string;
}