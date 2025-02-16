import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaLeaf } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaLinkedin />, href: "#" }
  ];

  return (
    <footer className="bg-green-900 text-gray-100 pt-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12">
          {/* Branding Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <FaLeaf className="w-8 h-8 text-emerald-400" />
              <span className="text-2xl font-bold">Agriniri Evergreen</span>
            </div>
            <p className="text-sm text-gray-300">
              Cultivating sustainable futures through innovative agricultural solutions
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2"
          >
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Our Services', 'Farmers Portal', 'Sustainability Report'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-2"
          >
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <div className="space-y-2">
              <p>123 Green Valley Road</p>
              <p>Agricultural District, Farmland 4567</p>
              <p>contact@agriniri.com</p>
              <p>+94 112 345 678</p>
            </div>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-emerald-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div className="mt-4">
              <p className="mb-2">Subscribe to our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-md bg-green-800 border border-green-700 focus:outline-none focus:border-emerald-400"
                />
                <button className="px-4 py-2 bg-emerald-400 text-green-900 rounded-r-md hover:bg-emerald-300 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-green-800 py-6">
          <div className="text-center text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Agriniri Evergreen. All rights reserved. 
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-emerald-400">Privacy Policy</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-emerald-400">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;