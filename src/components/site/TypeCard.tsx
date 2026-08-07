type MaterialType = {
  name: string;
  note?: string;
  image?: string;
  color?: string;
};

export default function TypeCard({ type }: { type: MaterialType }) {
  return (
    <div className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-[#dfe4d6]">
      {type.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={type.image}
          alt={type.name}
          loading="lazy"
          className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
      ) : (
        <div
          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.06]"
          style={{ backgroundColor: type.color }}
        />
      )}
      <div className="absolute right-0 bottom-0 left-0 bg-[linear-gradient(0deg,rgba(31,42,29,0.75),rgba(31,42,29,0))] px-4 py-3.5 text-white">
        <div className="text-sm font-medium">{type.name}</div>
        {type.note && (
          <div className="mt-0.5 text-xs leading-snug text-white/80">
            {type.note}
          </div>
        )}
      </div>
    </div>
  );
}
