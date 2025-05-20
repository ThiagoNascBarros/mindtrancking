import React from "react";
import ImgFooter from "../../../public/images/logo_maior.svg";
import InstagramIcon from "../../../public/images/instagram.svg";
import XIcon from "../../../public/images/twiter.svg";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#bebebe] bg-white px-4 sm:px-6 md:px-8 lg:px-20 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-16 text-center sm:text-left lg:gap-60">
        {/* Logo e frase */}
        <div className="flex flex-col items-center sm:items-start gap-3 sm:gap-4">
          <img src={ImgFooter} alt="Logo" className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20" />
          <p className="text-xs sm:text-sm text-gray-600">
            Tecnologia a serviço do seu bem-estar mental.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="font-semibold text-sm sm:text-base mb-2">Navegação</h3>
          <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
            <li>
              <a href="/" className="hover:text-[#2544F4] transition">
                Início
              </a>
            </li>
            <li>
              <a href="/questionarios" className="hover:text-[#2544F4] transition">
                Questionários
              </a>
            </li>
            <li>
              <a href="/mind-ia" className="hover:text-[#2544F4] transition">
                Mind IA
              </a>
            </li>
            <li>
              <a href="/sobre" className="hover:text-[#2544F4] transition">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="/dashboard" className="hover:text-[#2544F4] transition">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-[#2544F4] transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-semibold text-sm sm:text-base">Contato</h3>
          <p className="text-xs sm:text-sm text-gray-700">(11) 99999-9999</p>
          <p className="text-xs sm:text-sm text-gray-700">contato@mindtracking.com</p>
          <div className="flex gap-4 mt-2 justify-center sm:justify-start">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src={InstagramIcon}
                alt="Instagram"
                className="w-4 h-4 sm:w-5 sm:h-5 hover:opacity-75 hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img
                src={XIcon}
                alt="Twitter"
                className="w-4 h-4 sm:w-5 sm:h-5 hover:opacity-75 hover:scale-110 transition-transform duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
