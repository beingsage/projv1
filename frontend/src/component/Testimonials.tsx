// import { useState } from 'react';
import { AnimatedTestimonials } from '../components/ui/animated-testimonials';

export default function Testimonials() {
    const testimonials = [
        {
            quote: "Great predictions! They helped me win my bets and stay ahead in the game.",
            name: "Rajesh Kumar",
            designation: "Rajesh Kumar",
             src: "/testimonials/user1.jpg"
        },
        {
            quote: "Accurate and reliable. I trust their insights for every match.",
            name: "Priya Patel",
            designation: "Priya Patel",
             src: "/testimonials/user2.jpg"
        },
        {
            quote: "Great predictions! They helped me win my bets and stay ahead in the game.",
            name: "Rajesh Kumar",
            designation: "Rajesh Kumar",
             src: "/testimonials/user3.jpg"
        }
    ];

    // const [currentIndex, setCurrentIndex] = useState(0);

    // const nextTestimonial = () => {
    //     setCurrentIndex((prevIndex) => 
    //         prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    //     );
    // };

    // const prevTestimonial = () => {
    //     setCurrentIndex((prevIndex) => 
    //         prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    //     );
    // };

    return (
        // <section className="py-16 bg-white relative">
        //     <div className="max-w-7xl mx-auto px-4">
        //         <h2 className="text-4xl font-bold text-center mb-16 text-[#0a192f]">
        //             USER TESTIMONIALS
        //         </h2>

        //         <div className="relative flex justify-center items-center">
                    
        //             <button 
        //                 onClick={prevTestimonial}
        //                 className="absolute -left-12 z-20 bg-[#0a192f] rounded-full p-2 hover:bg-opacity-80 transition-colors"
        //             >
        //                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        //                 </svg>
        //             </button>

        //             <div className="flex justify-center items-center gap-8 overflow-visible w-full max-w-5xl">
        //                 {[-1, 0, 1].map((offset) => {
        //                     const index = (currentIndex + offset + testimonials.length) % testimonials.length;
        //                     const isCenter = offset === 0;
                            
        //                     return (
        //                         <div
        //                             key={index}
        //                             className={`
        //                                 transform transition-all duration-500 ease-in-out
        //                                 ${isCenter ? 'z-10' : 'z-0 opacity-70'}
        //                                 flex-shrink-0 w-[350px]
        //                             `}
        //                             style={{
        //                                 transform: `scale(${isCenter ? 1.1 : 0.9})`,
        //                             }}
        //                         >
        //                             <div className={`
        //                                 p-8 rounded-lg transition-all duration-500
        //                                 ${isCenter ? 'bg-[#FFF3E0]' : 'bg-[#FFE4C4]'}
        //                             `}>
        //                                 <p className="text-lg mb-6 text-gray-800">
        //                                     {testimonials[index].text}
        //                                 </p>
        //                                 <div className="flex items-center justify-between">
        //                                     <span className="font-semibold text-[#8B0000]">
        //                                         {testimonials[index].author}
        //                                     </span>
        //                                     <div className="flex">
        //                                         {[...Array(5)].map((_, i) => (
        //                                             <span 
        //                                                 key={i} 
        //                                                 className={`text-xl ${i < testimonials[index].rating ? 
        //                                                     'text-[#8B0000]' : 'text-gray-300'}`}
        //                                             >
        //                                                 ★
        //                                             </span>
        //                                         ))}
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     );
        //                 })}
        //             </div>

                    
        //             <button 
        //                 onClick={nextTestimonial}
        //                 className="absolute -right-12 z-20 bg-[#0a192f] rounded-full p-2 hover:bg-opacity-80 transition-colors"
        //             >
        //                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        //                 </svg>
        //             </button>
        //         </div>
        //     </div>
        // </section>



        <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
            {/* <h2 className="text-4xl font-bold text-center mb-16 text-[#0a192f]">
                USER TESTIMONIALS
            </h2> */}
            
            <AnimatedTestimonials 
                testimonials={testimonials}
                autoplay={true}
            />
        </div>
    </section>
    )
  }