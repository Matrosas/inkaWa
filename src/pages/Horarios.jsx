import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../data/data.json';
import fondo from '../assets/fondo.jpg';

function Horarios() {
  const navigate = useNavigate();
  const [horasOcupadas, setHorasOcupadas] = useState([]);

  const profesores = data.profesores;

  // Cargar citas desde localStorage
  useEffect(() => {
    const citas = JSON.parse(localStorage.getItem('citas') || '[]');
    const ocupadas = citas.map(c => `${c.profesor}::${c.hora}`);
    setHorasOcupadas(ocupadas);
  }, []);

  const handleHoraClick = (profe, hora) => {
    navigate('/agendar', {
      state: {
        profesor: profe,
        hora: hora
      }
    });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Horarios por Profesor</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {profesores.map((profe, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
            <h3 className="font-bold text-lg">{profe.nombre}</h3>
            <p className="text-sm text-black-100 italic mb-3">{profe.especialidad}</p>
            <ul className="text-sm text-gray-700 mt-2 space-y-1">
              {profe.horarios.map((hora, i) => {
                const ocupado = horasOcupadas.includes(`${profe.nombre}::${hora}`);
                return (
                  <li
                    key={i}
                    onClick={() => !ocupado && handleHoraClick(profe.nombre, hora)}
                    className={`px-3 py-1 rounded text-sm text-center transition cursor-pointer ${
                      ocupado
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                    }`}
                  >
                    {hora}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        </div>
      </div>
    </div>
   
  );
}

export default Horarios;


