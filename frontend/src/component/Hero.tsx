import Logo2 from '../assets/gr40.png';
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

export default function Hero() {
    return (
      <>
      <div className="relative h-[calc(100vh-64px)]">
        <div className="absolute inset-0 bg-white">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative h-full">
           
            <div className="grid grid-cols-1 lg:grid-cols-2 items-start h-[calc(100%-100px)]">
          
              <div className="space-y-8 w-full">
                <h1 className="text-6xl font-bold text-black leading-tight">
                  Catch the Buzz. Trade the Trends
                </h1>
                <h2 className="text-3xl text-[#2D2D2D] leading-relaxed">
                  Trusted and Secure Opinion trading 
                  <br />
                  marketplace for India.
                </h2>

                <HoverBorderGradient 
                  className="bg-[#FEC841] hover:bg-[#FFA726] text-black transition-colors duration-300"
                >
                  Download App
                </HoverBorderGradient>
              </div>
    
              <div className="relative h-full flex items-center justify-center w-auto">
                <div className="relative w-full h-[calc(100vh-250px)]">
                  <img
                    src={Logo2}
                    alt="Cricket Players"
                    className="w-full object-contain h-full object-right-top -mb-4"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}