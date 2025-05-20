import React from "react";
import ImgLogo from "../../../public/images/logo_branco.svg";
import Imggrafico from "../../../public/images/grafico.svg";
import Imgprancheta from "../../../public/images/prancheta.svg";


const steps = [
  {
    icon: <img src={Imgprancheta} alt="Logo" className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" />,
    title: "Responda ao Questionário",
    description: "Leva menos de 5 minutos.",
  },
  {
    icon: <img src={ImgLogo} alt="Logo" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />,
    title: "Melhore com a IA",
    description: "Dicas e conversas para seu dia a dia.",
  },
  {
    icon: <img src={Imggrafico} alt="Logo" className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" />,
    title: "Receba Seu Relatório",
    description: "Grátis e instantâneo.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="bg-[#F5F9FF] py-8 sm:py-12 md:py-[60px] px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Como Funciona a MindTracking?</h2>
        <div className="w-[280px] sm:w-[320px] md:w-[365px] h-1 bg-[#bebebe] mx-auto mt-3 mb-8 sm:mb-10 md:mb-12 rounded-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#2544F4] flex items-center justify-center mb-3 sm:mb-4">
                {step.icon}
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-1">{step.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <button className="bg-[#2544F4] text-white text-xs sm:text-sm font-medium px-5 sm:px-6 py-2 rounded-full hover:bg-[#1e3ae8] transition">
          Quero Experimentar
        </button>
      </div>
    </section>
  );
};
