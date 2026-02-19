export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] font-sans text-[#1a1a1a]">
      {/* Hero Section - Altura optimizada de py-12/lg:py-32 a py-8/lg:py-16 */}
      <section className="relative bg-[#003087] text-[#ffffff] py-8 lg:py-16 px-4 overflow-hidden">
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#d91c21] opacity-20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          {/* Nuevo Escudo LaU arriba del texto - Margen reducido de mb-8 a mb-4 */}
          <div className="mb-4">
            <img 
              src="https://st-barcelonasc.s3.sa-east-1.amazonaws.com/email/2026/Fevereiro/1902/Emblema_del_Club_Universidad_de_Chile.png" 
              alt="Escudo Universidad de Chile" 
              className="w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-xl"
            />
          </div>

          <div className="inline-block bg-[#d91c21] text-white px-4 py-1 rounded-full text-sm font-bold mb-4 tracking-wider uppercase">
            Censo Oficial Club Universidad de Chile
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight uppercase">
            ¡Bullanguero, <br /> hazte escuchar!
          </h1>
          
          <p className="text-lg md:text-xl text-[#e0e0e0] mb-6 leading-relaxed max-w-2xl">
            Estuvimos en las buenas y en las difíciles. Llenamos el estadio y defendimos la camiseta. Hoy es momento de que nuestra voz también juegue.
          </p>

          <div className="flex flex-col items-center gap-4">
            <a 
              href="#encuesta"
              className="inline-block text-center py-4 px-12 bg-[#d91c21] hover:bg-[#b5171b] text-white font-black rounded-lg transition-transform hover:scale-[1.05] active:scale-95 shadow-2xl uppercase tracking-widest text-lg"
            >
              PARTICIPAR AHORA
            </a>
            <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-widest">
              🔒 La información recopilada será gestionada bajo criterios de confidencialidad y uso institucional exclusivo.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits/Info Section - Optimized height (py-12 instead of py-24) */}
      <section id="encuesta" className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-left border-l-8 border-[#d91c21] pl-6">
            <h2 className="text-4xl font-black text-[#003087] uppercase tracking-tight">
              ¿Por qué tu voz es clave para La U?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <div className="w-1.5 h-8 bg-[#003087] mr-4"></div>
                <h3 className="font-black text-xl text-[#003087] uppercase tracking-tight">Somos identidad azul</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm border-l border-gray-100 pl-5">
                Tu participación permite entender quiénes somos como comunidad bullanguera: cómo vivimos la U, cómo alentamos y qué esperamos del club que amamos.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <div className="w-1.5 h-8 bg-[#003087] mr-4"></div>
                <h3 className="font-black text-xl text-[#003087] uppercase tracking-tight">Respeto a la historia</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm border-l border-gray-100 pl-5">
                Nuestro Club nace de su gente. Este Censo recoge esa voz para fortalecer nuestra identity y cultura, honrando el legado del Romántico Viajero.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <div className="w-1.5 h-8 bg-[#003087] mr-4"></div>
                <h3 className="font-black text-xl text-[#003087] uppercase tracking-tight">Decisiones reales</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm border-l border-gray-100 pl-5">
                Las conclusiones de este estudio serán consideradas en planes estratégicos y mejoras para el hincha. No es simbólico: tiene impacto directo.
              </p>
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
              Censo Oficial del Romántico Viajero.<br />
              Más que una pasión, un sentimiento.
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