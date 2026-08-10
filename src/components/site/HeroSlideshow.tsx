"use client";

import { useEffect, useState } from "react";

const heroImages = [
  { src: "/hero/plants.jpg", alt: "Raised garden beds with fresh plants" },
  { src: "/hero/flowers.jpg", alt: "Colorful flower garden in bloom" },
  { src: "/hero/aggregate.jpg", alt: "River rock landscape bed" },
];

const SLIDE_MS = 5000;
const TRANSITION_MS = 1100;

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [instant, setInstant] = useState(false);
  // A trailing duplicate of the first slide lets the track always advance
  // rightward-to-leftward; once it's shown we snap back to the real first
  // slide with transitions off so the loop point is invisible.
  const track = [...heroImages, heroImages[0]];

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => i + 1), SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (index !== heroImages.length) return;
    const t = setTimeout(() => {
      setInstant(true);
      setIndex(0);
    }, TRANSITION_MS);
    return () => clearTimeout(t);
  }, [index]);

  useEffect(() => {
    if (!instant) return;
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setInstant(false));
      return () => cancelAnimationFrame(raf2);
    });
    return () => cancelAnimationFrame(raf1);
  }, [instant]);

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      {track.map((img, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            transform: `translateX(${(i - index) * 100}%)`,
            transition: instant
              ? "none"
              : `transform ${TRANSITION_MS}ms ease-in-out`,
          }}
        />
      ))}
    </div>
  );
}
