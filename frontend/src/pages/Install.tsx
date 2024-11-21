import Header from '../component/Header'
import Footer from '../component/Footer'
import logo from '../assets/Group13.png'

export default function Install() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
     
        <div className="flex items-start gap-8 mb-12">
          <img src={logo} alt="Cricket Opinio Logo" className="w-32 h-32 rounded-2xl" />
          
          <div>
            <h1 className="text-4xl font-bold text-[#0a192f] mb-2">Cricket Opinio</h1>
            <h2 className="text-2xl text-green-600 mb-2">Casual Games</h2>
            <p className="text-gray-500">Contain no ads. In-app purchase</p>
          </div>
        </div>

        
        <div className="flex justify-between mb-8 max-w-2xl">
          <div className="text-center">
            <p className="text-2xl font-bold">4.6 ★</p>
            <p className="text-gray-600">1.2 M review</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">80M+</p>
            <p className="text-gray-600">Downloads</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">100Cr+</p>
            <p className="text-gray-600">Winnings</p>
          </div>
        </div>

        
        <button className="w-full bg-green-500 text-white text-xl font-semibold py-4 rounded-lg hover:bg-green-600 transition-colors mb-12">
          Download Now
        </button>

        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Disclaimer</h2>
          
          <p className="text-gray-700">
            This game may be habit-forming or financially risky. Play Responsibly.
          </p>

          <p className="text-gray-700">
            Galactus Funware is the owner of, and reserves all rights to the assets, content, services, information, and products and graphics in the website except any third party content.
          </p>

          <p className="text-gray-700">
            Galactus Funware refuses to acknowledge or represent about the accuracy or completeness or reliability or adequacy of the website's third party content. These content, materials, information, services, and products in this website, including text, graphics, and links, are provided "AS IS" and without warranties of any kind, whether expressed or implied.
          </p>

          <p className="text-gray-700">
            *MPL is the biggest gaming app in India based on the number of unity games, special tournaments and formats. MPL is available only to people above 18 years of age. MPL is available in all states where permissible by extant law. Consequently, users located in some states may not be able to access our App or its contests. For an updated list of such states, please download the App
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}