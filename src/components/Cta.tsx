import Link from "next/link";
import Reveal from "@/components/Reveal";

type CtaProps = {
  label?: string;
  title?: string;
  text?: string;
  cta?: string;
  href?: string;
};

export default function Cta({
  label = "Next Step",
  title = "Ready to Start Your File?",
  text = "Submit your profile for an eligibility review within 24 business hours — no obligation, full discretion.",
  cta = "Book Consultation",
  href = "/contact",
}: CtaProps) {
  return (
    <section className="bg-white px-5 pb-24 pt-4 md:px-10 md:pb-28">
      <Reveal className="mx-auto max-w-[1440px]">
        <div className="relative overflow-hidden rounded-2xl bg-ink px-6 py-14 text-center md:px-16 md:py-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/45">
            {label}
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-tight tracking-tight text-white sm:text-4xl lg:text-[44px]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[13.5px] font-light leading-relaxed text-white/60">
            {text}
          </p>
          <Link
            href={href}
            className="group relative mt-9 inline-block w-full overflow-hidden border border-white px-10 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-white sm:w-auto"
          >
            <span className="relative z-10 transition-colors duration-400 group-hover:text-ink">
              {cta}
            </span>
            <span className="absolute inset-0 -translate-y-full bg-white transition-transform duration-400 ease-out group-hover:translate-y-0" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
