import {
    NavBar,
    IntroductionCard,
    AboutMe,
    Projects,
    ContactMe,
    Footer,
} from "./components/index";

function App() {
    return (
        <div id="Home">
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
