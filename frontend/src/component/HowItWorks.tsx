import signin from '../assets/signin.png';
import calendar from '../assets/calendar.png';
import stock from '../assets/stock.png'

export default function HowItWorks() {
    const steps = [
      {
        icon: signin,
        title: "Sign Up",
        description: "Create an account by providing your email address and choosing a password. This will allow you to access and manage your predictions."
      },
      {
        icon: calendar,
        title: "Choose a Match",
        description: "Browse through the list of upcoming cricket matches and select the one you wish to predict."
      },
      {
        icon: stock,
        title: "Make Predictions",
        description: "After selecting a match, view and analyze the predictions to make informed choices"
      }
    ]
  
  //   return (
  //     <section className="py-20 bg-white ">
  //       <div className="max-w-7xl mx-auto px-4">
  //         <h2 className="text-4xl font-bold text-center mb-12 text-[#0a192f]">HOW IT WORKS</h2>

         
              

  //             <div className="flex justify-center items-start gap-16 relative">
  //                   {steps.map((step, index) => (
  //                       <div key={index} className="flex flex-col items-center text-center max-w-sm relative bg-white rounded-lg shadow-lg p-8 ">
                          
  //                           <div className="mb-6">
  //                               <img 
  //                                   src={step.icon} 
  //                                   alt={step.title} 
  //                                   className="w-12 h-12"
  //                               />
  //                           </div>

                            
  //                           <h3 className="text-2xl font-semibold mb-4 text-[#0a192f]">
  //                               {step.title}
  //                           </h3>

                           
  //                           <p className="text-[#ef8f40] leading-relaxed">
  //                               {step.description}
  //                           </p>

                            
  //                           {index < steps.length - 1 && (
  //                               <div className="absolute top-1/2 -right-24 transform -translate-y-1/2">
  //                                   <svg 
  //                                       width="64" 
  //                                       height="24" 
  //                                       viewBox="0 0 64 24" 
  //                                       fill="none" 
  //                                       xmlns="http://www.w3.org/2000/svg"
  //                                   >
  //                                       <path 
  //                                           d="M0 12H60" 
  //                                           stroke="#000" 
  //                                           strokeWidth="2"
  //                                       />
  //                                       <path 
  //                                           d="M52 4L60 12L52 20" 
  //                                           stroke="#000" 
  //                                           strokeWidth="2"
  //                                           fill="none"
  //                                       />
  //                                   </svg>
  //                               </div>
  //                                )}
  //                                </div>
  //                            ))}
  //                        </div>


  //       </div>
  //     </section>
  //   )
  // }


  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-20 text-[#0a192f]">
                HOW IT WORKS
            </h2>

            <div className="flex justify-center items-center gap-16 relative">
                {steps.map((step, index) => (
                    <div key={index} className="relative">
                        {/* Card */}
                        <div className="w-80 bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] p-8">
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <img 
                                    src={step.icon} 
                                    alt={step.title} 
                                    className="w-12 h-12"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-semibold mb-4 text-[#0a192f] text-center">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#ef8f40] leading-relaxed text-center">
                                {step.description}
                            </p>
                        </div>

                        {/* Arrow - Don't show for last item */}
                        {index < steps.length - 1 && (
                            <div className="absolute top-1/2 -right-12 transform -translate-y-1/2">
                                <svg 
                                    width="48" 
                                    height="24" 
                                    viewBox="0 0 48 24" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path 
                                        d="M0 12H44" 
                                        stroke="#000" 
                                        strokeWidth="2"
                                    />
                                    <path 
                                        d="M36 4L44 12L36 20" 
                                        stroke="#000" 
                                        strokeWidth="2"
                                    />
                                </svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </section>
)
}