import "./globals.css";

export const metadata = {
  title: "Solução Veterinária | Consultoria Veterinária em Pecuária Leiteira",
  description:
    "Consultoria veterinária, qualidade do leite, nutrição de ruminantes, gestão rural e capacitação técnica em Patrocínio, Triângulo Mineiro e Alto Paranaíba.",
  keywords: [
    "Solução Veterinária",
    "consultoria veterinária",
    "pecuária leiteira",
    "qualidade do leite",
    "nutrição de ruminantes",
    "mastite",
    "CCS",
    "CBT",
    "Patrocínio MG",
    "Triângulo Mineiro",
    "Alto Paranaíba",
  ],
  openGraph: {
    title: "Solução Veterinária",
    description:
      "Ciência, manejo e resultado para transformar a pecuária leiteira.",
    images: ["/images/hero-pasto.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
