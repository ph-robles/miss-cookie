import Header from "../../components/Header";
import Gallery from "../../components/Gallery";
import Footer from "@/src/components/Footer";

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-[#151311]">
            <Header />
            <Gallery />
            <Footer />
        </main>
    );
}