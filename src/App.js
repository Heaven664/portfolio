import Navbar from 'components/Navbar'
import Intro from 'components/Intro'
import About from 'components/About'

import 'styles/App.scss'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
    </div>
  );
}

export default App;
