import type { Metadata } from "next";

import Etiquette from "../../components/Etiquette";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export const metadata: Metadata = {
    title: "Etiquette | Miss Cookie",
    description:
        "A thoughtful guide to privacy, communication, punctuality, presentation and mutual respect before meeting Miss Cookie.",
};

export default function EtiquettePage() {
    return (
        <main className="min-h-screen bg-[#090809] text-[#F0D5DE]">
            <Header />
            <Etiquette />
            <Footer />
        </main>
    );
}
