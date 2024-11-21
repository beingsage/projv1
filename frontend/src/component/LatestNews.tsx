export default function LatestNews() {
    const news = [
      {
        title: "INDIA VS AUSTRALIA",
        subtitle: "Thrilling Finish",
        image: "/news1.jpg"
      },
      
    ]
  
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">LATEST NEWS AND UPDATES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }