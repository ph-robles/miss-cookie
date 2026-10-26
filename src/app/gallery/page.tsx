import Header from "../../components/Header";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";
 
export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-[#090809] text-[#F0D5DE]">
            <Header />
            <Gallery />
            <Footer />
        </main>
    );
}