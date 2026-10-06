import Header from "../../components/Header";
import Rates from "../../components/Rates";
import Footer from "@/src/components/Footer";

export default function RatesPage() {
    return (
        <main className="min-h-screen bg-[#0A0908]">
            <Header />
            <Rates />
            <Footer />
        </main>
    );
}