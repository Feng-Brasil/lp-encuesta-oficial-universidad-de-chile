import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Censo Oficial Club Universidad de Chile',
  icons: {
    icon: [
      {
        url: 'https://universidad-de-chile-st.s3.us-east-1.amazonaws.com/stg/assets/2402/LOGO-LAU_5.png',
        href: 'https://universidad-de-chile-st.s3.us-east-1.amazonaws.com/stg/assets/2402/LOGO-LAU_5.png',
      },
    ],
    apple: [
      {
        url: 'https://universidad-de-chile-st.s3.us-east-1.amazonaws.com/stg/assets/2402/LOGO-LAU_5.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    shortcut: ['https://universidad-de-chile-st.s3.us-east-1.amazonaws.com/stg/assets/2402/LOGO-LAU_5.png'],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] font-sans text-[#1a1a1a]">
      {/* Hero Section - Background Image with 70% opacity applied via pseudo-element */}
      <section className="relative bg-[#003087] text-[#ffffff] py-8 lg:py-16 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{ 
            backgroundImage: "url('https://universidad-de-chile-st.s3.us-east-1.amazonaws.com/stg/assets/2402/LaU_BG-Scrol1l_6.png')" 
          }}
        ></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          {/* Nuevo Escudo LaU arriba del texto */}
          <div className="mb-4">
            <img 
              src="https://universidad-de-chile-st.s3.us-east-1.amazonaws.com/stg/assets/2402/LOGO-LAU.png" 
              alt="Escudo Universidad de Chile" 
              className="w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-xl"
            />
          </div>

          <div className="inline-block bg-[#d91c21] text-white px-4 py-1 rounded-full text-sm font-bold mb-4 tracking-wider uppercase">
            <span className="block md:hidden whitespace-pre-line">CENSO OFICIAL{"\n"}CLUB UNIVERSIDAD DE CHILE</span>
            <span className="hidden md:block">Censo Oficial Club Universidad de Chile</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight uppercase drop-shadow-lg">
            ¡Bullanguero, <br /> hazte escuchar!
          </h1>
          
          <p className="text-base md:text-lg text-[#ffffff] mb-6 leading-tight max-w-2xl drop-shadow-md font-medium line-clamp-2">
            Estamos en las buenas y en las malas. Llenamos el estadio y defendemos la camiseta. Ahora es momento de que nuestra voz también juegue.
          </p>

          <div className="flex flex-col items-center gap-4">
            <a 
              href="https://forms.office.com/pages/responsepage.aspx?id=xYQXFMt3k0-DEgyIeVLI42ofbPu2YoROuo7SN_gg9ZtUN0pIQU9UN1hXRFlJREhBU0hJRkkyR0FVMy4u&route=shorturl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center py-4 px-12 bg-[#d91c21] hover:bg-[#b5171b] text-white font-black rounded-lg transition-transform hover:scale-[1.05] active:scale-95 shadow-2xl uppercase tracking-widest text-lg"
            >
              PARTICIPAR AHORA
            </a>
            <p className="text-[10px] text-white mt-2 uppercase tracking-widest drop-shadow-sm">
              🔒 La informação recopilada será gestionada bajo criterios de confidencialidad y uso institucional exclusivo.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits/Info Section */}
      <section id="encuesta" className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-left border-l-8 border-[#d91c21] pl-6">
            <h2 className="text-4xl md:text-5xl font-black text-[#003087] uppercase tracking-tight">
              ¿Por qué tu voz es clave para La U?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Item 1 */}
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-6">
                <div className="w-1.5 h-8 bg-[#003087] mr-4"></div>
                <h3 className="font-black text-xl text-[#003087] uppercase tracking-tight">Somos identidad</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base border-l border-gray-100 pl-5">
                Tu participación nos permite comprendernos como comunidad bullanguera: nuestra forma de vivir La U, de alentar y nuestras expectativas sobre el Club que amamos.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-6">
                <div className="w-1.5 h-8 bg-[#003087] mr-4"></div>
                <h3 className="font-black text-xl text-[#003087] uppercase tracking-tight">Respeto a la historia</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base border-l border-gray-100 pl-5">
                Nuestro Club nace de su gente. Este Censo recoge esa voz para fortalecer nuestra identidad y cultura, honrando el legado del Romántico Viajero.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-6">
                <div className="w-1.5 h-8 bg-[#003087] mr-4"></div>
                <h3 className="font-black text-xl text-[#003087] uppercase tracking-tight">Decisiones reales</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base border-l border-gray-100 pl-5">
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
              src="https://universidad-de-chile-st.s3.us-east-1.amazonaws.com/stg/assets/2402/LOGO-LAU.png" 
              alt="Escudo Universidad de Chile" 
              className="w-16 h-16 object-contain mb-4"
            />
            <p className="text-[#e0e0e0] text-sm italic">
              Censo Oficial del Romántico Viajero.<br />
              Más que una pasión, un sentimento.
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