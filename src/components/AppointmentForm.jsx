import React, { useState, useEffect } from 'react';


function AppointmentForm({ valoresIniciales = {} }) {

  const profesoresDisponibles = ['Carlos', 'Lucía', 'Andrés'];

  const [formData, setFormData] = useState({
    nombre: '',
    fecha: '',
    hora: valoresIniciales.hora || '',
    telefono: '',
    profesor: valoresIniciales.profesor || '',
  });

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      hora: valoresIniciales.hora || '',
      profesor: valoresIniciales.profesor || '',
    }));
  }, [valoresIniciales]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const citas = JSON.parse(localStorage.getItem('citas') || '[]');
    citas.push(formData);
    localStorage.setItem('citas', JSON.stringify(citas));
    alert('Cita guardada correctamente');
    setFormData({ nombre: '', fecha: '', hora: '', telefono: '', profesor: '' });
  };

  return (
    
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto ">
      <div className="mb-4">
        <label className="block font-medium">Nombre</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1" required />
      </div>
      <div className="mb-4">
        <label className="block font-medium">Fecha</label>
        <input type="date" name="fecha" value={formData.fecha} onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1" required />
      </div>
      <div className="mb-4">
        <label className="block font-medium">Hora</label>
        <select
          name="hora"
          value={formData.hora}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        >
          <option value="">Seleccione una hora</option>
          <option value="7:00 AM">7:00 AM</option>
          <option value="8:00 AM">8:00 AM</option>
          <option value="9:00 AM">9:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="3:00 PM">3:00 PM</option>
          <option value="4:00 PM">4:00 PM</option>
          <option value="5:00 PM">5:00 PM</option>
          <option value="6:00 PM">6:00 PM</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-medium">Profesor</label>
        <select
          name="profesor"
          value={formData.profesor}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        >
          <option value="">Seleccione un profesor</option>
          {profesoresDisponibles.map((profe, i) => (
            <option key={i} value={profe}>
              {profe}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-medium">Teléfono</label>
        <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1" required />
      </div>
      <button type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
        Reservar cita
      </button>
    </form>
    
  );
}

export default AppointmentForm;

