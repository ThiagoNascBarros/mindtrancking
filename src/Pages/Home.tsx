import React from "react";
import Header from "../components/Header/Header.tsx";
import ImgHero from "../../public/ImagemHero.png"; 

export default function Home() {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl bg-[#F5F9FF] mx-auto px-[120px] py-20 flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Texto à esquerda */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Cuide da sua mente,
              <br />
              <span className="text-blue-600">transforme sua vida.</span>
            </h1>
            <p className="text-gray-600 text-lg">
              A MindTracking está aqui para ajudar você a entender e melhorar
              sua saúde mental.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">
              Comece sua jornada
            </button>
          </div>

          {/* Imagem à direita */}
          <div className="md:w-1/2 flex justify-center mb-12 md:mb-0 w-30">
            <img
              src={ImgHero}
              alt="Ilustração"
              className="w-full max-w-md"
            />
          </div>
        </section>
      </main>
        </div>
  );
}
