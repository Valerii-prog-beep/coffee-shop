export function Hero() {
  return (
    <section className="relative h-screen bg-cover bg-center bg-fixed">
      {/* Фоновое изображение */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/images/coffee-shop.png')",
          backgroundColor: '#8B7355'
        }}
      />
      
      {/* Затемнение */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Контент без кнопок */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Coffee House
        </h1>
        <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
          Discover the art of coffee craftsmanship
        </p>
      </div>
    </section>
  )
}