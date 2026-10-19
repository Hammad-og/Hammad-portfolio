import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

function Char({
  progress,
  range,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  children: string;
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const display = children === " " ? "\u00A0" : children;
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span style={{ opacity: 0.2 }}>{display}</span>
      <motion.span style={{ opacity, position: "absolute", left: 0, top: 0 }}>
        {display}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const chars = text.split("");
  return (
    <p ref={ref} className={className}>
      {chars.map((c, i) => (
        <Char
          key={i}
          progress={scrollYProgress}
          range={[i / chars.length, (i + 1) / chars.length]}
        >
          {c}
        </Char>
      ))}
    </p>
  );
}
