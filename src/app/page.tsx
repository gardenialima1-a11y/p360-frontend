"use client";
import React, { useState } from 'react';
import Link from 'next/link'; // ← ADICIONADO: Importamos o componente de link do Next.js

interface AlunoRisco {
  id_aluno: string;
  nome_completo: string;
  perfil_geracional: string;
  ira_score: number;
  ips_atual: number;
}

export default function PersonalDashboard() {
  const [alunos] = useState<AlunoRisco[]>([
    { id_aluno: "1", nome_completo: "Carlos Souza", perfil_geracional: "Homem Maduro", ira_score: 82.4, ips_atual: 58.0 },
    { id_aluno: "2", nome_completo: "Mariana Silva", perfil_geracional: "Mulher Jovem", ira_score: 15.2, ips_atual: 94.5 },
    { id_aluno: "3", nome_completo: "Roberto Antunes", perfil_geracional: "Idoso Longevidade", ira_score: 44.0, ips_atual: 71.2 }
  ]);

  return (
    <div style={{ backgroundColor: '#0A0B0E', color: 'white', minHeight: '100vh', padding: '2rem', fontFamily: 'sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #2C303B', paddingBottom: '1rem', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold' }}>Performance Intelligence <span style={{ color: '#EFFF00' }}>360</span></h1>
          <p style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>Bem-vinda de volta, Ingrid. Monitoramento em tempo real.</p>
        </div>
      </header>

      <main>
        <div style={{ backgroundColor: '#1C1E24', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #2C303B' }}>
          <h2 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>⚠️ Triagem Crítica: Alunos Monitorados</h2>
          <table style={{ width: '100%', textAlign: 'left' }}>
            <thead>
              <tr style={{ color: '#9CA3AF', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                <th style={{ paddingBottom: '0.75rem' }}>Aluno</th>
                <th style={{ paddingBottom: '0.75rem' }}>Perfil</th>
                <th style={{ paddingBottom: '0.75rem' }}>IPS Semanal</th>
                <th style={{ paddingBottom: '0.75rem', textAlign: 'right' }}>Risco de Evasão</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '0.875rem' }}>
              {alunos.map((aluno) => (
                <tr key={aluno.id_aluno} style={{ borderTop: '1px solid #2C303B' }}>
                  {/* ALTERADO: Agora o nome do aluno é um Link dinâmico para a página dele */}
                  <td style={{ padding: '1rem 0' }}>
                    <Link 
                      href={`/aluno/${aluno.id_aluno}`}
                      style={{ 
                        color: '#FFF', 
                        textDecoration: 'none', 
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'color 0.2s'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#EFFF00')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#FFF')}
                    >
                      {aluno.nome_completo}
                    </Link>
                  </td>
                  <td style={{ padding: '1rem 0', color: '#9CA3AF' }}>{aluno.perfil_geracional}</td>
                  <td style={{ padding: '1rem 0' }}><span style={{ backgroundColor: '#FF3B3020', color: '#FF3B30', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>{aluno.ips_atual} pts</span></td>
                  <td style={{ padding: '1rem 0', textAlign: 'right', fontWeight: 'bold', color: aluno.ira_score > 50 ? '#FF3B30' : 'white' }}>{aluno.ira_score}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
