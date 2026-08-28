import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/wander/Nav";
import { ScrollStoryHero } from "@/components/wander/ScrollStoryHero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wander — Gear for Every Journey" },
      {
        name: "description",
        content:
          "Wander makes featherweight travel, ski and camping gear built for long roads, fast descents and simple basecamps.",
      },
      { property: "og:title", content: "Wander — Gear for Every Journey" },
      {
        property: "og:description",
        content:
          "Featherweight travel, ski and camping gear built for long roads, fast descents and simple basecamps.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-wander-bg p-4 md:p-6">
      <Nav />
      <main className="w-full max-w-[1600px]">
        <ScrollStoryHero />
      </main>
    </div>
  );
}
