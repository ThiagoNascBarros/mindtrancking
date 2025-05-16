import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


export default function Questionarios() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-10">
        {/* Título e subtítulo */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Seus Questionários Diários
          </h1>
          <p className="text-gray-600 mt-2">
            Responda nossos questionários personalizados e acompanhe seu
            progresso na jornada de bem-estar mental.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-20">
          {/* Card: Questionário Diário */}
          <div className="border-4 border-blue-600 rounded-lg p-6 w-full max-w-xs text-start shadow-sm">
            <div className="flex text-start mb-3 gap-2">
              <img
                src="/images/engrenagem.svg"
                alt="Ícone de Questionário"
                className="w-8 h-8"
              />
              <h2 className="font-semibold text-lg mb-2">
                Questionário Diário
              </h2>
            </div>
            <p className="text-sm text-gray-700 mb-4">
              Conte para nós como foram as partes mais importantes do seu dia.
            </p>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition">
              Iniciar
            </button>
          </div>

          {/* Card: Progresso Semanal */}
          <div className="border-4 border-blue-600 rounded-lg p-6 w-full max-w-xl shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
              <img
                src="/images/evolucao.svg"
                alt="Ícone de Questionário"
                className="w-8 h-8 mx-auto"
              />
                <h2 className="font-medium text-lg">Seu Progresso Semanal</h2>
              </div>
              <button className="bg-blue-600 text-white px-4 py-1.5 text-sm rounded-full hover:bg-blue-700 transition">
                Acessar
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              100% dos questionários completados
            </p>
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-full w-full" />
            </div>
            <p className="text-right text-sm text-gray-500 mt-1">7/7</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
