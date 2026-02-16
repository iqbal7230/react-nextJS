import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-6xl mx-auto p-6">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
