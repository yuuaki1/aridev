import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/ui/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono-Regular.woff2",
  variable: "--font-jetbrainsMono",
  weight: "100 900",
})

export const metadata = {
  title: "ari.dev",
  description: "Portfolio of Arihant Sharma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${geistMono.variable} ${geistSans.variable} antialiased`}
      >
        <Header />
        <StairTransition />
        <PageTransition>
        {children}
        </PageTransition>
      </body>
    </html>
  );
}
