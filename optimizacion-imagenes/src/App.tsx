import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import { lazy, Suspense } from "react";

const Ejercicio1 = lazy(() => import("./components/Ejercicio1"));
const Ejercicio2 = lazy(() => import("./components/Ejercicio2"));
const Ejercicio3 = lazy(() => import("./components/Ejercicio3"));
const Ejercicio4 = lazy(() => import("./components/Ejercicio4"));
const Ejercicio5 = lazy(() => import("./components/Ejercicio5"));
const TestEjercicio1 = lazy(() => import("./components/TestEjercicio1"));
const TestEjercicio2 = lazy(() => import("./components/TestEjercicio2"));
const TestEjercicio3 = lazy(() => import("./components/TestEjercicio3"));
const TestEjercicio4 = lazy(() => import("./components/TestEjercicio4"));
const Test = lazy(() => import("./components/tutorial/Test"));

function App() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>

      <Router>
        <Navbar />
        <div className="container mx-auto p-4 ">
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ejercicio1" element={<Ejercicio1 />} />
            <Route path="/ejercicio2" element={<Ejercicio2 />} />
            <Route path="/ejercicio3" element={<Ejercicio3 />} />
            <Route path="/ejercicio4" element={<Ejercicio4 />} />
            <Route path="/ejercicio5" element={<Ejercicio5 />} />
            <Route path="/test1" element={<TestEjercicio1 />} />
            <Route path="/test2" element={<TestEjercicio2 />} />
            <Route path="/test3" element={<TestEjercicio3 />} />
            <Route path="/test4" element={<TestEjercicio4 />} />
            <Route path='/tutorial/test' element={<Test />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Suspense>
  );
}
export default App;