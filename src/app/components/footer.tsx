
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-orange-950 text-orange-200 py-4 mt-96 h-[200px]">
      <div className="container mx-auto text-center m-12 py-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="/" className="hover:text-orange-300">Home</a>
          <a href="/about" className="hover:text-orange-300">About</a>
          <a href="/menu" className="hover:text-orange-300">Menu</a>
          <a href="/contact" className="hover:text-orange-300">Contact</a>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" aria-label="Facebook" className="hover:text-orange-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-orange-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-orange-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-orange-300">
            <FaLinkedin size={24} />
          </a>
        </div>
        <div className="text-sm">
          <p>© {new Date().getFullYear()} Coffee Bar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
