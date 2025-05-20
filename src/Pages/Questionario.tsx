import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


export default function Questionarios() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10">
        {/* Título e subtítulo */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Seus Questionários Diários
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl mx-auto">
            Responda nossos questionários personalizados e acompanhe seu
            progresso na jornada de bem-estar mental.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-20">
          {/* Card: Questionário Diário */}
          <div className="border-4 border-blue-600 rounded-lg p-4 sm:p-5 md:p-6 w-full max-w-xs text-start shadow-sm">
            <div className="flex text-start mb-3 gap-2">
              <img
                src="/images/engrenagem.svg"
                alt="Ícone de Questionário"
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
              <h2 className="font-semibold text-base sm:text-lg mb-2">
                Questionário Diário
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 mb-4">
              Conte para nós como foram as partes mais importantes do seu dia.
            </p>
            <button className="bg-blue-600 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-blue-700 transition">
              Iniciar
            </button>
          </div>

          {/* Card: Progresso Semanal */}
          <div className="border-4 border-blue-600 rounded-lg p-4 sm:p-5 md:p-6 w-full max-w-xl shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <img
                  src="/images/evolucao.svg"
                  alt="Ícone de Questionário"
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                />
                <h2 className="font-medium text-base sm:text-lg">Seu Progresso Semanal</h2>
              </div>
              <button className="bg-blue-600 text-white px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full hover:bg-blue-700 transition whitespace-nowrap">
                Acessar
              </button>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">
              100% dos questionários completados
            </p>
            <div className="w-full bg-gray-200 h-1.5 sm:h-2 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-full w-full" />
            </div>
            <p className="text-right text-xs sm:text-sm text-gray-500 mt-1">7/7</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
