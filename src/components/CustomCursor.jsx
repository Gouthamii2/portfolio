"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const addMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // detect hover on links/buttons
    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    document.addEventListener("mousemove", addMousePosition);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", addMousePosition);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hovering ? "hovering" : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}
