import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

const title = "TEXT PLZ";
const about = "About"
const heading = "Enter your Text";
function App() {
  
  return (<>
    <Navbar title={title}  about={about}/>
    <div className="container">
    <Textform heading={heading}/>
    </div>
    </>
  );
}

export default App;
