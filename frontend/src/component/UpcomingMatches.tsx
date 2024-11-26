import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";
import { CloseIcon } from "../components/ui/expandable-cards";
import { Match, mockMatches } from "../matchData";

interface ExtendedMatch extends Match {
    content?: () => React.ReactNode;
}

export default function UpcomingMatches() {
    const [active, setActive] = useState<ExtendedMatch | null>(null);
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(null);
            }
        }

        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    const formatDate = (timestamp: number) => {
        return new Date(timestamp).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    const formatTime = (timestamp: number) => {
        return new Date(timestamp).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-[#0a192f]">
                    UPCOMING MATCHES
                </h2>

                <AnimatePresence>
                    {active && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/20 h-full w-full z-10"
                            />
                            <div className="fixed inset-0 grid place-items-center z-[100]">
                                <motion.button
                                    layout
                                    className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                                    onClick={() => setActive(null)}
                                >
                                    <CloseIcon />
                                </motion.button>
                                <motion.div
                                    layoutId={`card-${active.matchId}-${id}`}
                                    ref={ref}
                                    className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                                >
                                    {active.src && (
                                        <motion.div layoutId={`image-${active.matchId}-${id}`}>
                                            <img
                                                src={active.src}
                                                alt={`${active.team1.teamName} vs ${active.team2.teamName}`}
                                                className="w-full h-60 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                                loading="lazy"
                                            />
                                        </motion.div>
                                    )}
                                    <div className="p-6">
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-bold text-center">{active.seriesName}</h3>
                                            <div className="flex justify-between items-center">
                                                <div className="flex flex-col items-center">
                                                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                                                        <span className="text-xl font-bold">{active.team1.teamSName}</span>
                                                    </div>
                                                    <span className="mt-2 font-semibold text-sm text-center">{active.team1.teamName}</span>
                                                </div>
                                                <span className="text-2xl font-bold">VS</span>
                                                <div className="flex flex-col items-center">
                                                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                                                        <span className="text-xl font-bold">{active.team2.teamSName}</span>
                                                    </div>
                                                    <span className="mt-2 font-semibold text-sm text-center">{active.team2.teamName}</span>
                                                </div>
                                            </div>
                                            <div className="text-center space-y-2">
                                                <p className="font-medium">Match Details</p>
                                                <p>Format: {active.matchFormat}</p>
                                                <p>Date: {formatDate(active.startDate)}</p>
                                                <p>Time: {formatTime(active.startDate)}</p>
                                                <p>Venue: {active.ground}</p>
                                            </div>
                                        </div>
                                        <button className="w-full mt-6 bg-[#0a192f] text-white py-3 rounded-md hover:bg-opacity-90">
                                            Get Match Prediction
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </>
                    )}
                </AnimatePresence>

                <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
                    {mockMatches.map((match) => (
                        <motion.div
                            layoutId={`card-${match.matchId}-${id}`}
                            key={match.matchId}
                            onClick={() => setActive(match)}
                            className="min-w-[280px] bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl transition-shadow"
                        >
                            {match.src && (
                                <motion.div layoutId={`image-${match.matchId}-${id}`} className="mb-4">
                                    <img
                                        src={match.src}
                                        alt={`${match.team1.teamName} vs ${match.team2.teamName}`}
                                        className="w-full h-40 rounded-lg object-cover object-top"
                                        loading="lazy"
                                    />
                                </motion.div>
                            )}
                            <div className="text-sm text-gray-600 mb-2 text-center">
                                {match.seriesName}
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                                        <span className="text-lg font-bold">{match.team1.teamSName}</span>
                                    </div>
                                    <span className="mt-2 text-sm text-center">{match.team1.teamName}</span>
                                </div>
                                <span className="text-xl font-bold">VS</span>
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                                        <span className="text-lg font-bold">{match.team2.teamSName}</span>
                                    </div>
                                    <span className="mt-2 text-sm text-center">{match.team2.teamName}</span>
                                </div>
                            </div>
                            <div className="text-center text-sm text-gray-600">
                                <div>{formatDate(match.startDate)}</div>
                                <div>{formatTime(match.startDate)}</div>
                                <div className="text-xs mt-1">{match.ground}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}