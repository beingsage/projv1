"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
// import {
//   IconArrowNarrowLeft,
//   IconArrowNarrowRight,
//   IconX,
// } from "@tabler/icons-react";
// import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
// import Image, { ImageProps } from "next/image";
import { BlurImage } from './blur-image';
import { useOutsideClick } from "../../hooks/use-outside-click";
import { X } from "lucide-react";

interface CarouselProps {
  items: JSX.Element[];
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
  isVideo?: boolean;
  VideoComponent?: () => JSX.Element;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCardClose = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = carousel;
      // When we reach the end, smoothly transition to start
      if (scrollLeft + clientWidth >= scrollWidth - 200) {
        // Smoothly scroll back to start
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      }
    };

    carousel.addEventListener('scroll', handleScroll);
    
    // Auto-scroll functionality with consistent card-by-card movement
    const cardWidth = 320; // Width of card + gap
    const interval = setInterval(() => {
      if (carousel) {
        const { scrollLeft, scrollWidth, clientWidth } = carousel;
        if (scrollLeft + clientWidth >= scrollWidth - 200) {
          carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 4000); // Increased interval for better viewing

    return () => {
      carousel.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  // Duplicate items internally for smooth infinite scroll
  const duplicatedItems = [...items, ...items];

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        
        <div ref={carouselRef} className="flex overflow-x-scroll overscroll-x-contain py-12 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden relative">
          <div className="flex flex-row gap-6 px-48">
            {duplicatedItems.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * (index % items.length) }}
                key={index}
                className="shrink-0"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-96 bg-gradient-to-l from-white via-white/0 to-transparent z-10" />
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <X className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}-${index}` : undefined}
        onClick={handleOpen}
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-[35rem] w-full overflow-hidden flex flex-col items-start justify-start relative z-0 transition-all duration-300 hover:scale-105"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
          >
            {card.title}
          </motion.p>
        </div>
        {card.VideoComponent ? (
          <card.VideoComponent />
        ) : (
          <BlurImage
            src={card.src}
            alt={card.title}
            fill
            className="object-cover absolute z-10 inset-0"
          />
        )}
      </motion.button>
    </>
  );
};