import { FC } from 'react';
import Entertainment from '../assets/entertainment.jpeg';
import Crypto from '../assets/crypto.png';
import Sports from '../assets/sports.png';
import News from '../assets/news.png';

interface CategoryCard {
    title: string;
    image: string;
    description: string;
}

const TrendingCategories: FC = () => {
    const categories: CategoryCard[] = [
        {
            title: "Entertainment",
            image: Entertainment, // Replace with your image path
            description: "Stay updated with the latest buzz in movies, music, and pop culture. Track celebrity trends and entertainment predictions."
        },
        {
            title: "Crypto",
            image: Crypto, // Replace with your image path
            description: "Navigate the dynamic world of cryptocurrencies. Follow market trends, analyze patterns, and make informed investment decisions."
        },
        {
            title: "Sports",
            image: Sports, // Replace with your image path
            description: "From cricket to football, track all major sporting events. Predict outcomes and follow your favorite teams and players."
        },
        {
            title: "News",
            image: News, // Replace with your image path
            description: "Get comprehensive coverage of global events. Stay informed about politics, economy, and breaking news from around the world."
        }
    ];

    return (
        <div className="bg-[#FFFFFF] bg-opacity-100 ">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                {/* <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 text-white">
                        Entertainment || Crypto || Sports || News
                    </h2>
                </div> */}

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, index) => (
                        <CategoryCard key={index} {...category} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const CategoryCard: FC<CategoryCard> = ({ title, image, description }) => {
    return (
        <div className="flex flex-col items-center text-center group">
            {/* Circle Image Container with Enhanced Blend Effect */}
            <div className="relative mb-6">
                <div className="w-64 h-64 rounded-full overflow-hidden bg-[#2D2D2D]">
                    <img 
                        src={image} 
                        alt={title}
                        className="w-full h-full object-cover opacity-75 mix-blend-luminosity filter contrast-100 saturate-75 
                        transition-all duration-300 group-hover:opacity-90 group-hover:mix-blend-normal group-hover:saturate-100"
                    />
                </div>
                {/* Background Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#C6E7F7]/20 to-white/5 -z-10 transform -translate-x-2 translate-y-2 blur-2xl" />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold mb-3 text-[#2D2D2D] group-hover:text-[#005DAB] transition-colors">{title}</h3>
            <p className="text-[#2D2D2D]/80 max-w-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default TrendingCategories;