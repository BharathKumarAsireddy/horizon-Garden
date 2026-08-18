export default function HeroVideo() {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      src="/hero/home.mp4"
      poster="/hero/home-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}
