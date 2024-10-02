import React from 'react'
import {
  product_1, product_2, product_3, product_4, product_5,
  product_6, product_7, product_8, product_9, product_10
} from '../../../utils/images.import';
import Footer from '../../../layouts/footer';

const ProductList: React.FC = () => {
  return (
    <div className="super_container">

      {/* <!-- Header --> */}

      <header className="header trans_300">

        {/* <!-- Top Navigation --> */}

        <div className="top_nav">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="top_nav_left">free shipping on all u.s orders over $50</div>
              </div>
              <div className="col-md-6 text-right">
                <div className="top_nav_right">
                  <ul className="top_nav_menu">

                    {/* <!-- Currency / Language / My Account --> */}

                    <li className="currency">
                      <a href="#">
                        usd
                        <i className="fa fa-angle-down"></i>
                      </a>
                      <ul className="currency_selection">
                        <li><a href="#">cad</a></li>
                        <li><a href="#">aud</a></li>
                        <li><a href="#">eur</a></li>
                        <li><a href="#">gbp</a></li>
                      </ul>
                    </li>
                    <li className="language">
                      <a href="#">
                        English
                        <i className="fa fa-angle-down"></i>
                      </a>
                      <ul className="language_selection">
                        <li><a href="#">French</a></li>
                        <li><a href="#">Italian</a></li>
                        <li><a href="#">German</a></li>
                        <li><a href="#">Spanish</a></li>
                      </ul>
                    </li>
                    <li className="account">
                      <a href="#">
                        My Account
                        <i className="fa fa-angle-down"></i>
                      </a>
                      <ul className="account_selection">
                        <li><a href="#"><i className="fa fa-sign-in" aria-hidden="true"></i>Sign In</a></li>
                        <li><a href="#"><i className="fa fa-user-plus" aria-hidden="true"></i>Register</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Main Navigation --> */}

        <div className="main_nav_container">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-right">
                <div className="logo_container">
                  <a href="/">colo<span>shop</span></a>
                </div>
                <nav className="navbar">
                  <ul className="navbar_menu">
                    <li><a href="/">home</a></li>
                    <li><a href="#">shop</a></li>
                    <li><a href="#">promotion</a></li>
                    <li><a href="#">pages</a></li>
                    <li><a href="#">blog</a></li>
                    <li><a href="/contact">contact</a></li>
                  </ul>
                  <ul className="navbar_user">
                    <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-user" aria-hidden="true"></i></a></li>
                    <li className="checkout">
                      <a href="#">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span id="checkout_items" className="checkout_items">2</span>
                      </a>
                    </li>
                  </ul>
                  <div className="hamburger_container">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

      </header>

      <div className="fs_menu_overlay"></div>

      {/* <!-- Hamburger Menu --> */}

      <div className="hamburger_menu">
        <div className="hamburger_close"><i className="fa fa-times" aria-hidden="true"></i></div>
        <div className="hamburger_menu_content text-right">
          <ul className="menu_top_nav">
            <li className="menu_item has-children">
              <a href="#">
                usd
                <i className="fa fa-angle-down"></i>
              </a>
              <ul className="menu_selection">
                <li><a href="#">cad</a></li>
                <li><a href="#">aud</a></li>
                <li><a href="#">eur</a></li>
                <li><a href="#">gbp</a></li>
              </ul>
            </li>
            <li className="menu_item has-children">
              <a href="#">
                English
                <i className="fa fa-angle-down"></i>
              </a>
              <ul className="menu_selection">
                <li><a href="#">French</a></li>
                <li><a href="#">Italian</a></li>
                <li><a href="#">German</a></li>
                <li><a href="#">Spanish</a></li>
              </ul>
            </li>
            <li className="menu_item has-children">
              <a href="#">
                My Account
                <i className="fa fa-angle-down"></i>
              </a>
              <ul className="menu_selection">
                <li><a href="#"><i className="fa fa-sign-in" aria-hidden="true"></i>Sign In</a></li>
                <li><a href="#"><i className="fa fa-user-plus" aria-hidden="true"></i>Register</a></li>
              </ul>
            </li>
            <li className="menu_item"><a href="#">home</a></li>
            <li className="menu_item"><a href="#">shop</a></li>
            <li className="menu_item"><a href="#">promotion</a></li>
            <li className="menu_item"><a href="#">pages</a></li>
            <li className="menu_item"><a href="#">blog</a></li>
            <li className="menu_item"><a href="#">contact</a></li>
          </ul>
        </div>
      </div>

      <div className="container product_section_container">
        <div className="row">
          <div className="col product_section clearfix">

            {/* <!-- Breadcrumbs --> */}

            <div className="breadcrumbs d-flex flex-row align-items-center">
              <ul>
                <li><a href="/">Home</a></li>
                <li className="active"><a href="/"><i className="fa fa-angle-right" aria-hidden="true"></i>Men's</a></li>
              </ul>
            </div>

            {/* <!-- Sidebar --> */}

            <div className="sidebar">
              <div className="sidebar_section">
                <div className="sidebar_title">
                  <h5>Product Category</h5>
                </div>
                <ul className="sidebar_categories">
                  <li><a href="#">Men</a></li>
                  <li className="active"><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>Women</a></li>
                  <li><a href="#">Accessories</a></li>
                  <li><a href="#">New Arrivals</a></li>
                  <li><a href="#">Collection</a></li>
                  <li><a href="#">Shop</a></li>
                </ul>
              </div>

              {/* <!-- Price Range Filtering --> */}
              <div className="sidebar_section">
                <div className="sidebar_title">
                  <h5>Filter by Price</h5>
                </div>
                <p>
                  <input type="text" id="amount" readOnly style={{ border: 0, color: "#f6931f", fontWeight: "bold" }} />
                </p>
                <div id="slider-range"></div>
                <div className="filter_button"><span>filter</span></div>
              </div>

              {/* <!-- Sizes --> */}
              <div className="sidebar_section">
                <div className="sidebar_title">
                  <h5>Sizes</h5>
                </div>
                <ul className="checkboxes">
                  <li><i className="fa fa-square-o" aria-hidden="true"></i><span>S</span></li>
                  <li className="active"><i className="fa fa-square" aria-hidden="true"></i><span>M</span></li>
                  <li><i className="fa fa-square-o" aria-hidden="true"></i><span>L</span></li>
                  <li><i className="fa fa-square-o" aria-hidden="true"></i><span>XL</span></li>
                  <li><i className="fa fa-square-o" aria-hidden="true"></i><span>XXL</span></li>
                </ul>
              </div>

              {/* <!-- Color --> */}
              <div className="sidebar_section">
                <div className="sidebar_title">
                  <h5>Color</h5>
                </div>
                <ul className="checkboxes">
                  <li><i className="fa fa-square-o" aria-hidden="true"></i><span>Black</span></li>
                  <li className="active"><i className="fa fa-square" aria-hidden="true"></i><span>Pink</span></li>
                  <li><i className="fa fa-square-o" aria-hidden="true"></i><span>White</span></li>
                  <li><i className="fa fa-square-o" aria-hidden="true"></i><span>Blue</span></li>
                  <li><i className="fa fa-square-o" aria-hidden="true"></i><span>Orange</span></li>
                  <li><i className="fa fa-square-o" aria-hidden="true"></i><span>White</span></li>
                  <li><i className="fa fa-square-o" aria-hidden="true"></i><span>Blue</span></li>
                  <li><i className="fa fa-square-o" aria-hidden="true"></i><span>Orange</span></li>
                  <li><i className="fa fa-square-o" aria-hidden="true"></i><span>White</span></li>
                  <li><i className="fa fa-square-o" aria-hidden="true"></i><span>Blue</span></li>
                  <li><i className="fa fa-square-o" aria-hidden="true"></i><span>Orange</span></li>
                </ul>
                <div className="show_more">
                  <span><span>+</span>Show More</span>
                </div>
              </div>

            </div>

            {/* <!-- Main Content --> */}

            <div className="main_content">

              {/* <!-- Products --> */}

              <div className="products_iso">
                <div className="row">
                  <div className="col">

                    {/* <!-- Product Sorting --> */}

                    <div className="product_sorting_container product_sorting_container_top">
                      <ul className="product_sorting">
                        <li>
                          <span className="type_sorting_text">Default Sorting</span>
                          <i className="fa fa-angle-down"></i>
                          <ul className="sorting_type">
                            <li className="type_sorting_btn" data-isotope-option='{ "sortBy": "original-order" }'><span>Default Sorting</span></li>
                            <li className="type_sorting_btn" data-isotope-option='{ "sortBy": "price" }'><span>Price</span></li>
                            <li className="type_sorting_btn" data-isotope-option='{ "sortBy": "name" }'><span>Product Name</span></li>
                          </ul>
                        </li>
                        <li>
                          <span>Show</span>
                          <span className="num_sorting_text">6</span>
                          <i className="fa fa-angle-down"></i>
                          <ul className="sorting_num">
                            <li className="num_sorting_btn"><span>6</span></li>
                            <li className="num_sorting_btn"><span>12</span></li>
                            <li className="num_sorting_btn"><span>24</span></li>
                          </ul>
                        </li>
                      </ul>
                      <div className="pages d-flex flex-row align-items-center">
                        <div className="page_current">
                          <span>1</span>
                          <ul className="page_selection">
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                          </ul>
                        </div>
                        <div className="page_total"><span>of</span> 3</div>
                        <div id="next_page" className="page_next"><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
                      </div>

                    </div>

                    {/* <!-- Product Grid --> */}

                    <div className="product-grid">

                      {/* <!-- Product 1 --> */}

                      <div className="product-item men">
                        <div className="product discount product_filter">
                          <div className="product_image">
                            <img src={product_1} alt="" />
                          </div>
                          <div className="favorite favorite_left"></div>
                          <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                          <div className="product_info">
                            <h6 className="product_name"><a href="/product/detail">Fujifilm X100T 16 MP Digital Camera (Silver)</a></h6>
                            <div className="product_price">$520.00<span>$590.00</span></div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                      </div>

                      {/* <!-- Product 2 --> */}

                      <div className="product-item women">
                        <div className="product product_filter">
                          <div className="product_image">
                            <img src={product_2} alt="" />
                          </div>
                          <div className="favorite"></div>
                          <div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center"><span>new</span></div>
                          <div className="product_info">
                            <h6 className="product_name"><a href="/product/detail">Samsung CF591 Series Curved 27-Inch FHD Monitor</a></h6>
                            <div className="product_price">$610.00</div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                      </div>

                      {/* <!-- Product 3 --> */}

                      <div className="product-item women">
                        <div className="product product_filter">
                          <div className="product_image">
                            <img src={product_3} alt="" />
                          </div>
                          <div className="favorite"></div>
                          <div className="product_info">
                            <h6 className="product_name"><a href="/product/detail">Blue Yeti USB Microphone Blackout Edition</a></h6>
                            <div className="product_price">$120.00</div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                      </div>

                      {/* <!-- Product 4 --> */}

                      <div className="product-item accessories">
                        <div className="product product_filter">
                          <div className="product_image">
                            <img src={product_4} alt="" />
                          </div>
                          <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
                          <div className="favorite favorite_left"></div>
                          <div className="product_info">
                            <h6 className="product_name"><a href="/product/detail">DYMO LabelWriter 450 Turbo Thermal Label Printer</a></h6>
                            <div className="product_price">$410.00</div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                      </div>

                      {/* <!-- Product 5 --> */}

                      <div className="product-item women men">
                        <div className="product product_filter">
                          <div className="product_image">
                            <img src={product_5} alt="" />
                          </div>
                          <div className="favorite"></div>
                          <div className="product_info">
                            <h6 className="product_name"><a href="/product/detail">Pryma Headphones, Rose Gold & Grey</a></h6>
                            <div className="product_price">$180.00</div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                      </div>

                      {/* <!-- Product 6 --> */}

                      <div className="product-item accessories">
                        <div className="product discount product_filter">
                          <div className="product_image">
                            <img src={product_6} alt="" />
                          </div>
                          <div className="favorite favorite_left"></div>
                          <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                          <div className="product_info">
                            <h6 className="product_name"><a href="/product/detail">Fujifilm X100T 16 MP Digital Camera (Silver)</a></h6>
                            <div className="product_price">$520.00<span>$590.00</span></div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                      </div>

                      {/* <!-- Product 7 --> */}

                      <div className="product-item women">
                        <div className="product product_filter">
                          <div className="product_image">
                            <img src={product_7} alt="" />
                          </div>
                          <div className="favorite"></div>
                          <div className="product_info">
                            <h6 className="product_name"><a href="/product/detail">Samsung CF591 Series Curved 27-Inch FHD Monitor</a></h6>
                            <div className="product_price">$610.00</div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                      </div>

                      {/* <!-- Product 8 --> */}

                      <div className="product-item accessories">
                        <div className="product product_filter">
                          <div className="product_image">
                            <img src={product_8} alt="" />
                          </div>
                          <div className="favorite"></div>
                          <div className="product_info">
                            <h6 className="product_name"><a href="/product/detail">Blue Yeti USB Microphone Blackout Edition</a></h6>
                            <div className="product_price">$120.00</div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                      </div>

                      {/* <!-- Product 9 --> */}

                      <div className="product-item men">
                        <div className="product product_filter">
                          <div className="product_image">
                            <img src={product_9} alt="" />
                          </div>
                          <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
                          <div className="favorite favorite_left"></div>
                          <div className="product_info">
                            <h6 className="product_name"><a href="/product/detail">DYMO LabelWriter 450 Turbo Thermal Label Printer</a></h6>
                            <div className="product_price">$410.00</div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                      </div>

                      {/* <!-- Product 10 --> */}

                      <div className="product-item men">
                        <div className="product product_filter">
                          <div className="product_image">
                            <img src={product_10} alt="" />
                          </div>
                          <div className="favorite"></div>
                          <div className="product_info">
                            <h6 className="product_name"><a href="/product/detail">Pryma Headphones, Rose Gold & Grey</a></h6>
                            <div className="product_price">$180.00</div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                      </div>

                      {/* <!-- Product 11 --> */}

                      <div className="product-item women men">
                        <div className="product product_filter">
                          <div className="product_image">
                            <img src={product_5} alt="" />
                          </div>
                          <div className="favorite"></div>
                          <div className="product_info">
                            <h6 className="product_name"><a href="/product/detail">Pryma Headphones, Rose Gold & Grey</a></h6>
                            <div className="product_price">$180.00</div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                      </div>

                      {/* <!-- Product 12 --> */}

                      <div className="product-item accessories">
                        <div className="product discount product_filter">
                          <div className="product_image">
                            <img src={product_6} alt="" />
                          </div>
                          <div className="favorite favorite_left"></div>
                          <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                          <div className="product_info">
                            <h6 className="product_name"><a href="/product/detail">Fujifilm X100T 16 MP Digital Camera (Silver)</a></h6>
                            <div className="product_price">$520.00<span>$590.00</span></div>
                          </div>
                        </div>
                        <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                      </div>
                    </div>

                    {/* <!-- Product Sorting --> */}

                    <div className="product_sorting_container product_sorting_container_bottom clearfix">
                      <ul className="product_sorting">
                        <li>
                          <span>Show:</span>
                          <span className="num_sorting_text">04</span>
                          <i className="fa fa-angle-down"></i>
                          <ul className="sorting_num">
                            <li className="num_sorting_btn"><span>01</span></li>
                            <li className="num_sorting_btn"><span>02</span></li>
                            <li className="num_sorting_btn"><span>03</span></li>
                            <li className="num_sorting_btn"><span>04</span></li>
                          </ul>
                        </li>
                      </ul>
                      <span className="showing_results">Showing 1–3 of 12 results</span>
                      <div className="pages d-flex flex-row align-items-center">
                        <div className="page_current">
                          <span>1</span>
                          <ul className="page_selection">
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                          </ul>
                        </div>
                        <div className="page_total"><span>of</span> 3</div>
                        <div id="next_page_1" className="page_next"><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Benefit --> */}

      <div className="benefit">
        <div className="container">
          <div className="row benefit_row">
            <div className="col-lg-3 benefit_col">
              <div className="benefit_item d-flex flex-row align-items-center">
                <div className="benefit_icon"><i className="fa fa-truck" aria-hidden="true"></i></div>
                <div className="benefit_content">
                  <h6>free shipping</h6>
                  <p>Suffered Alteration in Some Form</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 benefit_col">
              <div className="benefit_item d-flex flex-row align-items-center">
                <div className="benefit_icon"><i className="fa fa-money" aria-hidden="true"></i></div>
                <div className="benefit_content">
                  <h6>cach on delivery</h6>
                  <p>The Internet Tend To Repeat</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 benefit_col">
              <div className="benefit_item d-flex flex-row align-items-center">
                <div className="benefit_icon"><i className="fa fa-undo" aria-hidden="true"></i></div>
                <div className="benefit_content">
                  <h6>45 days return</h6>
                  <p>Making it Look Like Readable</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 benefit_col">
              <div className="benefit_item d-flex flex-row align-items-center">
                <div className="benefit_icon"><i className="fa fa-clock-o" aria-hidden="true"></i></div>
                <div className="benefit_content">
                  <h6>opening all week</h6>
                  <p>8AM - 09PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Newsletter --> */}

      <div className="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="newsletter_text d-flex flex-column justify-content-center align-items-lg-start align-items-md-center text-center">
                <h4>Newsletter</h4>
                <p>Subscribe to our newsletter and get 20% off your first purchase</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-lg-end justify-content-center">
                <input id="newsletter_email" type="email" placeholder="Your email" required data-error="Valid email is required." />
                <button id="newsletter_submit" type="submit" className="newsletter_submit_btn trans_300" value="Submit">subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProductList;
