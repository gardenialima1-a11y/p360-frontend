import React from 'react';

export const metadata = {
  title: 'Performance Intelligence 360',
  description: 'Plataforma de Monitoramento Analítico',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0A0B0E' }}>
        {children}
      </body>
    </html>
  );
}
