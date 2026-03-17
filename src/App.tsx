import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserProvider } from "@/context/UserContext";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyCallBar } from "@/components/StickyCallBar";

function App() {
    return (
        <UserProvider>
            <Router>
                <div className="relative min-h-screen bg-[#111010] overflow-x-hidden">
                    <div className="noise-bg" />
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                    <Footer />
                    <StickyCallBar />
                </div>
            </Router>
        </UserProvider>
    );
}

export default App;