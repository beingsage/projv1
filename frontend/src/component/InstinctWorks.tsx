import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronUp, IconChevronDown } from '@tabler/icons-react';
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import care from '../assets/care.jpg'
import tradecard from '../assets/tradecard.jpg'
import feature1 from '../assets/feature1.jpg'
import feature2 from '../assets/feature2.jpg'

interface InstintStep {
    title: string;
    description: string;
    image: string;
    ctaText?: string;
    ctaLink?: string;
}

export default function InstintWorks() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const steps: InstintStep[] = [
        {
            title: "Probo Cares",
            description: "Be it loss protection or data security, Probo is user first always. Check out the latest on responsible trading.",
            image: care,
            ctaText: "Learn More",
            ctaLink: "#probo-cares"
        },
        {
            title: "Exiting trades is your choice",
            description: "The 'Exit' feature gives the user an opportunity to exit from the current trade and helps in controlling your losses and maximising the profit.",
            image: tradecard,
            ctaText: "Try Now",
            ctaLink: "#trading"
        },
        {
            title: "Third Feature",
            description: "Description for the third feature goes here.",
            image: feature1,
            ctaText: "Explore",
            ctaLink: "#feature-3"
        },
        {
            title: "Fourth Feature",
            description: "Description for the fourth feature goes here.",
            image: feature2,
            ctaText: "Get Started",
            ctaLink: "#feature-4"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setActiveIndex((prev) => (prev + 1) % steps.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [steps.length]);

    const navigate = (newDirection: number) => {
        setDirection(newDirection);
        if (newDirection === 1) {
            setActiveIndex((prev) => (prev + 1) % steps.length);
        } else {
            setActiveIndex((prev) => (prev - 1 + steps.length) % steps.length);
        }
    };

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left side - Title */}
                    <div className="space-y-4">
                        <motion.h2 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-4xl font-bold text-gray-800 leading-tight"
                        >
                            What's new <br />
                            <span className="text-[#ef8f40]">in Instint?</span>
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 text-lg"
                        >
                            Discover our latest features and improvements
                        </motion.p>
                    </div>

                    {/* Right side - Scrollable Cards */}
                    <div className="relative h-[800px]">
                        {/* Navigation Buttons */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
                            <button
                                onClick={() => navigate(-1)}
                                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg 
                                hover:bg-gray-50 transition-all text-gray-700 disabled:opacity-50 
                                disabled:hover:bg-white disabled:hover:shadow-md"
                                disabled={activeIndex === 0}
                            >
                                <IconChevronUp className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => navigate(1)}
                                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg 
                                hover:bg-gray-50 transition-all text-gray-700 disabled:opacity-50 
                                disabled:hover:bg-white disabled:hover:shadow-md"
                                disabled={activeIndex === steps.length - 2}
                            >
                                <IconChevronDown className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Cards Container */}
                        <div className="relative h-full overflow-hidden">
                            <AnimatePresence initial={false} custom={direction}>
                                {steps.slice(activeIndex, activeIndex + 2).map((step, index) => (
                                    <motion.div
                                        key={step.title}
                                        custom={direction}
                                        initial={{ opacity: 0, y: direction > 0 ? 100 : -100 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: direction > 0 ? -100 : 100 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute w-full"
                                        style={{ top: `${index * 65}%` }}
                                    >
                                        <InstintCard {...step} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function InstintCard({ title, description, image, ctaText, ctaLink }: InstintStep) {
    return (
        <CardContainer className="inter-var">
            <CardBody className="relative group/card bg-white hover:shadow-xl dark:hover:shadow-2xl 
                dark:hover:shadow-emerald-500/[0.1] w-auto sm:w-[30rem] h-[400px] rounded-xl p-6 
                border border-gray-100 transition-all duration-200">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-gray-800 mb-4"
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-600 text-sm max-w-sm mb-6"
                >
                    {description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <img
                        src={image}
                        className="h-52 w-full object-cover rounded-lg group-hover/card:shadow-md 
                        transition-shadow duration-200"
                        alt={title}
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-6">
                    <CardItem
                        translateZ={20}
                        as="a"
                        href={ctaLink}
                        className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 
                        hover:text-[#ef8f40] transition-colors flex items-center gap-2 
                        hover:bg-gray-50"
                    >
                        {ctaText || 'Read more'}
                        <span className="transform group-hover/card:translate-x-1 transition-transform">→</span>
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}