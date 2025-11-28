"use client";
import "../styles/globals.css";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // 👆 Track cursor movement
    const addMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    document.addEventListener("mousemove", addMousePosition);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    // 👆 Parallax scroll for stars
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty("--scroll1", `${scrollY * 0.2}px`);
      document.documentElement.style.setProperty("--scroll2", `${scrollY * 0.4}px`);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", addMousePosition);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-hidden">
        {/* 🌌 Parallax Stars */}
        <div className="stars-wrapper">
          <div className="stars-layer layer1"></div>
          <div className="stars-layer layer2"></div>
        </div>

        {/* Page Content */}
        {children}

        {/* ✨ Custom Cursor */}
        <div
          className={`custom-cursor ${hovering ? "hovering" : ""}`}
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
      </body>
    </html>
  );
}
