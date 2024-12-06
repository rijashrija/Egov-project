// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Previous from './components/Previous';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router';
function App() {
  return (
    <>
    <Navbar/>
    <Body/>
    <Previous/>
    <Footer/>
    </>
  );
}

export default App;
