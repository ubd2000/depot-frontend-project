import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// pages
import Main from './pages/Main';
import ProductDetail from './pages/Product/ProductDetail/index';
import ProductList from './pages/Product/ProductList/index';
import Contact from './pages/Contact/index';
import Test from './pages/Test/index';

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

export default App;
