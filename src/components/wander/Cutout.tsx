import { ArrowUpRight } from "lucide-react";
import { motion, type MotionValue } from "framer-motion";
import type { ReactNode } from "react";

const CORNER = "radial-gradient(circle at 0 0, transparent 40px, #f3efe8 40px)";

export function Cutout({ children }: { children: ReactNode }) {
  return (
    <div className="absolute right-0 bottom-0 z-30 rounded-tl-[40px] bg-wander-bg pt-8 pr-10 pb-8 pl-10">
      <div
        className="pointer-events-none absolute right-0 bottom-full h-10 w-10"
        style={{ backgroundImage: CORNER }}
      />
      <div
        className="pointer-events-none absolute right-full bottom-0 h-10 w-10"
        style={{ backgroundImage: CORNER }}
      />
      <div className="flex items-center gap-4">
        <div className="text-left leading-tight">{children}</div>
        <button
          aria-label="Shop now"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-black/5 text-wander-dark transition-colors hover:bg-black/10"
        >
          <ArrowUpRight size={20} />
        </button>
      </div>
    </div>
  );
}

export function CutoutText({
  category,
  opacity,
  absolute = false,
}: {
  category: string;
  opacity?: MotionValue<number> | undefined;
  absolute?: boolean;
}) {
  return (
    <motion.div
      {...(opacity ? { style: { opacity } } : {})}
      className={absolute ? "absolute inset-0" : ""}
    >
      <p className="text-lg font-medium text-wander-dark">Shop Now</p>
      <p className="text-sm text-wander-dark/60">Explore {category} ›</p>
    </motion.div>
  );
}
