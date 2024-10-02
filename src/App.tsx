import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Main from './pages/Main';
import ProductDetail from './pages/Product/ProductDetail/index';
import ProductList from './pages/Product/ProductList/index';
import Contact from './pages/Contact/index';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/detail" element={<ProductDetail />} />
            <Route path="/product/list" element={<ProductList />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
