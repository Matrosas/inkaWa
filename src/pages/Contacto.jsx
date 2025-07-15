import { useState } from 'react';
import fondo from '../assets/fondo.jpg';


function Contacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mensaje enviado :\n' + JSON.stringify(formData, null, 2));
        setFormData({ nombre: '', email: '', mensaje: '' });
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
            style={{ backgroundImage: `url(${fondo})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 max-w-md w-full bg-white/90 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Contáctanos</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-medium">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Correo electrónico</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Mensaje</label>
                        <textarea
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="relative w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                        <span className="text">Enviar</span>
                    </button>
                </form>
            </div>
        </div>

    );
}

export default Contacto;
