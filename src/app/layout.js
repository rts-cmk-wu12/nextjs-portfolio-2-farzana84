import { Raleway, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Amina's Portfolio",
  description: "Personal portfolio showcasing projects, skills, and contact info.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   <body className={`flex flex-col min-h-screen antialiased ${raleway.variable} ${ibmPlexMono.variable}`}>
        <Header />
        {children}
        <footer className="bg-foreground text-center py-5 text-sm text-text">Made with ❤️</footer>
      </body>
    </html>
  );
}
