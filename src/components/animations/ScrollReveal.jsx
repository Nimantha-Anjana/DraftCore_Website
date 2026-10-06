import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ children, as: Tag = "div", delay = 0, className = "" }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`rv ${seen ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
