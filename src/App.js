import './App.css';
import { Container } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Page4 from "./pages/Page4"
import Page3 from "./pages/Page3"
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} />
        <Route path='/page3' element={<Page3 />} />
        <Route path='/page4' element={<Page4 />} />
      </Routes>
    </div>
  );
}

export default App;