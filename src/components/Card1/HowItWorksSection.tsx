import React from "react";
import ImgLogo from "../../../public/images/logo_branco.svg";
import Imggrafico from "../../../public/images/grafico.svg";
import Imgprancheta from "../../../public/images/prancheta.svg";


const steps = [
  {
    icon: <img src={Imgprancheta} alt="Logo" className="w-9 h-9" />,
    title: "Responda ao Questionário",
    description: "Leva menos de 5 minutos.",
  },
  {
    icon: <img src={ImgLogo} alt="Logo" className="w-10 h-10" />,
    title: "Melhore com a IA",
    description: "Dicas e conversas para seu dia a dia.",
  },
  {
    icon: <img src={Imggrafico} alt="Logo" className="w-9 h-9" />,
    title: "Receba Seu Relatório",
    description: "Grátis e instantâneo.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="bg-[#F5F9FF] py-[60px] px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">Como Funciona a MindTracking?</h2>
        <div className="w-[365px] h-1 bg-[#bebebe] mx-auto mt-3 mb-12 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#2544F4] flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <button className="bg-[#2544F4] text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-[#1e3ae8] transition">
          Quero Experimentar
        </button>
      </div>
    </section>
  );
};
