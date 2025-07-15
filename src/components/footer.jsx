import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-4 md:space-y-0">
        <p className="text-sm">© 2025 Inka Warrior. Todos los derechos reservados.</p>
        <div className="flex space-x-6 text-xl">
          <a href="#" className="hover:text-yellow-400" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-yellow-400" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-yellow-400" aria-label="TikTok">
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
