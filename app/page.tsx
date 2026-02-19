export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] font-sans text-[#1a1a1a]">
      {/* Hero Section */}
      <section className="relative bg-[#002d72] text-[#ffffff] py-12 lg:py-32 px-4 overflow-hidden">
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#cc0000] opacity-20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-block bg-[#cc0000] text-white px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
              Encuesta Oficial 2024
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              ¡TU VOZ ES EL <span className="text-[#f1c40f]">CORAZÓN</span> DE LA U!
            </h1>
            <p className="text-lg md:text-xl text-[#e0e0e0] mb-8 leading-relaxed">
              Participa en la investigación cuantitativa oficial de la <strong>Universidad de Chile</strong>. Ayúdanos a construir el futuro del club más grande del país con tu opinión sincera.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <span className="text-[#f1c40f] text-xl">✓</span>
                <span>Análisis estadístico del perfil del hincha</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#f1c40f] text-xl">✓</span>
                <span>Proyectos de mejora institucional</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#f1c40f] text-xl">✓</span>
                <span>Resultados compartidos con la comunidad</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#encuesta"
                className="inline-block text-center py-5 px-10 bg-[#cc0000] hover:bg-[#a30000] text-white font-black rounded-lg transition-transform hover:scale-[1.05] active:scale-95 shadow-2xl uppercase tracking-widest text-lg"
              >
                RESPONDER ENCUESTA
              </a>
            </div>
            <p className="text-[10px] text-gray-400 mt-6 uppercase tracking-widest">
              🔒 Participación anónima y segura bajo estándares académicos.
            </p>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#f1c40f] rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Escudo_de_la_Universidad_de_Chile.svg/1200px-Escudo_de_la_Universidad_de_Chile.svg.png" 
                alt="Logo U de Chile" 
                className="w-64 h-64 object-contain relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits/Info Section */}
      <section id="encuesta" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#002d72] mb-12">¿Por qué es importante tu participación?</h2>
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
      <footer className="bg-[#1a1a1a] text-[#ffffff] py-12 px-4 border-t-4 border-[#cc0000]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-black tracking-tighter mb-2">
              UNIVERSIDAD <span className="text-[#cc0000]">DE CHILE</span>
            </div>
            <p className="text-gray-400 text-sm italic">"Más que una pasión, una institución."</p>
          </div>
          
          <div className="flex gap-6 text-sm text-gray-400">
            <span className="hover:text-white transition-colors cursor-pointer">Privacidad</span>
            <span className="hover:text-white transition-colors cursor-pointer">Términos</span>
            <span className="hover:text-white transition-colors cursor-pointer">Contacto</span>
          </div>
          
          <div className="text-xs text-gray-500 text-center md:text-right">
            © 2024 Departamento de Estudios Estadísticos.<br />
            Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}