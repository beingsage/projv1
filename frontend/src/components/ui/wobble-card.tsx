"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
// import Noise from "../../../public/noise.webp";

// export const WobbleCard = ({
//   children,
//   containerClassName,
//   className,
// }: {
//   children: React.ReactNode;
//   containerClassName?: string;
//   className?: string;
// }) => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
//     const { clientX, clientY } = event;
//     const rect = event.currentTarget.getBoundingClientRect();
//     const x = (clientX - (rect.left + rect.width / 2)) / 20;
//     const y = (clientY - (rect.top + rect.height / 2)) / 20;
//     setMousePosition({ x, y });
//   };
//   return (
//     <motion.section
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => {
//         setIsHovering(false);
//         setMousePosition({ x: 0, y: 0 });
//       }}
//       style={{
//         transform: isHovering
//           ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
//           : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
//         transition: "transform 0.1s ease-out",
//       }}
//       className={cn(
//         "mx-auto w-full bg-indigo-800  relative rounded-2xl overflow-hidden",
//         containerClassName
//       )}
//     >
//       <div
//         className="relative  h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))]  sm:mx-0 sm:rounded-2xl overflow-hidden"
//         style={{
//           boxShadow:
//             "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
//         }}
//       >
//         <motion.div
//           style={{
//             transform: isHovering
//               ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
//               : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
//             transition: "transform 0.1s ease-out",
//           }}
//           className={cn("h-full px-4 py-20 sm:px-10", className)}
//         >
//           <Noise />
//           {children}
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// const Noise = () => {
//   return (
//     <div
//       className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
//       style={{
//         backgroundImage: "url(/noise.webp)",
//         backgroundSize: "30%",
//       }}
//     ></div>
//   );
// };

const Noise = () => {
    return (
      <div
        className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
        }}
      />
    );
  };

  
export const WobbleCard = ({
    children,
    containerClassName,
    className,
  }: {
    children: React.ReactNode;
    containerClassName?: string;
    className?: string;
  }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
  
    const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
      const { clientX, clientY } = event;
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (clientX - (rect.left + rect.width / 2)) / 15;
      const y = (clientY - (rect.top + rect.height / 2)) / 15;
      setMousePosition({ x, y });
    };
  
    return (
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setMousePosition({ x: 0, y: 0 });
        }}
        style={{
          transform: isHovering
            ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1.02, 1.02, 1)`
            : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
          transition: "transform 0.2s ease-out",
        }}
        className={cn(
          "relative rounded-xl overflow-hidden backdrop-blur-sm hover:shadow-lg transition-shadow duration-300",
          containerClassName
        )}
      >
        <div
          className={cn(
            "relative h-full rounded-xl overflow-hidden",
            "bg-white/80"
          )}
          style={{
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
        >
          <motion.div
            style={{
              transform: isHovering
                ? `translate3d(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px, 0)`
                : "translate3d(0px, 0px, 0)",
              transition: "transform 0.2s ease-out",
            }}
            className={cn("relative z-10", className)}
          >
            <Noise />
            {children}
          </motion.div>
        </div>
      </motion.div>
    );
  };