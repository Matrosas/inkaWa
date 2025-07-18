import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-4 md:space-y-0">
        <p className="text-sm">© 2025 Inka Warrior. Todos los derechos reservados.</p>
        <div className="flex space-x-6 text-xl">
          <a href="https://www.facebook.com/share/19FMqALL3T/" target="_blank" rel="noopener noreferrer"  className="hover:text-yellow-400" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/inkawarriorsurf?igsh=MTIyMWh1bXQyemxrcw==" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400" aria-label="TikTok">
            <FaTiktok />
          </a>
          <a href="https://wa.me/51981476240" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
