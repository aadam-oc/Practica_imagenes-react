import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Ejercicio1 from "./components/Ejercicio1";
import Ejercicio2 from "./components/Ejercicio2";
import Ejercicio3 from "./components/Ejercicio3";
import Ejercicio4 from "./components/Ejercicio4";
import Ejercicio5 from "./components/Ejercicio5";
import TestEjercicio1 from "./components/TestEjercicio1";
import TestEjercicio2 from "./components/TestEjercicio2";
import TestEjercicio3 from "./components/TestEjercicio3";
import TestEjercicio4 from "./components/TestEjercicio4";
import Test from "./components/tutorial/Test";
import Footer from "./components/Footer";

function App() {
  return (
  <Router>
  <Navbar />
  <div className="container mx-auto p-4 ">
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/ejercicio1" element={<Ejercicio1 />} />
  <Route path="/ejercicio2" element={<Ejercicio2 />} />
  <Route path="/ejercicio3" element={<Ejercicio3 />} />
  <Route path="/ejercicio4" element={<Ejercicio4 />} />
  <Route path="/ejercicio5" element={<Ejercicio5 />} />
  <Route path="/test1" element={<TestEjercicio1/>} />
  <Route path="/test2" element={<TestEjercicio2/>} />
  <Route path="/test3" element={<TestEjercicio3/>} />
  <Route path="/test4" element={<TestEjercicio4/>} />
  <Route path='/tutorial/test' element={<Test/>} />
  </Routes>
  </div>
  <Footer />
  </Router>
  );
 }
 export default App;