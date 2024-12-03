/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "../../lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

const Link = ({ 
    href, 
    children, 
    className,
    ...props 
}: { 
    href: string; 
    children: React.ReactNode;
    className?: string;
}) => (
    <a href={href} className={className} {...props}>
        {children}
    </a>
);

interface FloatingDockProps {
  items: {
    title: string;
    icon: React.ReactNode;
    href: string;
  }[];
  desktopClassName?: string;
  mobileClassName?: string;
}

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: FloatingDockProps) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: FloatingDockProps["items"];
  className?: string;
}) => {
  return (
    <div className={cn("relative block md:hidden", className)}>
      <div className="flex gap-4">
        {items.map((item) => (
          <Link
            href={item.href || "#"}
            key={item.title}
            className="h-10 w-10 rounded-full bg-[#1a3152] hover:bg-[#234169] flex items-center justify-center transition-colors"
          >
            <div className="h-5 w-5">{item.icon}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: FloatingDockProps["items"];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex gap-4 items-center",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const width = useSpring(useTransform(distance, [-150, 0, 150], [40, 50, 40]), {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <Link href={href || "#"}>
      <motion.div
        ref={ref}
        style={{ width }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-[#1a3152] hover:bg-[#234169] flex items-center justify-center relative transition-colors"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-[#1a3152] text-white absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="h-6 w-6">
          {icon}
        </div>
      </motion.div>
    </Link>
  );
}
