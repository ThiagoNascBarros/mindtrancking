import React from "react";
import Header from "../components/Header/Header.tsx";
import ImgHero from "../../public/ImagemHero.png";
import ImgMenino from "../../public/images/menino_feliz.png";
import { FeatureCard } from "../components/Card/FeatureCard";
import Footer from "../components/Footer/Footer.tsx";
import { HowItWorksSection } from "../components/Card1/HowItWorksSection.tsx";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#F5F9FF] mx-auto px-[60px] py-10 flex flex-col-reverse md:flex-row items-center justify-center text-center gap-10">
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
            <img src={ImgHero} alt="Ilustração" className="w-full max-w-md" />
          </div>
        </section>
        {/* Seção: Por que escolher a MindTracking? */}
        <section className="bg-white py-[60px] px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Por que escolher a MindTracking?
              </h2>
              <div className="w-[365px] h-1 bg-[#bebebe] mx-auto mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon="/images/cadeado.svg"
                title="Um espaço seguro para sua saúde mental"
                description="Somos uma plataforma que combina tecnologia e empatia para ajudar você a monitorar seu bem-estar emocional. Tudo aqui é gratuito e sigiloso."
              />
              <FeatureCard
                icon="/images/sinal.svg"
                title="Relatório para compartilhar com seu profissional"
                description="Seu Relatório Semanal é um resumo organizado. Ele reúne dados como humor, horas de sono e níveis de estresse, transformando-os em um dashboard profissional e fácil de entender."
              />
              <FeatureCard
                icon="/images/logo_preta.svg"
                title="Conheça a Mind IA, sua aliada emocional"
                description="Conheça Mind IA, sua companheira virtual de autocuidado. Desenvolvida para ser uma aliada emocional, ela está aqui para ouvir você com empatia e oferecer suporte sempre que precisar."
              />
            </div>
          </div>
        </section>
        {/* Seção: Como funciona */}
        <HowItWorksSection />
        {/* Seção: Não ignore suas emoções */}
        <section className="bg-white px-[60px] py-10 flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left gap-10">
          {/* Imagem à esquerda */}
          <div className="max-w-md w-full flex justify-center">
            <img
              src={ImgMenino}
              alt="Menino feliz com ícones"
              className="w-full h-auto max-w-[350px]"
            />
          </div>

          {/* Texto à direita */}
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Não ignore suas emoções
              <br />
              <span className="text-[#2544F4]">monitore-as com precisão.</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Junte-se a usuários que já melhoraram sua saúde mental com a
              MindTracking. Totalmente gratuito para começar!
            </p>
            <button className="bg-[#2544F4] text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-[#1e3ae8] transition">
              Comece Agora
            </button>
          </div>
        </section>
      </main>
      {/* Seção: Footer */}
      <Footer />
    </div>
  );
}
