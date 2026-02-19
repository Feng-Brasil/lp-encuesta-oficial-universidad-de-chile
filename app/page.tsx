export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] font-sans text-[#1e293b]">
      {/* Hero Section & Form */}
      <section className="relative bg-[#002d72] text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#cc0000] opacity-20 blur-3xl -mr-32 -mt-32 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#002d72] border-2 border-[#f1c40f] opacity-10 rounded-full -ml-48 -mb-48"></div>

        <div className="max-w-6xl mx-auto px-4 py-12 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-[#cc0000] text-white text-sm font-bold rounded-full uppercase tracking-widest">
                Encuesta Oficial 2024
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                ¡TU VOZ ES PARTE DE <span className="text-[#f1c40f]">NUESTRA HISTORIA!</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                Participa en la investigación académica y social de la Universidad de Chile. Queremos conocer la pasión, opinión y visión de la hinchada más fiel del país.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-[#f1c40f] text-xl">✓</span>
                  <span>Contribución académica oficial</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#f1c40f] text-xl">✓</span>
                  <span>Análisis del impacto social del club</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#f1c40f] text-xl">✓</span>
                  <span>Resultados compartidos con la comunidad</span>
                </li>
              </ul>
            </div>

            {/* Right Content - Lead Form */}
            <div className="bg-white p-8 rounded-2xl shadow-2xl text-[#1e293b]">
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold mb-2">Regístrate para comenzar</h2>
                <p className="text-gray-600 text-sm">Completa tus datos para validar tu participación en la encuesta oficial.</p>
              </div>

              <form 
                action="https://formspree.io/f/xyzabc" 
                method="POST"
                className="space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-1.5 text-gray-700">
                    Nombre Completo
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name"
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002d72] focus:border-transparent outline-none transition-all"
                    placeholder="Ej: Juan Pérez"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-1.5 text-gray-700">
                    Correo Electrónico
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email"
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002d72] focus:border-transparent outline-none transition-all"
                    placeholder="nombre@ejemplo.com"
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full py-4 px-6 bg-[#cc0000] hover:bg-[#a30000] text-white font-bold rounded-lg transition-all transform hover:scale-[1.02] shadow-lg uppercase tracking-wider"
                  >
                    RESPONDER ENCUESTA
                  </button>
                </div>
                
                <p className="text-[10px] text-center text-gray-500 mt-4">
                  * Sus datos serán tratados de forma confidencial bajo los protocolos de investigación de la Universidad de Chile.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Diagonal Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#f8fafc] clip-path-slant" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
      </section>

      {/* Information Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8 text-[#002d72]">¿Por qué participar?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <div className="text-4xl mb-4">🎓</div>
            <h4 className="font-bold mb-2">Rigor Académico</h4>
            <p className="text-gray-600 text-sm">Estudio respaldado por las facultades de ciencias sociales.</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">🏟️</div>
            <h4 className="font-bold mb-2">Pasión Azul</h4>
            <p className="text-gray-600 text-sm">Entender qué significa ser de la 'U' en el Chile actual.</p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">📊</div>
            <h4 className="font-bold mb-2">Impacto Real</h4>
            <p className="text-gray-600 text-sm">Los resultados ayudarán a fortalecer el vínculo club-comunidad.</p>
          </div>
        </div>
      </section>

      {/* Institutional Footer */}
      <footer className="bg-[#1a1a1a] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-black tracking-tighter mb-2">
              UNIVERSIDAD <span className="text-[#cc0000]">DE</span> CHILE
            </div>
            <p className="text-gray-400 text-sm">© 2024 Proyecto de Investigación Cuantitativa.</p>
            <p className="text-gray-400 text-sm">Todos los derechos reservados.</p>
          </div>
          
          <div className="flex gap-6">
            <div className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center hover:border-[#f1c40f] transition-colors cursor-pointer">
              🔵
            </div>
            <div className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center hover:border-[#f1c40f] transition-colors cursor-pointer">
              🔴
            </div>
            <div className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center hover:border-[#f1c40f] transition-colors cursor-pointer">
              ⭐
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-10 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          Esta es una iniciativa de recolección de datos con fines estadísticos. La participación es voluntaria y anónima tras el registro inicial.
        </div>
      </footer>
    </main>
  );
}