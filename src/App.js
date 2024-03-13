import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import LoadingBar from 'react-top-loading-bar'


function App() {
  const [progress, setprogress] = useState(0);
  const [inputText, setInputText] = useState("");
  const search = (e) => {
    var text = e.target.value.toLowerCase();
    setInputText(text);
  }

  return (
    <>
      <Router>
        <Navbar title="Shiv." search={search} Page1="Posts" setprogress={setprogress} />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/about" element={<About input={inputText} setprogress={setprogress} />} />
          <Route exact path="/" element={<Home input={inputText} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
