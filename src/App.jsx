import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import './App.css';

import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import Consumers from './pages/consumers';
import LegalQASection from './pages/LegalQASection';
import AttorneySearch from './pages/FindAttorneySection';
import ContactSection from './pages/ContactSection';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/consumers" element={<Consumers />} />
      <Route path="/services" element={<LegalQASection />} />
      <Route path="/attorney" element={<AttorneySearch />} /> 
      <Route path="/contact" element={<ContactSection />} /> 
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      {/* <ToastContainer /> */}
    </>
  );
};

export default App;
