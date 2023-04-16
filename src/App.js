import '@aws-amplify/ui-react/styles.css';
import { useState } from 'react';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Product from './component/Product';


function App() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
  <div className="App">
    <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
    <Footer/>

    </div>
  );
}

export default App;
