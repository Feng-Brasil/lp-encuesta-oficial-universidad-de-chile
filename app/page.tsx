export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] font-sans text-[#1a1a1a]">
      {/* Hero Section */}
      <section className="relative bg-[#003087] text-[#ffffff] py-12 lg:py-32 px-4 overflow-hidden">
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#d91c21] opacity-20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="inline-block bg-[#d91c21] text-white px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
            Censo Oficial Club Universidad de Chile
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight uppercase">
            ¡Bullanguero, hazte escuchar!
          </h1>
          
          <p className="text-lg md:text-xl text-[#e0e0e0] mb-8 leading-relaxed max-w-2xl">
            Ser hincha de LaU es estar en las buenas y en las difíciles. Es llenar el estadio, alentar sin parar y defender estos colores en cualquier lugar. Ahora es momento de hacernos escuchar.
          </p>

          <div className="flex flex-col items-center gap-4">
            <a 
              href="#encuesta"
              className="inline-block text-center py-5 px-12 bg-[#d91c21] hover:bg-[#b5171b] text-white font-black rounded-lg transition-transform hover:scale-[1.05] active:scale-95 shadow-2xl uppercase tracking-widest text-lg"
            >
              PARTICIPAR AHORA
            </a>
          </div>

          <div className="mt-12 flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#f1c40f] rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Escudo_de_la_Universidad_de_Chile.svg/1200px-Escudo_de_la_Universidad_de_Chile.svg.png" 
                alt="Logo U de Chile" 
                className="w-48 h-48 object-contain relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>

          <p className="text-[10px] text-gray-400 mt-8 uppercase tracking-widest">
            🔒 Participación anónima y segura bajo estándares académicos.
          </p>
        </div>
      </section>

      {/* Benefits/Info Section */}
      <section id="encuesta" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#003087] mb-12">¿Por qué es importante tu participación?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl mb-4">🏟️</div>
              <h3 className="font-bold mb-2">Identidad</h3>
              <p className="text-sm text-gray-600">Representa fielmente los valores y la pasión de nuestra hinchada.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-bold mb-2">Credibilidad</h3>
              <p className="text-sm text-gray-600">Datos oficiales procesados por expertos de la Universidad.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">📢</div>
              <h3 className="font-bold mb-2">Impacto</h3>
              <p className="text-sm text-gray-600">Tus respuestas influyen directamente en las decisiones futuras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-[#ffffff] py-12 px-4 border-t-4 border-[#d91c21]">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 text-center">
          <div>
            <div className="text-2xl font-black tracking-tighter mb-2">
              UNIVERSIDAD <span className="text-[#d91c21]">DE CHILE</span>
            </div>
            <p className="text-gray-400 text-sm italic">"Más que una pasión, una institución."</p>
          </div>
          
          <div className="flex gap-6 text-sm text-gray-400">
            <span className="hover:text-white transition-colors cursor-pointer">Privacidad</span>
            <span className="hover:text-white transition-colors cursor-pointer">Términos</span>
            <span className="hover:text-white transition-colors cursor-pointer">Contacto</span>
          </div>
          
          <div className="text-xs text-gray-500">
            © 2024 Departamento de Estudios Estadísticos.<br />
            Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}