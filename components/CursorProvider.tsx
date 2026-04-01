"use client";

import { useEffect, useRef, useState, createContext, useContext, ReactNode } from "react";

type CursorState = "default" | "hover" | "view";

const CursorContext = createContext<{ setState: (s: CursorState) => void }>({
  setState: () => {},
});

export function useCursor() {
  return useContext(CursorContext);
}

export default function CursorProvider({ children }: { children: ReactNode }) {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<CursorState>("default");

  // Lerp circle position
  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const animate = () => {
      circle.current.x += (mouse.current.x - circle.current.x) * 0.12;
      circle.current.y += (mouse.current.y - circle.current.y) * 0.12;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${circle.current.x - 20}px, ${circle.current.y - 20}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    // Attach hover listeners via delegation
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      const link = target.closest("a, button, [data-cursor]");
      if (link) {
        const cursorType = link.getAttribute("data-cursor");
        setState(cursorType === "view" ? "view" : "hover");
      }
    };
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as Element;
      const link = target.closest("a, button, [data-cursor]");
      if (link) setState("default");
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const isHover = state === "hover";
  const isView = state === "view";

  return (
    <CursorContext.Provider value={{ setState }}>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: isHover || isView ? "transparent" : "#C8FF00",
          transition: "background-color 0.2s ease, opacity 0.2s ease",
        }}
        aria-hidden="true"
      />

      {/* Circle */}
      <div
        ref={circleRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none will-change-transform flex items-center justify-center"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: `1.5px solid ${isHover || isView ? "transparent" : "#C8FF00"}`,
          backgroundColor: isHover ? "#C8FF00" : "transparent",
          transform: `scale(${isHover || isView ? 1.5 : 1})`,
          transition: "transform 0.3s ease, background-color 0.2s ease, border-color 0.2s ease",
        }}
        aria-hidden="true"
      >
        {isView && (
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: 9,
              color: "#C8FF00",
              letterSpacing: "0.1em",
              whiteSpace: "nowrap",
            }}
          >
            VIEW
          </span>
        )}
      </div>

      {children}
    </CursorContext.Provider>
  );
}
