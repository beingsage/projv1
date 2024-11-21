export default function UpcomingMatches() {
    const matches = [
      {
        team1: { name: "Delhi Capitals", logo: "/dc-logo.png" },
        team2: { name: "Punjab Kings", logo: "/pk-logo.png" },
        date: "15 Apr 2024",
        time: "7:30 PM"
      },
      
    ]
  
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">UPCOMING MATCHES</h2>
          <div className="flex overflow-x-auto gap-6 pb-4">
            {matches.map((match, index) => (
              <div key={index} className="min-w-[280px] bg-white rounded-lg shadow-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex flex-col items-center">
                    <img src={match.team1.logo} alt={match.team1.name} className="w-16 h-16" />
                    <span className="mt-2 text-sm">{match.team1.name}</span>
                  </div>
                  <span className="text-xl font-bold">VS</span>
                  <div className="flex flex-col items-center">
                    <img src={match.team2.logo} alt={match.team2.name} className="w-16 h-16" />
                    <span className="mt-2 text-sm">{match.team2.name}</span>
                  </div>
                </div>
                <div className="text-center text-sm text-gray-600 mb-4">
                  <div>{match.date}</div>
                  <div>{match.time}</div>
                </div>
                <button className="w-full bg-[#0a192f] text-white py-2 rounded-md hover:bg-opacity-90">
                  Match Prediction
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }