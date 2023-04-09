import { motion } from "framer-motion";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";

function App() {
  return (
    <div>
      <Header />
      <motion.section id="home" key="home" className="scroll-mt-[60px]">
        <Home />
      </motion.section>
      <motion.section id="about" key="about" className="scroll-mt-[60px]">
        <About />
      </motion.section>
      <motion.section id="services" key="services" className="scroll-mt-[60px]">
        <Services />
      </motion.section>
    </div>
  );
}

export default App;
