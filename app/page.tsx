export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] font-sans text-[#1a1a1a]">
      {/* Hero Section */}
      <section className="relative bg-[#003087] text-[#ffffff] py-12 lg:py-32 px-4 overflow-hidden">
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#d91c21] opacity-20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          {/* Nuevo Escudo LaU arriba del texto */}
          <div className="mb-8">
            <img 
              src="https://st-barcelonasc.s3.sa-east-1.amazonaws.com/email/2026/Fevereiro/1902/Emblema_del_Club_Universidad_de_Chile.png" 
              alt="Escudo Universidad de Chile" 
              className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-xl"
            />
          </div>

          <div className="inline-block bg-[#d91c21] text-white px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
            Censo Oficial Club Universidad de Chile
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight uppercase">
            ¡Bullanguero, <br /> hazte escuchar!
          </h1>
          
          <p className="text-lg md:text-xl text-[#e0e0e0] mb-8 leading-relaxed max-w-2xl">
            Estuvimos en las buenas y en las difíciles. Llenamos el estadio y defendimos la camiseta. Hoy es momento de que nuestra voz también juegue.
          </p>

          <div className="flex flex-col items-center gap-4">
            <a 
              href="#encuesta"
              className="inline-block text-center py-5 px-12 bg-[#d91c21] hover:bg-[#b5171b] text-white font-black rounded-lg transition-transform hover:scale-[1.05] active:scale-95 shadow-2xl uppercase tracking-widest text-lg"
            >
              PARTICIPAR AHORA
            </a>
            <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-widest">
              🔒 La información recopilada será gestionada bajo criterios de confidencialidad y uso institucional exclusivo.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits/Info Section */}
      <section id="encuesta" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#003087] mb-12">¿Por qué tu voz es clave para La U?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="font-bold mb-2">Somos identidad azul</h3>
              <p className="text-sm text-gray-600">Tu participación permite entender quiénes somos como comunidad bullanguera: cómo vivimos la U, cómo alentamos y qué esperamos del club que amamos.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="font-bold mb-2">Escuchar al hincha es respetar su historia</h3>
              <p className="text-sm text-gray-600">Nuestro Club nace de su gente. Este Censo recoge esa voz para fortalecer nuestra identity y cultura.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold mb-2">Tu opinión influye en decisiones reales</h3>
              <p className="text-sm text-gray-600">Las conclusiones de este estudio serán consideradas en planes estratégicos y mejoras para el hincha. No es simbólico: tiene impacto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003087] text-[#ffffff] py-12 px-4 border-t-4 border-[#d91c21]">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center">
            <img 
              src="https://st-barcelonasc.s3.sa-east-1.amazonaws.com/email/2026/Fevereiro/1902/Emblema_del_Club_Universidad_de_Chile.png" 
              alt="Escudo Universidad de Chile" 
              className="w-16 h-16 object-contain mb-4"
            />
            <p className="text-[#e0e0e0] text-sm italic">
              Censo Oficial del Romántico Viajero. Más que una pasión, un sentimento.
            </p>
          </div>
          
          <div className="text-xs text-[#e0e0e0]">
            © 2026 Club Universidad de Chile. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}