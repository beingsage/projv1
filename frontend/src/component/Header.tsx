import logo from '../assets/Group13.png';
export default function Header() {
  return (
    <nav className="bg-[#0a192f] px-8 py-4">
      <div className="max-w-7xl mx-auto flex  items-center ml-9">
        <div className="flex-shrink-0 mr-8">
          <img src={logo} alt="Opinio Logo" className="h-10" />
        </div>
        
        <div className="hidden md:flex space-x-8 mr-auto">
          <a href="/" className="text-white hover:text-gray-300 transition-colors">
            Home
          </a>
          <a href="/featured" className="text-white hover:text-gray-300 transition-colors">
            Featured Matches
          </a>
          <a href="/leagues" className="text-white hover:text-gray-300 transition-colors">
            Leagues
          </a>
          <a href="/how-it-works" className="text-white hover:text-gray-300 transition-colors">
            How It Works
          </a>
        </div>

        <div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition-colors ">
            Download App
          </button>
        </div>
      </div>
    </nav>
  )
}