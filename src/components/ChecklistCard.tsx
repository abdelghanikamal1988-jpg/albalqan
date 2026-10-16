import Reveal from "@/components/Reveal";

export default function ChecklistCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <Reveal className="h-full">
      <div className="flex h-full flex-col rounded-xl border border-black/10 bg-mist p-7 md:p-8">
        <h2 className="text-[11px] font-medium uppercase tracking-[0.25em] text-ash">
          {title}
        </h2>
        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-3.5 text-[14px] font-light leading-relaxed text-ink"
            >
              <svg
                aria-hidden
                viewBox="0 0 16 16"
                className="mt-1 h-4 w-4 shrink-0 text-black/35"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M3 8.5l3.2 3.2L13 5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="min-w-0 break-words">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
