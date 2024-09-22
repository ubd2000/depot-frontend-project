import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// pages
import Main from './pages/Main';
import ProductDetail from './pages/Product/ProductDetail/index';
import ProductList from './pages/Product/ProductList/index';
import Contact from './pages/Contact/index';
import Test from './pages/Test/index';
// css
import './assets/styles/bootstrap4/bootstrap.min.css';
import './assets/styles/categories_responsive.css';
import './assets/styles/categories_styles.css';
import './assets/styles/contact_responsive.css';
import './assets/styles/contact_styles.css';
import './assets/styles/main_styles.css';
import './assets/styles/responsive.css';
import './assets/styles/single_responsive.css';
import './assets/styles/single_styles.css';
// js
import 'jquery';
import './assets/styles/bootstrap4/popper.js';
// import './assets/styles/bootstrap4/bootstrap.min.js';
import './assets/js/categories_custom.js';
import './assets/js/contact_custom.js';
import './assets/js/custom.js';
import './assets/js/single_custom.js';
import './assets/js/jquery-3.2.1.min.js';
// plugin
import './assets/plugins/font-awesome-4.7.0/css/font-awesome.min.css';
import './assets/plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import './assets/plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import './assets/plugins/OwlCarousel2-2.2.1/animate.css';
import './assets/plugins/Isotope/isotope.pkgd.min.js';
// import './assets/plugins/OwlCarousel2-2.2.1/owl.carousel.js';
import './assets/plugins/easing/easing.js';

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
