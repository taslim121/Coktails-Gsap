"use client";

import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

// Register GSAP plugins immediately when module loads
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function GSAPProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
