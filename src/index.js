import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout';
import Home from './components/Home/Home.js'
import About from './components/About/About.js'
import Contact from './components/Contact/Contact.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path='/routes-demo' element={<Layout/>}>
      {/* <Route path='/' element={<Layout/>}></Route> */}
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider basename="/routes-demo" router={router} />
  </React.StrictMode>
);
reportWebVitals();
