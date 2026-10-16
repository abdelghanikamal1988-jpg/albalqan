import { asset } from "@/lib/asset";

import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

function Strip({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt="Partner organizations"
      width={8582}
      height={186}
      sizes="100vw"
      className="h-14 w-auto shrink-0 md:h-16"
    />
  );
}

function Row({ src, dir }: { src: string; dir: "l" | "r" }) {
  return (
    <div className="overflow-hidden" aria-hidden>
      <div className={`marquee marquee-${dir}`}>
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0">
            <Strip src={src} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-black bg-cover bg-center bg-no-repeat py-20 text-white md:bg-fixed md:py-28"
      style={{
        backgroundImage: `url(${asset("/assets/partners-wheel.jpg")})`,
      }}
    >
      <div className="absolute inset-0 bg-black/70" aria-hidden />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading
          label="Our Partners"
          title="Entities & Organizations We Work With."
          light
        />
      </div>

      <div className="relative mt-20 md:mt-24">
        <Row src={asset("/assets/partners-row1.png")} dir="l" />
      </div>
    </section>
  );
}
