import { useEffect, useRef, useState } from "react";
import { MARQUEE_GIFS } from "../data";

const ROW1 = MARQUEE_GIFS.slice(0, 11);
const ROW2 = MARQUEE_GIFS.slice(11);

function tripled(arr: string[]) {
  return [...arr, ...arr, ...arr];
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const val =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(val);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div
        className="flex gap-3 mb-3"
        style={{ transform: `translateX(${offset - 200}px)`, willChange: "transform" }}
      >
        {tripled(ROW1).map((src, i) => (
          <img
            key={i}
            src={src}
            loading="lazy"
            alt=""
            className="w-[420px] h-[270px] object-cover rounded-2xl flex-shrink-0 bg-[#141414]"
          />
        ))}
      </div>
      <div
        className="flex gap-3"
        style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: "transform" }}
      >
        {tripled(ROW2).map((src, i) => (
          <img
            key={i}
            src={src}
            loading="lazy"
            alt=""
            className="w-[420px] h-[270px] object-cover rounded-2xl flex-shrink-0 bg-[#141414]"
          />
        ))}
      </div>
    </section>
  );
}
