"use client";

import { useEffect, useRef } from "react";
import { Phone, Play } from "lucide-react";
import { HERO_VIDEO_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site-data";

const MAX_WIDTH = 960;

type VideoWithFrameCallback = HTMLVideoElement & {
  requestVideoFrameCallback: (cb: () => void) => number;
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const frames: HTMLCanvasElement[] = [];
    let capturing = true;
    let lastTime = -1;
    let rafId = 0;
    let playRaf = 0;

    const captureFrame = () => {
      if (!capturing || video.readyState < 2) return;
      if (video.currentTime === lastTime) return;
      lastTime = video.currentTime;
      const vw = video.videoWidth;
      const vh = video.videoHeight;
      if (!vw || !vh) return;
      const scale = Math.min(1, MAX_WIDTH / vw);
      const w = Math.round(vw * scale);
      const h = Math.round(vh * scale);
      const c = document.createElement("canvas");
      c.width = w;
      c.height = h;
      const ctx = c.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(video, 0, 0, w, h);
      frames.push(c);
    };

    const vfcVideo = video as VideoWithFrameCallback;
    const hasVFC = typeof vfcVideo.requestVideoFrameCallback === "function";
    const rafLoop = () => {
      captureFrame();
      if (capturing) rafId = requestAnimationFrame(rafLoop);
    };
    const vfcLoop = () => {
      captureFrame();
      if (capturing) vfcVideo.requestVideoFrameCallback(vfcLoop);
    };

    const playForward = () => {
      if (frames.length === 0) return;
      capturing = false;
      cancelAnimationFrame(rafId);
      video.style.display = "none";
      canvas.style.display = "block";
      const first = frames[0];
      canvas.width = first.width;
      canvas.height = first.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      let index = 0;
      let direction = 1;
      let last = performance.now();
      const interval = 1000 / 30;
      const render = (now: number) => {
        if (now - last >= interval) {
          last = now;
          ctx.drawImage(frames[index], 0, 0);
          index += direction;
          if (index >= frames.length - 1) {
            index = frames.length - 1;
            direction = -1;
          } else if (index <= 0) {
            index = 0;
            direction = 1;
          }
        }
        playRaf = requestAnimationFrame(render);
      };
      playRaf = requestAnimationFrame(render);
    };

    const onEnded = () => playForward();
    const onLoaded = () => {
      video.play().catch(() => {});
      if (hasVFC) vfcVideo.requestVideoFrameCallback(vfcLoop);
      else rafId = requestAnimationFrame(rafLoop);
    };

    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("ended", onEnded);
    if (video.readyState >= 1) onLoaded();

    const safety = setInterval(() => {
      if (frames.length > 40 && video.currentTime > 1.5) {
        clearInterval(safety);
        playForward();
      }
    }, 500);

    return () => {
      capturing = false;
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(playRaf);
      clearInterval(safety);
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col overflow-hidden"
    >
      <div className="absolute inset-0 h-full w-full">
        <video
          ref={videoRef}
          src={HERO_VIDEO_URL}
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          className="block h-full w-full object-cover"
        />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 hidden h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,241,233,0.35)_0%,rgba(244,241,233,0)_25%,rgba(31,42,29,0.15)_78%,rgba(31,42,29,0.42)_100%)]" />
      </div>

      {/* HERO COPY */}
      <div className="relative z-10 flex flex-1 flex-col items-center px-6 pt-32 text-center">
        <h1 className="m-0 max-w-[1000px] text-[clamp(2.1rem,6vw,5.25rem)] leading-[0.98] font-normal tracking-[-0.035em] text-[#336443] text-balance">
          Your South Florida{" "}
          <span className="text-[#85ab8b]">
            landscape<br className="hidden sm:block" /> supply yard
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-[520px] text-[clamp(0.95rem,1.6vw,1.15rem)] leading-relaxed text-[#4b5b47]">
          Pro-grade plants, flowers, mulch, and bulk materials from a team
          that uses them on the job every day. Open to everyone.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          <a
            href="#contact"
            className="rounded-full bg-[#1f2a1d] px-7 py-3.5 text-[15px] font-medium text-white shadow-[0_6px_18px_rgba(31,42,29,0.18)] transition-colors hover:bg-[#2a3827]"
          >
            Visit the Yard
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-2 rounded-full border border-white/60 bg-white/75 px-6 py-3.5 text-[15px] font-medium text-[#1f2a1d] backdrop-blur-md transition-colors hover:bg-white/95"
          >
            <Phone size={16} />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* BOTTOM-LEFT BLOCK */}
      <div className="relative z-10 mt-auto max-w-[400px] px-6 pb-7">
        <div className="mb-3 flex items-center gap-2 text-white">
          <Leaf2 />
          <span className="text-sm font-semibold">
            Grown &amp; Sourced Locally
          </span>
        </div>
        <p className="mb-5.5 max-w-[320px] text-[13px] leading-relaxed text-white/90">
          We stock the same pro-grade plants, mulch, and materials our own
          crew trusts on the job — ready for pickup or delivery across Palm
          Beach County.
        </p>
        <div className="flex flex-wrap items-center gap-4.5">
          <a
            href="#products"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1f2a1d] shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-colors hover:bg-white/90"
          >
            Browse Products
          </a>
          <a
            href="#how"
            className="text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            Know More.
          </a>
        </div>
      </div>

      {/* BOTTOM-RIGHT */}
      <a
        href="#about"
        className="absolute right-6 bottom-7 z-10 hidden items-center gap-2 text-sm text-white/90 sm:flex"
      >
        <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
          <Play size={12} fill="#fff" stroke="none" />
        </span>
        <span className="font-medium">Our story</span>
        <span className="text-white/60">20+ yrs</span>
      </a>
    </section>
  );
}

function Leaf2() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}
