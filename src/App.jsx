import React from 'react'

import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
   <main className="bg-white">
  
    <Router>
        <Routes>
          <Route path="/" element={<Home />}>

          </Route>
        </Routes>
      </Router>
   </main>
  )
}

export default App