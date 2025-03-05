import { Montserrat } from "next/font/google"; // Importar la fuente Montserrat
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat", // Definir una variable CSS para Montserrat
  subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] // Especificar el subconjunto que deseas usar
});

export const metadata = {
  title: "Portafolio - Alvaro Medina",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
