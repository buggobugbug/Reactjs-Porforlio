import Navbar from './component/Navbar.js';
import Banner from './component/Banner.js';
import Banner1 from './component/Banner1.js';
import Lienhe from './component/Lienhe.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>


    </div>
  );
}

export default App;
