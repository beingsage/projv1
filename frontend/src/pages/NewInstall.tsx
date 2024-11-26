import { useState, useEffect } from 'react';
import logo from '../assets/Group13.png';
import appScreen1 from '../assets/screen1.jpg';
import appScreen2 from '../assets/screen2.jpg';
import appScreen3 from '../assets/screen3.jpg';
import starIcon from '../assets/star.svg';

export default function NewInstall() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const features = [
        {
            title: "Play Multiple Fantasy Formats",
            description: "Why play just Classic Fantasy elsewhere when you can also play Batting, Bowling and Innings Fantasy on Instinct. WIN Max with your Fantasy Cricket skills."
        },
        {
            title: "Low Buy-ins, Big Winnings",
            description: "Play a wide variety of leagues and get big winnings with small buy-ins, only on Instinct."
        },
        {
            title: "Usable Bonus",
            description: "Unlike other platforms, our bonus is actually usable. Join a league of your choice with a Flat 50% bonus."
        }
    ];

    const whatsNew = [
        "Join Leagues with Flat 50% Bonus",
        "Join Mega Leagues at Low Buy-ins",
        "Personalized Support"
    ];

    const ratings = {
        overall: 4.5,
        total: 1054,
        breakdown: [
            { stars: 5, percentage: 85 },
            { stars: 4, percentage: 75 },
            { stars: 3, percentage: 15 },
            { stars: 2, percentage: 5 },
            { stars: 1, percentage: 2 }
        ],
        categories: [
            { name: "Gameplay", rating: 4.8 },
            { name: "Controls", rating: 4.9 },
            { name: "Graphics", rating: 4.8 }
        ]
    };


    const reviews = [
        {
            name: "Rajesh Kumar",
            rating: 5,
            date: "15/02/2024",
            review: "Best fantasy app with lowest commission rates!",
            initial: "R",
            color: "bg-green-500"
        },
        {
            name: "Priya Singh",
            rating: 4,
            date: "12/02/2024",
            review: "Great user interface and instant withdrawals.",
            initial: "P",
            color: "bg-blue-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-8">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                    {/* App Info */}
                    <div className="flex gap-4 items-start">
                        <img 
                            src={logo} 
                            alt="Instinct Logo" 
                            className="w-16 h-16 rounded-2xl shadow-md"
                        />
                        <div>
                            <h1 className="text-xl font-bold text-[#0a192f]">
                                Instinct Fantasy Cricket
                            </h1>
                            <h2 className="text-sm text-gray-600 mb-2">
                                Best Sports Gaming Experience
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">
                                    Lowest Commission
                                </span>
                                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">
                                    Multiple Formats
                                </span>
                                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">
                                    1Cr+ Users
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-4 gap-4 my-6 text-center">
                        <div className="p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center justify-center gap-1 font-semibold">
                                4.3
                                <img src={starIcon} alt="star" className="w-4 h-4" />
                            </div>
                            <p className="text-xs text-gray-600 mt-1">5k Reviews</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                            <div className="font-semibold">35 MB</div>
                            <p className="text-xs text-gray-600 mt-1">Size</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                            <div className="font-semibold">18+</div>
                            <p className="text-xs text-gray-600 mt-1">Rated</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                            <div className="font-semibold">10M+</div>
                            <p className="text-xs text-gray-600 mt-1">Downloads</p>
                        </div>
                    </div>

                    {/* Install Button */}
                    <button className="w-full bg-[#39875f] hover:bg-[#2f6d4d] text-white py-3 rounded-lg font-semibold text-sm uppercase transition-colors">
                        Install
                    </button>
                </div>

                {/* Screenshots Section */}
                <div className="my-6">
                    <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
                        {[appScreen1, appScreen2, appScreen3].map((screen, index) => (
                            <img 
                                key={index}
                                src={screen} 
                                alt={`App Screenshot ${index + 1}`}
                                className="w-72 rounded-xl shadow-md snap-center"
                            />
                        ))}
                    </div>
                </div>

                {/* Three Column Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {/* About this App Section */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-bold text-[#0a192f] mb-4">
                            About this App
                        </h2>
                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-3">
                                    <div className="flex-shrink-0 w-5 h-5 mt-1">
                                        <img src={starIcon} alt="feature" className="w-full h-full" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#0a192f] mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* What's New Section */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-bold text-[#0a192f] mb-4">
                            What's New
                        </h2>
                        <ul className="space-y-2">
                            {whatsNew.map((item, index) => (
                                <li key={index} className="flex items-center gap-2 text-gray-600">
                                    <span className="text-xs">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ratings Section */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-bold text-[#0a192f] mb-4">
                            Ratings
                        </h2>
                        <div className="flex flex-col gap-4">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#0a192f]">{ratings.overall}</div>
                                <div className="flex justify-center my-2">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-yellow-400">★</span>
                                    ))}
                                </div>
                                <div className="text-sm text-gray-500">{ratings.total} ratings</div>
                            </div>
                            <div className="space-y-1">
                                {ratings.breakdown.map((item, index) => (
                                    <div key={index} className="flex items-center gap-2 mb-1">
                                        <span className="w-3 text-sm">{item.stars}</span>
                                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-green-600 rounded-full"
                                                style={{ width: `${item.percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-3 gap-2 pt-2">
                                {ratings.categories.map((category, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-xs text-gray-600">{category.name}</div>
                                        <div className="flex items-center justify-center gap-1">
                                            <span className="font-semibold text-sm">{category.rating}</span>
                                            <span className="text-xs text-yellow-400">★</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="bg-white rounded-xl p-6 shadow-sm mb-20">
                    <h2 className="text-lg font-bold text-[#0a192f] mb-4">
                        Ratings & Reviews
                    </h2>
                    <div className="space-y-6">
                        {reviews.map((review, index) => (
                            <div key={index} className="flex gap-4">
                                <div className={`w-10 h-10 ${review.color} rounded-full flex items-center justify-center text-white font-semibold`}>
                                    {review.initial}
                                </div>
                                <div>
                                    <div className="font-semibold text-[#0a192f]">
                                        {review.name}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500 my-1">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <span 
                                                    key={i} 
                                                    className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                        <span className="text-xs">
                                            {review.date}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        {review.review}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sticky Install Button */}
            <div className={`fixed bottom-0 left-0 right-0 bg-white border-t p-4 transform transition-transform duration-300 ${
                isSticky ? 'translate-y-0' : 'translate-y-full'
            }`}>
                <button className="w-full bg-[#39875f] hover:bg-[#2f6d4d] text-white py-3 rounded-lg font-semibold text-sm uppercase transition-colors">
                    Install
                </button>
            </div>
        </div>
    );
}