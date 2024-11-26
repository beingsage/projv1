import { Carousel, Card } from '../components/ui/apple-cards-carousel';
import apple1 from '../assets/apple1.jpg';
import apple2 from '../assets/apple2.jpg';
import apple3 from '../assets/apple3.jpg';
import apple4 from '../assets/apple4.jpg';
export default function WhyInstinct() {
    const features = [
        {
            src: apple1,
            title: "24/7 Live Events",
            category: "24/7 Live Events",
            content: (
                <p className="text-gray-600 leading-relaxed">
                    Access live cricket events around the clock. Never miss a match with our real-time updates and predictions.
                </p>
            )
        },
        {
            src: apple2,
            title: "Instant Withdrawals",
            category: "Instant Withdrawals",
            content: (
                <p className="text-gray-600 leading-relaxed">
                    Quick and hassle-free withdrawals. Get your rewards instantly with our efficient payment system.
                </p>
            )
        },
        {
            src: apple3,
            title: "Secure & Legal",
            category: "Secure & Legal",
            content: (
                <p className="text-gray-600 leading-relaxed">
                    Your security is our priority. We operate under strict regulations to ensure a safe and legal prediction environment.
                </p>
            )
        },
        {
            src: apple4,
            title: "Dedicated Support",
            category: "Dedicated Support",
            content: (
                <p className="text-gray-600 leading-relaxed">
                    Our support team is always ready to help. Get assistance 24/7 for any queries or concerns.
                </p>
            )
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-8xl mx-auto px-8">
                <div className="flex items-center gap-12">
                    <div className="w-1/3 sticky top-8">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-5xl font-bold text-[#0a192f]">
                                    Why Choose
                                </h2>
                                <h2 className="text-5xl font-bold text-amber-500">
                                    INSTINCT?
                                </h2>
                            </div>
                            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                                Experience the future of cricket predictions with our innovative platform. 
                                We combine cutting-edge technology with expert insights to deliver unmatched accuracy.
                            </p>
                        </div>
                    </div>

                    <div className="w-2/3 -mr-32">
                        <Carousel
                            items={features.map((feature, index) => (
                                <Card
                                    key={`card-${index}`}
                                    card={{
                                        src: feature.src,
                                        title: feature.title,
                                        category: feature.category,
                                        content: feature.content
                                    }}
                                    index={index}
                                    layout={true}
                                />
                            ))}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}