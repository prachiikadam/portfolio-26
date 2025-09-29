import Intro from "./Intro";
import Navbar from "./Navbar";
import GetInTouchSection from "./GetInTouchSection";
import Footer from "./Footer";
import ProfileSection from "./ProfileSection";
import TechStackSection from "./TechStackSection";
import ProjectsSection from "./ProjectsSection";

export default function HeroMain(){
    return(
        <>
            <Navbar/>
            <main className="pt-32">
                <Intro/>
                <ProfileSection/>
                <TechStackSection/>
                <ProjectsSection/>
                <GetInTouchSection/>
                <Footer/>
            </main>
            
        </>  
    )
}