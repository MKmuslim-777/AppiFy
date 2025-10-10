import React from 'react';
import companyLogo from "../assets/Images/logo.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#001931] text-white p-8">
      <div className="container mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={companyLogo} className='w-[60px]' alt="" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                AppiFy
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              We are dedicated to providing exceptional services and building lasting relationships 
              with our clients. Our mission is to deliver innovative solutions that drive success 
              and create value for everyone we work with.
            </p>
          </div>


          <div className="grid grid-cols-2 gap-8">
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-blue-300">Services</h3>
              <ul className="space-y-2">
                {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Digital Marketing', 'Cloud Solutions'].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>


            <div>
              <h3 className="font-semibold text-lg mb-4 text-blue-300">Company</h3>
              <ul className="space-y-2">
                {['About Us', 'Careers', 'Blog', 'Press', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>


          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-blue-300">Follow Us</h3>
            <div className="flex space-x-4">
                Social media
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-6"></div>

        {/* Bottom Section - Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-300 text-sm">
            © {currentYear} AppiFy. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;