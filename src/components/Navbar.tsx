import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import ImagenLogo from '@/assets/logosFondo.png'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
   const imgLogo = <img style={{width: '110px', height: '70px', borderRadius: '10px', marginBottom: '5px'}} src={ImagenLogo} alt="Logo del ministerio" />

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
   

  return (
    <nav className="bg-saas-black bg-opacity-90 backdrop-blur-sm sticky top-0 z-50 border-b border-saas-darkGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <RouterLink to="/" className="flex items-center">
              <span style={{display: 'flex', gap: '6px', marginTop: '6px', marginBottom: '3px'}} className="text-2xl font-bold bg-gradient-to-r from-saas-orange to-amber-500 bg-clip-text text-transparent">
                 {imgLogo}  <span style={{marginTop: '17px'}}>Vivos para Servir</span>
              </span>
            </RouterLink>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <ScrollLink
                to="Home"
                smooth={true}
                offset={-70}
                duration={500}
                className="px-3 py-2 text-sm font-medium text-white hover:text-saas-orange cursor-pointer"
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="Habilidades"
                smooth={true}
                offset={-70}
                duration={500}
                className="px-3 py-2 text-sm font-medium text-white hover:text-saas-orange cursor-pointer"
              >
                Habilidades
              </ScrollLink>
              <ScrollLink
                to="cursos"
                smooth={true}
                offset={-70}
                duration={500}
                className="px-3 py-2 text-sm font-medium text-white hover:text-saas-orange cursor-pointer"
              >
                Cursos
              </ScrollLink>
                <ScrollLink
                to="Testimonio"
                smooth={true}
                offset={-70}
                duration={500}
                className="px-3 py-2 text-sm font-medium text-white hover:text-saas-orange cursor-pointer"
              >
              Testimonios
              </ScrollLink>
                <ScrollLink
                to="FaQ"
                smooth={true}
                offset={-70}
                duration={500}
                className="px-3 py-2 text-sm font-medium text-white hover:text-saas-orange cursor-pointer"
              >
                Preguntas Frequentes
              </ScrollLink>
              <ScrollLink
                to="Cta"
                smooth={true}
                offset={-70}
                duration={500}
                className="px-3 py-2 text-sm font-medium text-white hover:text-saas-orange cursor-pointer"
              >
                Inscripción
              </ScrollLink>
              <RouterLink
                to=""
                className="px-3 py-2 text-sm font-medium text-white hover:text-saas-orange"
              >
                Web del ministerio
              </RouterLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-saas-darkGray">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <ScrollLink
              to="Home"
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-3 py-2 text-base font-medium text-white hover:text-saas-orange cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="Habilidades"
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-3 py-2 text-base font-medium text-white hover:text-saas-orange cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Habilidades
            </ScrollLink>
            <ScrollLink
              to="cursos"
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-3 py-2 text-base font-medium text-white hover:text-saas-orange cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Cursos
            </ScrollLink>
            <ScrollLink
              to="Testimonio"
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-3 py-2 text-base font-medium text-white hover:text-saas-orange cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Testimonios
            </ScrollLink>
            <ScrollLink
              to="FaQ"
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-3 py-2 text-base font-medium text-white hover:text-saas-orange cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Preguntas Frecuentes
            </ScrollLink>
            <ScrollLink
              to="Cta"
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-3 py-2 text-base font-medium text-white hover:text-saas-orange cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </ScrollLink>
            <RouterLink
              to="/ministerio"
              className="block px-3 py-2 text-base font-medium text-white hover:text-saas-orange"
              onClick={() => setIsOpen(false)}
            >
              Web del ministerio
            </RouterLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;