
import React from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.png';
import img9 from '../assets/9.png';

const imagenes = [img1, img2, img3,img4,img5,img6, img7, img8, img9];

export default function Galeria() {
  return (
    <div className="min-h-screen py-12 px-4">
     

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {imagenes.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={src}
              alt={`Foto ${index + 1}`}
              className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

