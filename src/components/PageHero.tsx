import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

type PageHeroProps = {
  label: string;
  title: string;
  text: string;
  image: string;
  cta?: { label: string; href: string };
};

export default function PageHero({ label, title, text, image, cta }: PageHeroProps) {
  return (
    <section id="top" className="relative overflow-hidden bg-ink">
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        priority
        className="object-cover object-center opacity-40"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/65 to-ink"
      />
      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col justify-end px-5 pb-14 pt-36 md:px-10 md:pb-16 md:pt-44">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/45">
            {label}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-5 max-w-4xl font-display text-[38px] leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[72px]">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-[14px] font-light leading-relaxed text-white/60 md:text-[15px]">
            {text}
          </p>
        </Reveal>
        {cta && (
          <Reveal delay={300}>
            <Link
              href={cta.href}
              className="mt-8 inline-flex min-h-[44px] w-full items-center justify-center border border-white px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-white hover:text-ink sm:w-auto"
            >
              {cta.label}
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
