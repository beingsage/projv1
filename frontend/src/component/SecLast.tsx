import { Card } from "../components/ui/apple-cards-carousel";
import fairplayVideo from '../assets/fairplay.mp4';
import secureVideo from '../assets/secure.mp4';
import supportVideo from '../assets/support.mp4';

export default function SecLast() {
    const cards = [
        {
            title: "Fairplay",
            category: "Trust & Transparency",
            src: fairplayVideo,
            content: (
                <div className="prose prose-sm dark:prose-invert">
                    <p>
                        Experience fair and transparent trading on our platform. 
                        Every prediction is handled with complete integrity and transparency.
                    </p>
                </div>
            ),
            isVideo: true
        },
        {
            title: "Secure",
            category: "Safety First",
            src: secureVideo,
            content: (
                <div className="prose prose-sm dark:prose-invert">
                    <p>
                        Your security is our priority. Advanced encryption and 
                        robust security measures protect your data and transactions.
                    </p>
                </div>
            ),
            isVideo: true
        },
        {
            title: "24*7 Support",
            category: "Always Available",
            src: supportVideo,
            content: (
                <div className="prose prose-sm dark:prose-invert">
                    <p>
                        Round-the-clock assistance whenever you need it. 
                        Our dedicated support team is always here to help.
                    </p>
                </div>
            ),
            isVideo: true
        },
    ];

    return (
        <div className="bg-[#FFFFFF] py-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                {/* <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Fairplay || Secure || 24*7 Support
                    </h2>
                </div> */}

                {/* Static Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, i) => (
                        <Card
                            key={i}
                            index={i}
                            card={{
                                ...card,
                                VideoComponent: () => (
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="object-cover absolute z-10 inset-0 w-full h-full"
                                    >
                                        <source src={card.src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )
                            }}
                            layout={true}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
