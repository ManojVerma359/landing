import './App.css';
import Header from './Components/Header';
import Interior from './Components/Interior';
import Welcome from './Components/Welcome';
import Gallery from './Components/Gallery';
import Around from './Components/Around';
import Discover  from './Components/Discover '
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';
import Creating from './Components/Creating';
import BackToTop from './Components/BackToTop';
import PreLoder from './Components/PreLoder';

function App() {
  return (
<>
<PreLoder/>
<BackToTop/>
<Header/>
<Welcome/>
<Interior/>
<Gallery/>
<Around/>
<Discover/> 
<Creating/>
<Subscribe/>
<Footer/> 

</>
  );
}

export default App;
