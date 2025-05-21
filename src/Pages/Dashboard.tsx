import React from "react";
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const bemEstarData = [
  { dia: "Seg", valor: 6 },
  { dia: "Ter", valor: 7 },
  { dia: "Qua", valor: 5 },
  { dia: "Qui", valor: 8 },
  { dia: "Sex", valor: 7 },
  { dia: "Sáb", valor: 8 },
  { dia: "Dom", valor: 10 },
];

const estresseData = [
  { dia: "Seg", valor: 7 },
  { dia: "Ter", valor: 3 },
  { dia: "Qua", valor: 9 },
  { dia: "Qui", valor: 2 },
  { dia: "Sex", valor: 8 },
  { dia: "Sáb", valor: 4 },
  { dia: "Dom", valor: 5 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow px-4 md:px-20 py-10">
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Seu Desempenho Semanal
        </h1>

        {/* Box de informações */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-10 text-sm md:text-base">
          <div className="border-4 border-blue-500 px-6 py-4 rounded-md text-center">
            <strong>Nível de Estresse</strong>
            <p>Sua média foi 4/10 (leve).</p>
          </div>
          <div className="border-4 border-blue-500 px-6 py-4 rounded-md text-center">
            <strong>Qualidade do Sono</strong>
            <p>Sua média de sono foi de 7h por noite.</p>
          </div>
        </div>

        {/* Gráficos */}
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Gráfico de Bem-estar */}
          <div className="border-4 border-blue-500 rounded-md p-4">
            <h2 className="text-lg font-medium mb-4">Gráfico de Bem-estar</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={bemEstarData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: '0.5rem',
                    color: '#1F2937'
                  }}
                  labelStyle={{ color: '#1F2937' }}
                />
                <Line
                  type="monotone"
                  dataKey="valor"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  fill="#93C5FD"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Gráfico de Estresse */}
          <div className="border-4 border-blue-500 rounded-md p-4">
            <h2 className="text-lg font-medium mb-4">Gráfico de Estresse</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={estresseData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: '0.5rem',
                    color: '#1F2937'
                  }}
                  labelStyle={{ color: '#1F2937' }}
                  itemStyle={{ color: '#3B82F6' }}
                />
                <Bar dataKey="valor" fill="rgba(219, 236, 255, 0.8)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
