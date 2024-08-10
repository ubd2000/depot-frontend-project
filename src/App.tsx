import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Main from './pages/main';
import ProductDetail from './pages/product/product-detail';
import ProductList from './pages/product/product-list';
import Contact from './pages/contact';
import Test from './pages/test';
// css
import './styles/categories_responsive.css';
import './styles/categories_styles.css';
import './styles/contact_responsive.css';
import './styles/contact_styles.css';
import './styles/main_styles.css';
import './styles/responsive.css';
import './styles/single_responsive.css';
import './styles/single_styles.css';
// js
import './js/categories_custom.js';
import './js/contact_custom.js';
import './js/custom.js';
import './js/single_custom.js';

const App: React.FC = () => {

  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/test">Test</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/detail" element={<ProductDetail />} />
            <Route path="/product/list" element={<ProductList />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
