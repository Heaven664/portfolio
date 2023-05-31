import { useState } from 'react';

import Navbar from 'components/Navbar';
import Intro from 'components/Intro';
import About from 'components/About';
import Projects from 'components/Projects';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';

import 'styles/App.scss';


function App() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="App">
      {menu && < Sidebar closeMenu={() => setMenu(false)} />}
      <Navbar openMenu={() => setMenu(true)} />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
