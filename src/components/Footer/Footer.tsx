import React from "react";
import ImgFooter from "../../../public/images/logo_maior.svg";
import InstagramIcon from "../../../public/images/instagram.svg";
import XIcon from "../../../public/images/twiter.svg";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#bebebe] bg-white px-6 md:px-20 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-70 text-center md:text-left">
        {/* Logo e frase */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src={ImgFooter} alt="Logo" className="w-20 h-20" />
          <p className="text-sm text-gray-600">
            Tecnologia a serviço do seu bem-estar mental.
          </p>
        </div>

        {/* Navegação */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold mb-2">Navegação</h3>
          <ul className="text-sm text-gray-700 space-y-1">
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
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="font-semibold">Contato</h3>
          <p className="text-sm text-gray-700">(11) 99999-9999</p>
          <p className="text-sm text-gray-700">contato@mindtracking.com</p>
          <div className="flex gap-4 mt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src={InstagramIcon}
                alt="Instagram"
                className="w-5 h-5 hover:opacity-75 hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img
                src={XIcon}
                alt="Twitter"
                className="w-5 h-5 hover:opacity-75 hover:scale-110 transition-transform duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
