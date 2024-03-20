import React from 'react';
import Home from './components/Home.js';
import Layout from './Layout.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search.js';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="" element={< Home/>} />
          <Route path='search/:search' element={<Search/>}/>
          {/* <Route path='item/:id' element={<ItemPage/>}/> */}

        </Route>
      </Routes>
    </Router>
  );
}

export default App;