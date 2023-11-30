
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-xl font-semibold mb-4">PropertyPulse</h3>
            <p>Your trusted source for real estate.</p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="">Properties</Link>
              </li>
              <li>
                <Link to="">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-xl font-semibold mb-4">Social Media</h3>
            <ul>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: info@propertypulse.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6">
          <p className="text-center text-sm">&copy; 2023 PropertyPulse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
