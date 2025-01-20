import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function layout ({children}: Readonly<{ children: React.ReactNode }>){
    return (
        <>
            <main className="font-work-sans">
                <Announcements/>
                <Navbar/>
                {children}
                <Footer/>
            </main>
        </>
    )
}