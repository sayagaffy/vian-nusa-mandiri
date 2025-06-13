"use client";

import { ReactNode } from "react";

interface ScrollButtonProps {
  children: ReactNode;
  className?: string;
  targetId?: string;
}

export function ScrollButton({
  children,
  className = "",
  targetId = "contact",
}: ScrollButtonProps) {
  const handleScrollClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button onClick={handleScrollClick} className={className}>
      {children}
    </button>
  );
}
