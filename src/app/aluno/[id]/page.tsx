import React from 'react';

export default function AlunoDetalhes({ params }: { params: { id: string } }) {
  // Simulação de dados analíticos vindos do módulo de Fitness Analytics
  const aluno = {
    nome: "Carlos Souza",
    idade: 28,
    objetivo: "Hipertrofia Avançada",
    ips: 82,
    ira: 14,
    iep: "+2.4",
    icp: 91,
    historicoTreinos: [
      { data: "18/06/2026", treino: "Treino A - Inferiores", carga: "240kg", rpe: 9 },
      { data: "16/06/2026", treino: "Treino B - Superiores", carga: "85kg", rpe: 8 },
      { data: "15/06/2026", treino: "Treino C - Cardio & Core", carga: "Meta Atingida", rpe: 7 }
    ]
  };

  return (
    <div style={{ backgroundColor: '#0A0B0E', minHeight: '100vh', color: '#FFF', padding: '40px', fontFamily: 'sans-serif' }}>
      {/* Cabeçalho */}
      <div style={{ borderBottom: '1px solid #242835', paddingBottom: '20px', marginBottom: '30px' }}>
        <h1 style={{ margin: 0, fontSize: '28px' }}>Perfil Analítico do Aluno</h1>
        <p style={{ color: '#AEB3C2', margin: '5px 0 0 0' }}>ID do Registro: {params.id} — Foco em {aluno.objetivo}</p>
      </div>

      {/* Grid de Indicadores Proprietários (Fase 3) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        
        <div style={{ backgroundColor: '#16181F', padding: '20px', borderRadius: '12px', border: '1px solid #242835' }}>
          <span style={{ color: '#AEB3C2', fontSize: '14px' }}>IPS (Performance e Saúde)</span>
          <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#E6FF00', marginTop: '10px' }}>{aluno.ips}<span style={{fontSize:'18px', color:'#AEB3C2'}}> /100</span></div>
          <p style={{ fontSize: '12px', color: '#34C759', margin: '5px 0 0 0' }}>✓ Zona de Excelência</p>
        </div>

        <div style={{ backgroundColor: '#16181F', padding: '20px', borderRadius: '12px', border: '1px solid #242835' }}>
          <span style={{ color: '#AEB3C2', fontSize: '14px' }}>IRA (Risco de Abandono)</span>
          <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#FF3B30', marginTop: '10px' }}>{aluno.ira}%</div>
          <p style={{ fontSize: '12px', color: '#34C759', margin: '5px 0 0 0' }}>↓ Risco Muito Baixo</p>
        </div>

        <div style={{ backgroundColor: '#16181F', padding: '20px', borderRadius: '12px', border: '1px solid #242835' }}>
          <span style={{ color: '#AEB3C2', fontSize: '14px' }}>IEP (Evolução Física)</span>
          <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#34C759', marginTop: '10px' }}>{aluno.iep}</div>
          <p style={{ fontSize: '12px', color: '#AEB3C2', margin: '5px 0 0 0' }}>Massa Magra vs Gorda (Mês)</p>
        </div>

        <div style={{ backgroundColor: '#16181F', padding: '20px', borderRadius: '12px', border: '1px solid #242835' }}>
          <span style={{ color: '#AEB3C2', fontSize: '14px' }}>ICP (Consistência)</span>
          <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#E6FF00', marginTop: '10px' }}>{aluno.icp}%</div>
          <p style={{ fontSize: '12px', color: '#34C759', margin: '5px 0 0 0' }}>✓ Assiduidade Alta</p>
        </div>

      </div>

      {/* Histórico de Treinamento Técnico */}
      <div style={{ backgroundColor: '#16181F', padding: '30px', borderRadius: '12px', border: '1px solid #242835' }}>
        <h2 style={{ margin: '0 0 20px 0', fontSize: '20px', color: '#E6FF00' }}>Histórico Recente de Cargas e Esforço (Analytics)</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #242835', color: '#AEB3C2' }}>
              <th style={{ padding: '12px' }}>Data</th>
              <th style={{ padding: '12px' }}>Sessão Executada</th>
              <th style={{ padding: '12px' }}>Volume Máximo</th>
              <th style={{ padding: '12px' }}>Percepção (RPE)</th>
            </tr>
          </thead>
          <tbody>
            {aluno.historicoTreinos.map((item, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #242835' }}>
                <td style={{ padding: '12px' }}>{item.data}</td>
                <td style={{ padding: '12px', fontWeight: 'bold' }}>{item.treino}</td>
                <td style={{ padding: '12px', color: '#E6FF00' }}>{item.carga}</td>
                <td style={{ padding: '12px' }}><span style={{ backgroundColor: '#242835', padding: '4px 8px', borderRadius: '6px' }}>{item.rpe} / 10</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
