// import trophy from '../assets/trophy.png'
// import money from '../assets/money.png'
// import score from '../assets/score.png'
// import product from '../assets/product.png'

// export default function Usp() {
//     const features = [
//         {
//             icon: trophy,
//             title: "Innovative Skill Games",
//             description: "Experience cutting-edge cricket prediction games that test your knowledge and analytical abilities."
//         },
//         {
//             icon: money,
//             title: "Secured Transactions",
//             description: "Your financial security is guaranteed with our state-of-the-art encryption and secure payment gateways."
//         },
//         {
//             icon: score,
//             title: "Fastest Live Score",
//             description: "Stay ahead with real-time cricket scores and instant updates from matches worldwide."
//         },
//         {
//             icon: product,
//             title: "Best Product",
//             description: "Enjoy a premium platform designed for cricket enthusiasts, offering the best prediction experience."
//         }
//     ];

//     return (
//         <section className="py-20 bg-[#0a192f] text-white">
//             <div className="max-w-7xl mx-auto px-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {features.map((feature, index) => (
//                         <div 
//                             key={index} 
//                             className="group relative bg-[#112240] rounded-xl p-8 hover:bg-[#1d3461] transition-all duration-300 transform hover:-translate-y-1"
//                         >
//                             {/* Icon Container */}
//                             <div className="mb-6 flex justify-center">
//                                 <div className="w-16 h-16 bg-[#ef8f40] rounded-full flex items-center justify-center group-hover:bg-[#ff9f4d] transition-colors duration-300">
//                                     <img 
//                                         src={feature.icon} 
//                                         alt={feature.title} 
//                                         className="w-8 h-8 object-contain"
//                                     />
//                                 </div>
//                             </div>

//                             {/* Content */}
//                             <div className="text-center">
//                                 <h3 className="text-xl font-semibold mb-4 text-[#ef8f40] group-hover:text-white transition-colors duration-300">
//                                     {feature.title}
//                                 </h3>
//                                 <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-100 transition-colors duration-300">
//                                     {feature.description}
//                                 </p>
//                             </div>

//                             {/* Decorative Element */}
//                             <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ef8f40] rounded-b-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />

//                             {/* Hover Effect Overlay */}
//                             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1d3461] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl" />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }


// import { WobbleCard } from '../components/ui/wobble-card';
// import trophy from '../assets/trophy.png'
// import money from '../assets/money.png'
// import score from '../assets/score.png'
// import product from '../assets/product.png'

// export default function Usp() {
//     const features = [
//         {
//             icon: trophy,
//             title: "Innovative Skill Games",
//             description: "Experience cutting-edge cricket prediction games that test your knowledge and analytical abilities."
//         },
//         {
//             icon: money,
//             title: "Secured Transactions",
//             description: "Your financial security is guaranteed with our state-of-the-art encryption and secure payment gateways."
//         },
//         {
//             icon: score,
//             title: "Fastest Live Score",
//             description: "Stay ahead with real-time cricket scores and instant updates from matches worldwide."
//         },
//         {
//             icon: product,
//             title: "Best Product",
//             description: "Enjoy a premium platform designed for cricket enthusiasts, offering the best prediction experience."
//         }
//     ];

//     return (
//         <section className="py-20 bg-[#0a192f] text-white">
//             <div className="max-w-7xl mx-auto px-4">
//                 <WobbleCard 
//                     containerClassName="bg-[#112240] border border-[#1d3461]/50"
//                     className="p-8 md:p-12"
//                 >
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
//                         {features.map((feature, index) => (
//                             <div 
//                                 key={index} 
//                                 className="group relative bg-[#1d3461]/30 backdrop-blur-sm rounded-xl p-6 hover:bg-[#1d3461]/50 transition-all duration-300 border border-[#ef8f40]/10 hover:border-[#ef8f40]/30"
//                             >
//                                 {/* Glow Effect */}
//                                 <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#ef8f40]/0 to-[#ef8f40]/5 group-hover:to-[#ef8f40]/10 transition-all duration-300" />

