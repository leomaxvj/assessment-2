import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Serivces from './components/Services/Serivces';
import {useState} from "react";
import Footer from './components/Footer/Footer';

function App() {
  const[searchinput,setsearchinput] = useState("everything")
  console.log(searchinput,"ttttt")
  return (
    <div className="App">
    <Header
    setsearch={setsearchinput}
    />
    <Serivces 
    values={searchinput}
    />
    <Footer/>
    </div>
  );
}

export default App;
