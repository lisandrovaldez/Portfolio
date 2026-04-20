import { Hero } from "./sections/Hero/Hero";
import { About } from "./sections/About/About";
import { Stack } from "./sections/Stack/Stack";
import { Projects } from "./sections/Projects/Projects";
import { Contact } from "./sections/Contact/Contact";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { useScrollSnap } from "./hooks/useScrollSnap";

function App() {
  useScrollSnap();
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
