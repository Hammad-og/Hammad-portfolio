import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "../components/FadeIn";
import LiveProjectButton from "../components/LiveProjectButton";
import { PROJECTS, type Project } from "../data";

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: Project;
  index: number;
  totalCards: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[85vh]">
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className="sticky top-24 md:top-32 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
      >
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-5 sm:mb-8">
          <span
            className="font-black text-[#D7E2EA] leading-none"
            style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex-1 min-w-[160px]">
            <div className="text-[#D7E2EA] uppercase tracking-widest text-xs md:text-sm mb-1 opacity-60">
              {project.category}
            </div>
            <div
              className="hero-heading font-black uppercase leading-none"
              style={{ fontSize: "clamp(1.4rem, 4vw, 3rem)" }}
            >
              {project.name}
            </div>
          </div>
          <LiveProjectButton href={project.liveUrl} />
        </div>

        <div className="flex gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: "40%" }}>
            <img
              src={project.imgA}
              alt={`${project.name} preview`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={project.imgB}
              alt={`${project.name} preview`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <div style={{ width: "60%" }}>
            <img
              src={project.imgMain}
              alt={`${project.name} preview`}
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-20"
    >
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} totalCards={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}
