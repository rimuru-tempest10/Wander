import camping from "@/assets/travel_camping_bg_video.mp4";
import hike from "@/assets/travel_hike_bg_video.mp4";
import skiing from "@/assets/travel_skiing_bg_video.mp4";

export type Act = {
  id: string;
  video: string;
  eyebrow: string;
  headline: string;
  sub: string;
  cta: string;
  shop: string;
};

export const ACTS: Act[] = [
  {
    id: "travel",
    video: hike,
    eyebrow: "Gear for every journey",
    headline: "Wander further, pack lighter.",
    sub: "Featherweight kit built for long roads, longer trails and the detours in between.",
    cta: "Explore Travel Gear",
    shop: "Travel",
  },
  {
    id: "ski",
    video: skiing,
    eyebrow: "Every descent counts",
    headline: "Chase the line down.",
    sub: "Insulated layers and hardware tuned for cold mornings and fast, quiet descents.",
    cta: "Explore Ski Gear",
    shop: "Ski",
  },
  {
    id: "camp",
    video: camping,
    eyebrow: "Wherever you land",
    headline: "Basecamp, made simple.",
    sub: "Shelter, warmth and light that pack down small and set up in minutes.",
    cta: "Explore Camping Gear",
    shop: "Camping",
  },
];
