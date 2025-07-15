import { Link } from 'react-router-dom';
import banner from '../assets/banner.jpg';
import imagenNosotros from '../assets/nosotros.jpg';


function Inicio() {
    return (
        <>
            <div
                className="bg-cover bg-center h-[90vh] relative"
                style={{ backgroundImage: `url(${banner})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                        SIENTE LA FUERZA DE LAS OLAS
                    </h1>
                    <p className="text-lg md:text-2xl mb-6 max-w-xl">
                        Aprende a surfear con los mejores instructores de Inka Warrior.
                    </p>
                    <Link
                        to="/agendar"
                        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-lg font-semibold transition"
                    >
                        🏄 Reserva tu clase
                    </Link>
                </div>
            </div>

            <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-blue-700 mb-4">Sobre Nosotros</h2>
                    <p className="text-gray-700 mb-4">
                        En Inka Warrior, no solo enseñamos surf -vivimos el surf. Nuestra escuela fue fundada con la pasión de compartir el estilo de vida surfero con personas de todas las edades y niveles. Con más de 17 años de experiencia, nos hemos convertido en una de las escuelas más reconocidas del país, ofreciendo clases los 365 días del año, incluso feriados.
                    </p>

                    <p className="text-gray-700 mb-4">
                        Nuestro equipo está conformado por instructores certificados, apasionados por el mar, la seguridad y el aprendizaje progresivo. Creemos que cada alumno tiene un ritmo único, por eso personalizamos nuestras clases para que cada experiencia en el agua sea motivadora, segura y, sobre todo, divertida.
                    </p>

                    <p className="text-gray-700 mb-4">
                        La escuela cuenta todo el equipo necesario incluido: trajes de neopreno, tablas de distintas tallas y lockers para tus pertenencias. También ofrecemos alquiler de tablas para surfistas independientes.
                    </p>

                    <p className="text-gray-700 mb-4">
                        Además, realizamos eventos de integración, programas para colegios, y surf camps en temporada alta. Nuestra misión es promover el surf como una herramienta de bienestar físico, mental y emocional, acercando a más peruanos y visitantes del mundo a esta increíble cultura del mar.
                    </p>

                    <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-2">Nuestros valores</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Confianza:</strong> Habilidad para que te motives y te animes a lograr todos tus objetivos.</li>
                        <li><strong>Seguridad:</strong> Equipo profesional para controlar la situación ante cualquier eventualidad.</li>
                        <li><strong>Experiencia:</strong> Más de 17 años organizando un servicio de excelente calidad.</li>
                    </ul>

                </div>
                <div>

                    <img
                        src={imagenNosotros}
                        alt="Escuela de Surf"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            </section>

            <section className=" py-15 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-blue-700 mb-4">CLASES DE SURF</h2>
                    <p className="text-gray-700 text-lg mb-8">
                        Nuestra misión es enseñarte a surfear y que te conviertas en surfista. Nuestro staff es comprometido y dedicado en cada etapa del aprendizaje. Usamos equipamiento de alta calidad, nuestros profes e instructores son experimentados surfistas . Todas nuestras clases incluyen todo lo que podrías necesitar para disfrutar del surf de forma segura, divertida y completa.
                    </p>

                    <div className="text-left text-gray-800 space-y-4 max-w-3xl mx-auto">
                        <p>⚡️ Tabla, traje, instructor fuera y dentro del agua.</p>
                        <p>⚡️ 40min/1h de teoría súper completa, donde puedes despejar todas tus dudas con profesionales.</p>
                        <p>⚡️ Ejercicios en seco con simuladores de equilibrio y coordinación.</p>
                        <p>⚡️ 1h de práctica intensiva en el agua.</p>
                        <p>⚡️ Clases enfocadas en potenciar surfistas a su más alto nivel.</p>
                        <p>⚡️ También diseñadas para iniciar personas nuevas en este increíble deporte.</p>

                        <p className="mt-6 font-semibold text-blue-800">Tarifas:</p>
                        <p>– Clase Personalizada (niños y adultos): <span className="text-green-600 font-bold">S/60</span></p>
                    </div>
                </div>
            </section>

        </>
    );
}


export default Inicio;

