import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AppointmentForm from '../components/AppointmentForm';
import fondo from '../assets/fondo.jpg';


function Agendar() {
  const location = useLocation();
  const [datosIniciales, setDatosIniciales] = useState({});

  useEffect(() => {
    if (location.state) {
      setDatosIniciales({
        hora: location.state.hora || '',
        profesor: location.state.profesor || '',
      });
    }
  }, [location]);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Agendar Cita</h2>
          <AppointmentForm valoresIniciales={datosIniciales} />
      </div>
      
    </div>

  );
}

export default Agendar;

