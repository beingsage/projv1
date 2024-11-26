import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import World from '../components/ui/globe'; // Your globe component

// Language data with regions
const languages = [
    {
        region: "Asia",
        languages: [
            { name: "Hindi", code: "hi", native: "हिन्दी" },
            { name: "Chinese", code: "zh", native: "中文" },
            { name: "Japanese", code: "ja", native: "日本語" },
        ]
    },
    {
        region: "Europe",
        languages: [
            { name: "English", code: "en", native: "English" },
            { name: "French", code: "fr", native: "Français" },
            { name: "German", code: "de", native: "Deutsch" },
        ]
    },
    {
        region: "Americas",
        languages: [
            { name: "Spanish", code: "es", native: "Español" },
            { name: "Portuguese", code: "pt", native: "Português" },
        ]
    }
];

// Sample arc data
const arcData = [
    {
        order: 1,
        startLat: 28.6139,  // New Delhi
        startLng: 77.2090,
        endLat: 35.6762,    // Tokyo
        endLng: 139.6503,
        arcAlt: 0.3,
        color: '#ff6b6b'
    },
    // Add more arcs as needed
];

const globeConfig = {
    pointSize: 1,
    globeColor: '#1a237e',
    showAtmosphere: true,
    atmosphereColor: '#ffffff',
    atmosphereAltitude: 0.1,
    emissive: '#000000',
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: '#ffffff',
    ambientLight: '#555555',
    directionalLeftLight: '#ffffff',
    directionalTopLight: '#ffffff',
    pointLight: '#ffffff',
    arcTime: 2000,
    arcLength: 0.9,
    rings: 3,
    maxRings: 3,
    autoRotate: true,
    autoRotateSpeed: 0.5,
    initialPosition: { lat: 20, lng: 0 }
};

export default function LanguageGlobe() {
    const [activeRegionIndex, setActiveRegionIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveRegionIndex((prev) => (prev + 1) % languages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen bg-gradient-to-b from-indigo-950 to-black text-white overflow-hidden">
            <div className="max-w-8xl mx-auto px-4 py-20">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Left side - Languages */}
                    <div className="w-full md:w-[30%] space-y-8">
                        <div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Global Languages
                            </h2>
                            <p className="mt-4 text-gray-400">
                                Supporting multiple languages for worldwide accessibility
                            </p>
                        </div>

                        <div className="space-y-6">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeRegionIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="space-y-4"
                                >
                                    <h3 className="text-2xl font-semibold text-blue-400">
                                        {languages[activeRegionIndex].region}
                                    </h3>
                                    <div className="space-y-3">
                                        {languages[activeRegionIndex].languages.map((lang) => (
                                            <motion.div
                                                key={lang.code}
                                                className="flex items-center gap-4 p-3 rounded-lg bg-white/5 backdrop-blur-sm"
                                                whileHover={{ scale: 1.02 }}
                                            >
                                                <span className="text-lg font-medium">{lang.name}</span>
                                                <span className="text-sm text-gray-400">({lang.native})</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right side - Globe */}
                    <div className="w-full md:w-[70%] h-[600px] relative">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="w-full h-full"
                        >
                            <World
                                globeConfig={globeConfig}
                                data={arcData}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}