"use client"

import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlowingShadowProps {
  children: ReactNode
  className?: string
}

export function GlowingShadow({ children, className }: GlowingShadowProps) {
  return (
    <>
      <style>{`
        @property --hue {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --rotate {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --bg-y {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --bg-x {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --glow-translate-y {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --bg-size {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --glow-opacity {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --glow-blur {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --glow-scale {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --glow-radius {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --white-shadow {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }

        .glow-container {
          --card-color: hsl(var(--background));
          --text-color: hsl(var(--muted-foreground));
          --card-radius: 2rem;
          --card-width: 480px;
          --border-width: 2px;
          --bg-size: 1;
          --hue: 0;
          --hue-speed: 1;
          --rotate: 0;
          --animation-speed: 6s;
          --interaction-speed: 0.6s;
          --glow-scale: 1.5;
          --scale-factor: 1;
          --glow-blur: 6;
          --glow-opacity: 0.8;
          --glow-radius: 100;
          --glow-rotate-unit: 1deg;

          width: min(100%, var(--card-width));
          aspect-ratio: 16/10;
          color: hsl(var(--foreground));
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          border-radius: var(--card-radius);
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .glow-container:hover {
          transform: translateY(-4px);
        }

        .glow-content {
          position: relative; 
          background: var(--card-color);
          border-radius: calc(var(--card-radius) - var(--border-width));
          display: flex;
          align-items: center;
          justify-content: center;  
          padding: 2rem;
          width: calc(100% - var(--border-width) * 2);
          height: calc(100% - var(--border-width) * 2);
          z-index: 1;
          overflow: hidden;
          transition: box-shadow var(--interaction-speed) ease;
        }

        .glow-content::before {
          content: "";
          position: absolute;
          inset: calc(var(--border-width) * -1);
          padding: var(--border-width);
          border-radius: var(--card-radius);
          background: hsl(var(--border) / 0.1);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          z-index: -1;
        }

        .glow-content-bg {
          content: "";
          display: block;
          position: absolute;
          inset: calc(var(--border-width) * -1);
          border-radius: var(--card-radius);
          box-shadow: 0 0 40px rgba(0,0,0,0.5);
          mix-blend-mode: color-burn;
          z-index: -1;
          background: hsl(var(--muted) / 0.5) radial-gradient(
            30% 30% at calc(var(--bg-x) * 1%) calc(var(--bg-y) * 1%),
            hsl(calc(var(--hue) * var(--hue-speed) * 1deg) 100% 90%) calc(0% * var(--bg-size)),
            hsl(calc(var(--hue) * var(--hue-speed) * 1deg) 100% 80%) calc(20% * var(--bg-size)),
            hsl(calc(var(--hue) * var(--hue-speed) * 1deg) 100% 60%) calc(40% * var(--bg-size)),
            transparent 100%
          );
          animation: hue-animation var(--animation-speed) linear infinite,
                     rotate-bg var(--animation-speed) linear infinite;
          transition: --bg-size var(--interaction-speed) ease;
        }

        .glow {
          --glow-translate-y: 0;
          display: block;
          position: absolute;
          width: 100px;
          height: 100px;
          animation: rotate var(--animation-speed) linear infinite;
          transform: rotateZ(calc(var(--rotate) * var(--glow-rotate-unit)));
          transform-origin: center;
          border-radius: 50%;
        }

        .glow:after {
          content: "";
          display: block;
          z-index: -2;
          filter: blur(calc(var(--glow-blur) * 10px));
          width: 130%;
          height: 130%;
          left: -15%;
          top: -15%;
          background: hsl(calc(var(--hue) * var(--hue-speed) * 1deg) 100% 60%);
          position: relative;
          border-radius: 50%;
          animation: hue-animation var(--animation-speed) linear infinite;
          transform: scaleY(calc(var(--glow-scale) * var(--scale-factor) / 1.1))
                     scaleX(calc(var(--glow-scale) * var(--scale-factor) * 1.2))
                     translateY(calc(var(--glow-translate-y) * 1%));
          opacity: var(--glow-opacity);
          transition: all var(--interaction-speed) ease;
        }

        .glow-container:hover .glow-content {
          --text-color: white;
          box-shadow: 0 0 calc(var(--white-shadow) * 1rem) calc(var(--white-shadow) * 0.1rem) hsl(var(--primary) / 0.05);
          animation: shadow-pulse calc(var(--animation-speed) * 2) linear infinite;
        }

        .glow-container:hover .glow-content-bg {
          --bg-size: 15;
          animation-play-state: paused;
        }

        .glow-container:hover .glow {
          --glow-blur: 1;
          --glow-opacity: 0.4;
          --glow-scale: 1.8;
          --rotate: 900;
          --glow-rotate-unit: 0;
          --scale-factor: 1.1;
          animation-play-state: paused;
        }

        @keyframes shadow-pulse {
          0%, 100% { --white-shadow: 0.5; }
          50% { --white-shadow: 2; }
        }

        @keyframes rotate-bg {
          0% { --bg-x: 0; --bg-y: 0; }
          25% { --bg-x: 100; --bg-y: 0; }
          50% { --bg-x: 100; --bg-y: 100; }
          75% { --bg-x: 0; --bg-y: 100; }
          100% { --bg-x: 0; --bg-y: 0; }
        }

        @keyframes rotate {
          from { --rotate: -70; --glow-translate-y: -65; }
          to { --rotate: 290; --glow-translate-y: -65; }
        }

        @keyframes hue-animation {
          from { --hue: 0; }
          to { --hue: 360; }
        }
      `}</style>

      <div className={cn("glow-container", className)} role="button">
        <span className="glow"></span>
        <div className="glow-content">
          <div className="glow-content-bg" />
          {children}
        </div>
      </div>
    </>
  )
}
