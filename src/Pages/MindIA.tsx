import React, { useState } from "react";
import Header from "../components/Header/Header";
import { motion } from "framer-motion";

export default function MindIA() {
  const [messages, setMessages] = useState([
    {
      from: "ia",
      text: "Olá! 👋 Eu sou a Mind IA, sua assistente virtual focada no seu bem-estar mental. Estou aqui para te ouvir, refletir com você e oferecer apoio com base em suas emoções. Como posso te ajudar hoje?",
    }
  ]);

  const [input, setInput] = useState("");

  const quickReplies = [
    "Preciso de dicas para relaxar",
    "Não dormi bem ultimamente",
    "Estou me sentindo ansioso",
    "Como posso me concentrar melhor?",
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    // Simular resposta da IA (pode integrar com API futuramente)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "ia",
          text:
            "Obrigado por compartilhar. Estou aqui para ajudar. Que tal algumas dicas de respiração?",
        },
      ]);
    }, 1000);
  };

  const handleQuickReply = (msg: string) => {
    setMessages([...messages, { from: "user", text: msg }]);
    // Simular resposta também
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "ia",
          text:
            "Entendo. A ansiedade pode ser difícil de lidar. Você gostaria de algumas técnicas de respiração?",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow px-4 sm:px-6 md:px-8 py-6 md:py-8 max-w-4xl mx-auto w-full">
        {/* Área de mensagens */}
        <div className="flex flex-col gap-4 mb-6 min-h-[300px] md:min-h-[400px]">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[85%] sm:max-w-[75%] px-4 py-2 rounded-xl text-sm sm:text-base ${
                msg.from === "user"
                  ? "bg-blue-600 text-white self-end"
                  : "bg-blue-100 text-gray-800 self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Sugestões rápidas com carrossel */}
        <div className="overflow-hidden mb-4">
          <motion.div
            className="flex gap-2 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -200, right: 0 }}
            dragElastic={0.1}
          >
            {quickReplies.map((text, index) => (
              <button
                key={index}
                onClick={() => handleQuickReply(text)}
                className="bg-white border border-blue-500 text-blue-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base hover:bg-blue-50 transition whitespace-nowrap"
              >
                {text}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Campo de input */}
        <div className="flex gap-2 items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-grow border border-gray-300 rounded-full px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base hover:bg-blue-700 transition whitespace-nowrap"
          >
            Enviar
          </button>
        </div>
      </main>
    </div>
  );
}