//                                 {/* Icon Container */}
//                                 <div className="mb-6 relative">
//                                     <div className="w-16 h-16 bg-[#ef8f40]/10 group-hover:bg-[#ef8f40]/20 rounded-full flex items-center justify-center transition-all duration-300 mx-auto">
//                                         <div className="w-12 h-12 bg-[#ef8f40] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
//                                             <img 
//                                                 src={feature.icon} 
//                                                 alt={feature.title} 
//                                                 className="w-6 h-6 object-contain"
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Content */}
//                                 <div className="text-center relative z-10">
//                                     <h3 className="text-xl font-semibold mb-3 text-[#ef8f40] group-hover:text-white transition-colors duration-300">
//                                         {feature.title}
//                                     </h3>
//                                     <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
//                                         {feature.description}
//                                     </p>
//                                 </div>

//                                 {/* Shine Effect */}
//                                 <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-[#ef8f40]/5 to-transparent bg-[length:50%_100%] bg-no-repeat animate-shine" />
//                             </div>
//                         ))}
//                     </div>
//                 </WobbleCard>
//             </div>
//         </section>
//     );
// }
import { motion } from 'framer-motion';

import { WobbleCard } from '../components/ui/wobble-card';
import trophy from '../assets/trophy.png'
import money from '../assets/money.png'
import score from '../assets/score.png'
import product from '../assets/product.png'

export default function Usp() {
    const features = [
        {
            icon: trophy,
            title: "Innovative AI Solutions",
            description: "Experience cutting-edge AI technology that adapts to your needs.",
            gradient: "from-orange-50 to-orange-100"
        },
        {
            icon: money,
            title: "Secure & Reliable",
            description: "Enterprise-grade security with state-of-the-art encryption.",
            gradient: "from-blue-50 to-blue-100"
        },
        {
            icon: score,
            title: "Real-time Updates",
            description: "Stay ahead with instant updates and live monitoring features.",
            gradient: "from-purple-50 to-purple-100"
        },
        {
            icon: product,
            title: "Premium Experience",
            description: "Enjoy a seamless platform designed for optimal performance.",
            gradient: "from-rose-50 to-rose-100"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left side - Heading and Description */}
                    <div className="lg:col-span-4 lg:sticky lg:top-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl font-bold text-gray-900">
                                Why Choose{' '}
                                <span className="text-[#ef8f40]">Our Platform?</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Discover how our innovative features and robust infrastructure
                                can transform your experience and drive better results.
                            </p>
                            <div className="pt-6">
                                <a 
                                    href="#" 
                                    className="inline-flex items-center text-[#ef8f40] hover:text-[#ff9f4d] font-medium"
                                >
                                    Explore our features
                                    <svg 
                                        className="ml-2 w-5 h-5" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M17 8l4 4m0 0l-4 4m4-4H3" 
                                        />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right side - Feature Cards */}
                    <div className="lg:col-span-8">
                        <div className="grid gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <WobbleCard
                                        containerClassName={`bg-gradient-to-br ${feature.gradient} border border-gray-100`}
                                        className="p-8"
                                    >
                                        <div className="relative z-10 flex items-center gap-6">
                                            {/* Icon */}
                                            <div className="flex-shrink-0">
                                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                                                    <img 
                                                        src={feature.icon} 
                                                        alt={feature.title}
                                                        className="w-8 h-8 object-contain"
                                                    />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-grow">
                                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-gray-600">
                                                    {feature.description}
                                                </p>
                                            </div>

                                            {/* Arrow Icon */}
                                            <div className="flex-shrink-0">
                                                <button className="text-gray-400 hover:text-[#ef8f40] transition-colors">
                                                    <svg 
                                                        className="w-6 h-6" 
                                                        fill="none" 
                                                        stroke="currentColor" 
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path 
                                                            strokeLinecap="round" 
                                                            strokeLinejoin="round" 
                                                            strokeWidth={2} 
                                                            d="M9 5l7 7-7 7" 
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </WobbleCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}