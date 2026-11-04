import Header from "../../components/Header";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";
import PrivateGalleryAccessCard from "../../components/PrivateGalleryAccessCard";

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-[#090809] text-[#F0D5DE]">
            <Header />
            <PrivateGalleryAccessCard />
            <Gallery />
            <Footer />
        </main>
    );
}