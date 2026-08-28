import { useEffect, useRef } from "react";

export function ActVideo({ src, playWhenVisible = false }: { src: string; playWhenVisible?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.playbackRate = 0.25;
    if (!playWhenVisible) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) void el.play().catch(() => {});
          else el.pause();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [playWhenVisible]);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay={!playWhenVisible}
      loop
      muted
      playsInline
      preload="auto"
      className="video-mask absolute bottom-0 left-1/2 w-full -translate-x-1/2 md:h-full md:w-auto md:max-w-none"
    />
  );
}
