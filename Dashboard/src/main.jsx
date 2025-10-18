import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import { CookiesProvider } from 'react-cookie';
createRoot(document.getElementById('root')).render(
  <CookiesProvider>
    <BrowserRouter>
    <Routes>
      <Route exact path='/*' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  </CookiesProvider>
    
)
