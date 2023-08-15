/*eslint-disable */
import React, { useState,useEffect } from 'react'
import Footer from '../../shared/Footer'
import Header from '../../shared/Header'
import { NavLink } from 'react-router-dom'

const Shop = () => {
    let [isAdd, setIsAdd] = useState(false)
    let addToWishList = () => {
setIsAdd(true)
    }
    useEffect(() => {
        $('#slider-range').slider({
          range: true,
          min: 0,
          max: 100,
          values: [20, 80],
          slide: function(event, ui) {
            // Do something when the slider is moved
          }
        });
      }, []);
  return (
    <>
<Header />


    {/* <!-- main-area --> */}
    <main className="main--area">

        {/* <!-- breadcrumb-area --> */}
        <section
      className="breadcrumb-area breadcrumb__hide-img"
      data-background="assets/img/bg/breadcrumb_bg02.jpg"
      style={{backgroundImage: 'url("assets/img/bg/breadcrumb_bg02.jpg")'}}
    >
      <div className="container">
        <div className="breadcrumb__wrapper">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb__content">
                <h2 className="title">Sabki Shop</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><NavLink to="/auth/home">Home</NavLink></li>
                    <li className="breadcrumb-item active" aria-current="page">Shop</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        {/* <!-- breadcrumb-area-end --> */}

        {/* <!-- shop-area --> */}
        <section className="shop-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-md-11 order-2 order-lg-0">
                        <aside className="shop-sidebar">
                            <div className="shop__widget">
                                <h4 className="shop__widget-title">search</h4>
                                <div className="shop__widget-inner">
                                    <div className="shop__search">
                                        <input type="text" placeholder="Search here" />
                                    </div>
                                </div>
                            </div>
                            <div className="shop__widget">
                                <h4 className="shop__widget-title">filter by price</h4>
                                <div className="shop__widget-inner">
                                    <div className="shop__price-filter">
                                    <div id="slider-range" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
      <div className="ui-slider-range ui-widget-header ui-corner-all" style={{left: '11.6327%', width: '60.6122%'}}></div>
      <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0" style={{left: '11.6327%'}}></span>
      <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0" style={{left: '72.2449%'}}></span></div>
                                        <div className="shop__price-slider-amount">
                                            <input type="submit" className="p-0 border-0" value="Filter" />
                                            <p><i className="fas fa-money"></i>100 - <i className="fas fa-money"></i>500</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shop__widget">
                                <h4 className="shop__widget-title">Related products</h4>
                                <div className="shop__widget-inner">
                                    <div className="related__products-item">
                                        <div className="related__products-thumb">
                                            <a href="shop-details.html"><img src="/assets/img/products/product02.jpg" alt="img" /></a>
                                        </div>
                                        <div className="related__products-content">
                                            <h4 className="product-name"><a href="shop-details.html">Headphone</a></h4>
                                            <span className="amount">$350</span>
                                        </div>
                                    </div>
                                    <div className="related__products-item">
                                        <div className="related__products-thumb">
                                            <a href="shop-details.html"><img src="/assets/img/products/product03.jpg" alt="img" /></a>
                                        </div>
                                        <div className="related__products-content">
                                            <h4 className="product-name"><a href="shop-details.html">Replika Axe</a></h4>
                                            <span className="amount">$230</span>
                                        </div>
                                    </div>
                                    <div className="related__products-item">
                                        <div className="related__products-thumb">
                                            <a href="shop-details.html"><img src="/assets/img/products/product06.jpg" alt="img" /></a>
                                        </div>
                                        <div className="related__products-content">
                                            <h4 className="product-name"><a href="shop-details.html">Ultima Axe</a></h4>
                                            <span className="amount">$120</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shop__widget">
                                <h4 className="shop__widget-title">Categories</h4>
                                <div className="shop__widget-inner">
                                    <ul className="product-categories list-wrap">
                                        <li><a href="shop.html">controller</a><span className="float-right">12</span></li>
                                        <li><a href="shop.html">Headphone</a><span className="float-right">03</span></li>
                                        <li><a href="shop.html">TOURNAMENTS</a><span className="float-right">18</span></li>
                                        <li><a href="shop.html">E-SPORTS</a><span className="float-right">05</span></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-11">
                        <div className="shop__top-wrap">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-sm-6">
                                    <div className="shop__showing-result">
                                        <p>Showing 1 - 9 of 15 results</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="shop__ordering">
                                        <select name="orderby" className="orderby">
                                            <option value="Default sorting">Default sorting</option>
                                            <option value="Sort by popularity">Sort by popularity</option>
                                            <option value="Sort by average rating">Sort by average rating</option>
                                            <option value="Sort by latest">Sort by latest</option>
                                            <option value="Sort by latest">Sort by latest</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1">
                            <div className="col">
                                <div className="shop__item">
                                    <div className="shop__item-thumb">
                                        <NavLink to="#"><img src="/assets/img/products/product01.jpg" alt="img" /></NavLink>
                                        <a style={{cursor: "pointer"}} className="wishlist-button" onClick={()=>{
                                            addToWishList()
                                        isAdd == false ? setIsAdd(true) : setIsAdd(false)
                                        }}><i className="far fa-heart" style={isAdd == true ? {color: '#45f882'} : null}></i></a>
                                    </div>
                                    <div className="shop__item-line"></div>
                                    <div className="shop__item-content">
                                        <div className="shop__item-content-top">
                                            <h4 className="title"><a href="shop-details.html">Nintendo Switch</a></h4>
                                            <div className="shop__item-price"><i className="fas fa-money"></i>29</div>
                                        </div>
                                        <div className="shop__item-cat"><NavLink to="#">E-SPORTS</NavLink></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pagination__wrap">
                            <ul className="list-wrap d-flex flex-wrap justify-content-center">
                                <li><a href="#" className="page-numbers">01</a></li>
                                <li><span className="page-numbers current">02</span></li>
                                <li><a href="#" className="page-numbers">03</a></li>
                                <li><a href="#" className="page-numbers">....</a></li>
                                <li>
                                    <a href="#" className="next page-numbers">
                                        <i className="fas fa-angle-double-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- shop-area-end --> */}

    </main>
    {/* <!-- main-area-end --> */}

<Footer />
    </>
  )
}

export default Shop