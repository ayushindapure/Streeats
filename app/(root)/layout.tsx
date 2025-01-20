import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ShiftingCountdown from "../components/ShiftingCountdown";

export default function layout ({children}: Readonly<{ children: React.ReactNode }>){
    return (
        <>
            <main className="font-work-sans">
                {/* <ShiftingCountdown/> */}
                <Navbar/>
                {children}
                <Footer/>
            </main>
        </>
    )
}