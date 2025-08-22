
import type React from 'react';
import type { Rationale, ProgramComponent, FlagshipProgram, MarketingStrategy } from './types';
import { LightbulbIcon, UsersIcon, DollarSignIcon, ShieldCheckIcon, RefreshCwIcon, VideoIcon, MessageSquareIcon, FolderKanbanIcon, TargetIcon, NewspaperIcon, MicVocalIcon, MailIcon, StarIcon } from './components/icons/Icons';

export const RATIONALE_POINTS: Rationale[] = [
  {
    title: "From Content to Connection",
    description: "Shift from passive consumption to active participation in a structured learning journey, fostering deep brand loyalty.",
    icon: UsersIcon,
  },
  {
    title: "High-Margin Revenue",
    description: "Cohort-based courses are high-ticket items, creating a new, direct-to-consumer revenue stream with high profit potential.",
    icon: DollarSignIcon,
  },
  {
    title: "Reinforcing Authority",
    description: "Feature experts and community leaders as facilitators to reinforce the brand's position as the central authority in its niche.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Content Flywheel",
    description: "Discussions and insights from cohorts become a rich source of ideas for future content, creating a self-reinforcing value loop.",
    icon: RefreshCwIcon,
  },
];

export const PROGRAM_COMPONENTS: ProgramComponent[] = [
  {
    title: "Weekly Live Sessions",
    description: "60-90 mins",
    details: "The anchor points of the program, featuring a mix of expert-led instruction, group discussion, and Q&A.",
  },
  {
    title: "Peer Mastermind Pods",
    description: "4-6 people",
    details: "Small breakout groups for discussing challenges, providing feedback, and fostering accountability. Where deep connections are formed.",
  },
  {
    title: "Dedicated Digital Classroom",
    description: "Private Online Space",
    details: "A hub (e.g., Circle, Slack) for accessing materials, continuing discussions, and interacting with facilitators between sessions.",
  },
  {
    title: "Action-Oriented Projects",
    description: "Tangible Outcomes",
    details: "Each cohort is built around a tangible outcome, like a business plan, parenting strategy, or a polished article.",
  },
];

export const FLAGSHIP_PROGRAMS: FlagshipProgram[] = [
  {
    name: "Business Growth Mastermind",
    targetAudience: "Entrepreneurs and small business owners within the community.",
    facilitator: "A successful CEO or respected business columnist.",
    duration: "8 Weeks",
    curriculum: [
      { title: "Week 1-2", content: "Value Proposition & Marketing to the Orthodox Consumer." },
      { title: "Week 3-4", content: "Financial Management & Scaling with Community Values." },
      { title: "Week 5-6", content: "Building a Team & Navigating Halachic Business Ethics." },
      { title: "Week 7-8", content: "Pitching for Growth & Final Project Presentations." },
    ],
    outcome: "A finalized strategic growth plan for each participant's business.",
    color: "sky",
  },
  {
    name: "Effective Parenting Workshop",
    targetAudience: "Parents seeking guidance on raising children in the modern world.",
    facilitator: "A well-known community educator, therapist, or lead writer.",
    duration: "6 Weeks",
    curriculum: [
      { title: "Week 1-2", content: "Foundations of Chinuch & Instilling Core Values." },
      { title: "Week 3-4", content: "Navigating Technology & The 'Outside World'." },
      { title: "Week 5-6", content: "Effective Communication & Building Resilient Children." },
    ],
    outcome: "A personalized 'Family Mission Statement' and a toolkit of practical parenting strategies.",
    color: "violet",
  },
  {
    name: "Aspiring Writers' Circle",
    targetAudience: "Community members who dream of being published in the magazine.",
    facilitator: "A senior editor or a beloved, long-time columnist.",
    duration: "4 Weeks",
    curriculum: [
      { title: "Week 1", content: "Finding Your Voice & Crafting a Compelling Narrative." },
      { title: "Week 2", content: "The Art of the Pitch: How to Get an Editor's Attention." },
      { title: "Week 3", content: "Workshop Session: Peer & Editor Feedback on Drafts." },
      { title: "Week 4", content: "Polishing & Submission." },
    ],
    outcome: "A completed, professionally-edited article ready for submission, serving as a talent pipeline.",
    color: "emerald",
  },
];

export const MARKETING_STRATEGIES: MarketingStrategy[] = [
    { title: "Full-page Print Ads", description: "Utilize the print magazine for high-visibility promotions." },
    { title: "Podcast Sponsorships", description: "Feature sponsored segments in relevant podcasts to reach an engaged audience." },
    { title: "Targeted Email Campaigns", description: "Leverage the subscriber list for direct and personalized marketing." },
    { title: "Content Marketing", description: "Publish articles and interviews featuring facilitators to build authority and interest." },
];

export const MARKETING_ICONS: { [key: string]: React.FC<{ className?: string }> } = {
    "Full-page Print Ads": NewspaperIcon,
    "Podcast Sponsorships": MicVocalIcon,
    "Targeted Email Campaigns": MailIcon,
    "Content Marketing": StarIcon,
};