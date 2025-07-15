import React from 'react';
import data from '../data/data.json';

export default function Eventos() {
  const eventos = data.eventos;

  return (
    <div className="min-h-screen py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-10">Eventos y Talleres</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {eventos.map((evento, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={evento.imagen} alt={evento.titulo} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-2">{evento.titulo}</h3>
              <p className="text-gray-700 mb-2">{evento.descripcion}</p>
              <p className="text-sm text-gray-500">📅 {evento.fecha}</p>
              <p className="text-sm text-gray-500">📍 {evento.lugar}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


