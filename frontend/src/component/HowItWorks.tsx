// import signin from '../assets/signin.png';
import trade from '../assets/trade1.png';
import calendar from '../assets/calendar.png';
import stock from '../assets/stock.png'
import profit1 from '../assets/profit1.png'

export default function HowItWorks() {
    const steps = [
        {
            icon: calendar,
            title: "Choose a Match",
            description: "Browse through the list of upcoming cricket matches and select the one you wish to predict."
        },
        {
            icon: stock,
            title: "Make Predictions",
            description: "After selecting a match, view and analyze the predictions to make informed choices"
        },
        {
            icon: trade,
            title: "Trade",
            description: "Place your predictions and engage with other users. Track your performance and learn from the community."
        },
        {
            icon: profit1,
            title: "Profit",
            description: "Earn rewards for accurate predictions and build your reputation as a skilled predictor."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-20 text-[#0a192f]">
                    HOW IT WORKS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                    {steps.map((step, index) => (
                        <div 
                            key={index} 
                            className="group relative bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 opacity-0 animate-fade-in-up"
                        >
                            {/* Icon Container */}
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0a192f] rounded-full flex items-center justify-center group-hover:bg-[#ef8f40] transition-colors duration-300">
                                    <img 
                                        src={step.icon} 
                                        alt={step.title} 
                                        className="w-10 h-10 object-contain invert"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="mt-12 text-center">
                                <h3 className="text-xl font-semibold mb-4 text-[#0a192f]">
                                    {step.title}
                                </h3>
                                <p className="text-[#ef8f40] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Arrow - Don't show for last item */}
                            {index < steps.length - 1 && (
                                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 hidden lg:block">
                                    <svg 
                                        width="32" 
                                        height="24" 
                                        viewBox="0 0 48 24" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-[#0a192f] group-hover:text-[#ef8f40] transition-colors duration-300"
                                    >
                                        <path 
                                            d="M0 12H44" 
                                            stroke="currentColor" 
                                            strokeWidth="2"
                                        />
                                        <path 
                                            d="M36 4L44 12L36 20" 
                                            stroke="currentColor" 
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </div>
                            )}

                            {/* Decorative Element */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0a192f] rounded-b-xl group-hover:bg-[#ef8f40] transition-colors duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

