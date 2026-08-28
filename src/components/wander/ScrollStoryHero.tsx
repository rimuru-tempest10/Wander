import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { ACTS } from "./acts";
import { ActVideo } from "./ActVideo";
import { Cutout, CutoutText } from "./Cutout";

const PANEL =
  "overflow-hidden rounded-[32px] shadow-sm ring-1 ring-black/5 md:rounded-[40px] bg-wander-blue/25";

function ActCopy({ index }: { index: number }) {
  const act = ACTS[index]!;
  return (
    <div className="-mt-22 flex max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-bold tracking-widest text-wander-dark uppercase">{act.eyebrow}</p>
      <h1 className="mt-5 text-4xl leading-[1.05] font-medium tracking-tight text-wander-dark md:text-5xl lg:text-6xl">
        {act.headline}
      </h1>
      <p className="mt-5 max-w-md text-lg text-wander-text/90 md:text-xl">{act.sub}</p>
      <button className="mt-9 border-2 border-wander-dark px-8 py-3 text-sm font-medium tracking-wide text-wander-dark uppercase transition-colors hover:bg-wander-dark hover:text-wander-bg">
        {act.cta}
      </button>
    </div>
  );
}

function Dots({ active }: { active: number }) {
  return (
    <div className="absolute top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
      {ACTS.map((act, i) => (
        <span
          key={act.id}
          className={`rounded-full transition-all duration-300 ${
            i === active
              ? "h-3 w-3 bg-wander-orange"
              : "h-2.5 w-2.5 border border-wander-dark/40 bg-transparent opacity-60"
          }`}
        />
      ))}
    </div>
  );
}

export function ScrollStoryHero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const travelOpacity = useTransform(scrollYProgress, [0, 0.28, 0.38], [1, 1, 0]);
  const skiOpacity = useTransform(scrollYProgress, [0.28, 0.38, 0.62, 0.72], [0, 1, 1, 0]);
  const campOpacity = useTransform(scrollYProgress, [0.62, 0.72, 1], [0, 1, 1]);
  const opacities = [travelOpacity, skiOpacity, campOpacity];

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = v >= 0.67 ? 2 : v >= 0.33 ? 1 : 0;
    console.log("next", next, "active", active);
    setActive(next);
  });

  return (
    <>
      {/* Desktop: pinned scroll story */}
      <div ref={wrapperRef} className="relative hidden h-[300vh] lg:block">
        <div className={`sticky top-0 h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] ${PANEL}`}>
          {ACTS.map((act, i) => (
            <motion.div key={act.id} style={{ opacity: opacities[i] }} className="absolute inset-0">
              <ActVideo src={act.video} />
            </motion.div>
          ))}

          <div className="absolute inset-0">
            {ACTS.map((act, i) => (
              <motion.div
                key={act.id}
                style={{ opacity: opacities[i] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <ActCopy index={i} />
              </motion.div>
            ))}
          </div>

          <Dots active={active} />

          <Cutout>
            <div className="relative h-11 w-40">
              {ACTS.map((act, i) => (
                <CutoutText key={act.id} category={act.shop} opacity={opacities[i]} absolute />
              ))}
            </div>
          </Cutout>
        </div>
      </div>

      {/* Mobile / tablet: stacked sections */}
      <div className="flex flex-col gap-4 lg:hidden">
        {ACTS.map((act, i) => (
          <section key={act.id} className={`relative h-[calc(100vh-2rem)] ${PANEL}`}>
            <ActVideo src={act.video} playWhenVisible />
            <div className="absolute inset-0 flex items-center justify-center">
              <ActCopy index={i} />
            </div>
            <Cutout>
              <CutoutText category={act.shop} />
            </Cutout>
          </section>
        ))}
      </div>
    </>
  );
}
