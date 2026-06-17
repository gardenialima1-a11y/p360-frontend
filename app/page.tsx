"use client";
import React, { useState, useEffect } from 'react';

// Interfaces de Tipo de Dados de Performance
interface AlunoRisco {
  id_aluno: string;
  nome_completo: string;
  perfil_geracional: string;
  ira_score: number;
  ips_atual: number;
}

export default function PersonalDashboard() {
  // Mock estruturado de dados de simulação da API enquanto processa o fetch
  const [alunos, setAlunos] = useState<AlunoRisco[]>([
    { id_aluno: "1", nome_completo: "Carlos Souza", perfil_geracional: "Homem Maduro", ira_score: 82.4, ips_atual: 58.0 },
    { id_aluno: "2", nome_completo: "Mariana Silva", perfil_geracional: "Mulher Jovem", ira_score: 15.2, ips_atual: 94.5 },
    { id_aluno: "3", nome_completo: "Roberto Antunes", perfil_geracional: "Idoso Longevidade", ira_score: 44.0, ips_atual: 71.2 }
  ]);

  return (
    <div className="min-h-screen bg-obsidian text-white p-8 font-sans">
      {/* HEADER EXECUTIVO */}
      <header className="flex justify-between items-center mb-8 pb-4 border-b border-cardBorder">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Performance Intelligence <span className="text-cyberNeon">360</span></h1>
          <p className="text-gray-400 text-sm mt-1">Bem-vinda de volta, Ingrid. Monitoramento analítico em tempo real.</p>
        </div>
        <div className="bg-steelGray px-4 py-2 rounded-xl border border-cardBorder text-right">
          <span className="text-xs text-gray-400 block">Média Geral da Consultoria</span>
          <span className="text-xl font-bold text-cyberNeon">74.5 PTS</span>
        </div>
      </header>

      {/* METRIC CARDS GRID */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-steelGray p-6 rounded-xl border border-cardBorder">
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider block">Alunos Monitorados</span>
          <span className="text-3xl font-bold block mt-2">54</span>
        </div>
        <div className="bg-steelGray p-6 rounded-xl border border-cardBorder">
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider block">Faturamento SaaS Ativo</span>
          <span className="text-3xl font-bold block mt-2 text-green-400">R$ 16.200</span>
        </div>
        <div className="bg-steelGray p-6 rounded-xl border border-cardBorder">
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider block">Alertas Críticos de IA</span>
          <span className="text-3xl font-bold block mt-2 text-crimsonAlert">3 ALUNOS</span>
        </div>
      </section>

      {/* CORE INTEL: FUNIL DE RISCO DE EVASÃO */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-steelGray p-6 rounded-xl border border-cardBorder">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            ⚠️ Triagem Crítica: Risco de Abandono (IRA)
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-cardBorder text-gray-400 text-xs uppercase">
                  <th className="pb-3">Aluno</th>
                  <th className="pb-3">Perfil</th>
                  <th className="pb-3 text-center">IPS Semanal</th>
                  <th className="pb-3 text-right">Métrica IRA</th>
                  <th className="pb-3 text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cardBorder text-sm">
                {alunos.map((aluno) => (
                  <tr key={aluno.id_aluno} className="hover:bg-obsidian/50 transition">
                    <td className="py-4 font-medium">{aluno.nome_completo}</td>
                    <td className="py-4 text-gray-400">{aluno.perfil_geracional}</td>
                    <td className="py-4 text-center">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${aluno.ips_atual >= 80 ? 'bg-green-500/10 text-green-400' : aluno.ips_atual >= 60 ? 'bg-yellow-500/10 text-yellow-400' : 'bg-red-500/10 text-crimsonAlert'}`}>
                        {aluno.ips_atual} pts
                      </span>
                    </td>
                    <td className={`py-4 text-right font-bold ${aluno.ira_score >= 70 ? 'text-crimsonAlert' : 'text-gray-300'}`}>
                      {aluno.ira_score}%
                    </td>
                    <td className="py-4 text-right">
                      <button className="bg-obsidian hover:bg-cyberNeon hover:text-black transition border border-cardBorder px-3 py-1 rounded-lg text-xs font-medium">
                        Ver Diagnóstico
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AI INSIGHTS NOTIFICATION FLUID BOX */}
        <div className="bg-steelGray p-6 rounded-xl border border-cardBorder flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-4 text-cyberNeon flex items-center gap-2">
              ✨ P360 Neural Insights
            </h2>
            <div className="space-y-4">
              <div className="p-3 bg-obsidian rounded-lg border-l-4 border-crimsonAlert text-xs">
                <p className="font-semibold text-white">Platô Neural Identificado</p>
                <p className="text-gray-400 mt-1">Carlos Souza estagnou a curva de força no Supino Reto há 21 dias. IA sugere redução de volume em 15%.</p>
              </div>
              <div className="p-3 bg-obsidian rounded-lg border-l-4 border-yellow-400 text-xs">
                <p className="font-semibold text-white">Alerta Hormonal (Foco Feminino)</p>
                <p className="text-gray-400 mt-1">Mariana Silva reportou fase de TPM severa. Sistema autocalibrou a planilha reduzindo repetições de reserva.</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-4 bg-cyberNeon text-black font-bold text-sm py-3 rounded-xl hover:opacity-90 transition">
            Aprovar Ajustes Recomendados
          </button>
        </div>
      </main>
    </div>
  );
}
