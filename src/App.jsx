import { Route, Routes } from 'react-router-dom';
import './App.css'
// import styled from 'styled-components';
import Home from './pages/Home';
import Header from './components/Header';
import { createContext } from 'react';
import data from "./assets/DownloadData";

export const DataContext = createContext(null);

function App() {
  return (
    <>
      <Header />
      <DataContext.Provider value={data}>
        <Routes>
          <Route path='*' element={<div>404 <br />このページも作り直す</div>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </DataContext.Provider>
    </>
  )
}

export default App
