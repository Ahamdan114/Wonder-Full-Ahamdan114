import {
    NavBar,
    IntroductionCard,
    AboutMe,
    Projects,
    ContactMe,
    Footer,
    Favicon,
} from "./components/index";

function App() {
    return (
        <div id="Home">
            <Favicon />
            <NavBar />
            <IntroductionCard />
            <AboutMe />
            <Projects />
            <ContactMe />
            <Footer />
        </div>
    );
}

export default App;
