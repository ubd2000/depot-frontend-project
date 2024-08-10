import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Main from './pages/main';
import Test from './pages/test';
import ProductDetail from './pages/product/product-detail';
import ProductList from './pages/product/product-list';
import Contact from './pages/contact';

const App: React.FC = () => {
  const [count, setCount] = useState(0)

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
