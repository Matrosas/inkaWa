import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Agendar from './pages/Agendar';
import Horarios from './pages/Horarios';
import Contacto from './pages/Contacto';
import logo from './assets/logo.jpg';
import Footer from './components/footer';
import Galeria from './pages/Galeria';
import Eventos from './pages/Eventos';



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-50">
       <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <img src={logo} alt="Logo" className="h-10 w-10 object-contain rounded-full" />
                <h1 className="text-2xl font-bold text-blue-600">Inka Warrior</h1>
              </div>

              <div className="hidden md:flex space-x-6">
                <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Inicio</Link>
                
                <Link to="/horarios" className="text-gray-700 hover:text-blue-600 font-medium">Horarios</Link>
                <Link to="/galeria" className="text-gray-700 hover:text-blue-600 font-medium">Galeria</Link>
                 <Link to="/eventos" className="text-gray-700 hover:text-blue-600 font-medium">Eventos</Link>
                 <Link to="/agendar" className="text-gray-700 hover:text-blue-600 font-medium">Agendar cita</Link>
                <Link to="/contacto" className="text-gray-700 hover:text-blue-600 font-medium">Contacto</Link>

              </div>
            </div>
          </div>
        </nav>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/agendar" element={<Agendar />} />
            <Route path="/horarios" element={<Horarios />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/contacto" element={<Contacto />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
