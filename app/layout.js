export const metadata = {
  title: "Solução Veterinária",
  description: "Consultoria Veterinária Premium",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
