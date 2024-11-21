import Logo2 from '../assets/gr40.png';

export default function Hero() {
    return (
      <div className="relative h-[calc(100vh-64px)]">
        <div className="absolute inset-0" 
          style={{ 
            background: `linear-gradient(180deg, 
              #0a192f 0%,
              #0a192f 5%,
              rgba(212, 163, 115, 0.9) 95%,
              rgba(212, 163, 115, 0.8) 100%)`
          }}>

          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative h-full">
           
            <div className="grid grid-cols-1 lg:grid-cols-2  items-start h-[calc(100%-100px)]">
          
              <div className="space-y-8  w-full">
                <h1 className="text-6xl font-bold text-white leading-tight">
                  Welcome to Cricket Opinion
                </h1>
                <h2 className="text-3xl text-white/90 leading-relaxed">
                  Predict the Outcomes, Share Your Views,
                  <br />
                  and Stay Ahead in Cricket!
                </h2>
                <p className="text-lg text-white/80 max-w-xl leading-relaxed">
                  Join our community of cricket enthusiasts and experts.
                  Make your predictions on upcoming matches, discuss
                  strategies, and get insights from fellow fans.
                </p>
                <button className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-10 py-3 rounded-md text-lg font-medium transition-colors">
                  Join now
                </button>
              </div>
    
          
              <div className="relative h-full flex items-center justify-center w-auto">
                <img
                  src={Logo2}
                  alt="Cricket Players"
                  className="w-full object-contain h-[calc(100vh-250px)] object-right-top -mb-4"
                />
              </div>
            </div>
    
          
            <div className="absolute bottom-0 -left-12 right-0 bg-[#0a192f] w-[1527.5px] p-0 ">
              <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-16">
                <p className="text-white text-center justify-center align-middle text-2xl font-medium tracking-wide">
                  Scan the code to download the app now .
                </p>
                <div className="bg-white p-3 rounded-lg">
                  <img
                    src="/qr-code.png"
                    alt="QR Code"
                    className="w-20 h-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}