
import React from 'react'

const Home = () => {
    return (
        <>



<div>


    {/* scroll-top */}
    <button class="scroll__top scroll-to-target" data-target="html">
        <i class="flaticon-right-arrow"></i>
    </button>
    {/* scroll-top-end*/}

    {/* header-area */}
    <header>
        <div id="sticky-header" class="tg-header__area transparent-header">
            <div class="container custom-container">
                <div class="row">
                    <div class="col-12">
                        <div class="mobile-nav-toggler"><i class="fas fa-bars"></i></div>
                        <div class="tgmenu__wrap">
                            <nav class="tgmenu__nav">
                                <div class="logo">
                                    <a href="index-2.html"><img src="/assets/img/logo/logo.png" alt="Logo"/></a>
                                </div>
                                <div class="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                    <ul class="navigation">
                                        <li class="active menu-item-has-children"><a href="#">Home</a>
                                            <ul class="sub-menu">
                                                <li class="active"><a href="index-2.html">Home One</a></li>
                                                <li><a href="index-3.html">Home Two</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="about-us.html">ABOUT US</a></li>
                                        <li class="menu-item-has-children"><a href="#">TOURNAMENT</a>
                                            <ul class="sub-menu">
                                                <li><a href="tournament.html">TOURNAMENT</a></li>
                                                <li><a href="tournament-details.html">TOURNAMENT Single</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children"><a href="#">PAGES</a>
                                            <ul class="sub-menu">
                                                <li><a href="shop.html">Gaming Shop</a></li>
                                                <li><a href="shop-details.html">Shop Details</a></li>
                                                <li><a href="services.html">Our Services</a></li>
                                                <li><a href="services-details.html">Services Details</a></li>
                                                <li><a href="team-details.html">Player Details</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children"><a href="#">News</a>
                                            <ul class="sub-menu">
                                                <li><a href="blog.html">Our Blog</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">contact</a></li>
                                    </ul>
                                </div>
                                <div class="tgmenu__action d-none d-md-block">
                                    <ul class="list-wrap">
                                        <li class="search"><a href="#"><i class="flaticon-search-1"></i></a></li>
                                        <li class="header-btn"><a href="contact.html" class="tg-border-btn"><i class="flaticon-edit"></i> ~sing in</a></li>
                                        <li class="side-toggle-icon">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        {/* Mobile Menu  */}
                        <div class="tgmobile__menu">
                            <nav class="tgmobile__menu-box">
                                <div class="close-btn"><i class="flaticon-swords-in-cross-arrangement"></i></div>
                                <div class="nav-logo">
                                    <a href="index-2.html"><img src="/assets/img/logo/logo.png" alt="Logo"/></a>
                                </div>
                                <div class="tgmobile__search">
                                    <form action="#">
                                        <input type="text" placeholder="Search here..."/>
                                        <button><i class="flaticon-loupe"></i></button>
                                    </form>
                                </div>
                                <div class="tgmobile__menu-outer">
                                    {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                                </div>
                                <div class="social-links">
                                    <ul class="list-wrap">
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div class="tgmobile__menu-backdrop"></div>
                        {/* End Mobile Menu */}
                    </div>
                </div>
            </div>
        </div>

        {/* header-search */}
        <div class="search__popup-wrap">
            <div class="search__layer"></div>
            <div class="search__close">
                <span><i class="flaticon-swords-in-cross-arrangement"></i></span>
            </div>
            <div class="search__wrap text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="title">... <span>Search Here</span> ...</h2>
                            <div class="search__form">
                                <form action="#">
                                    <input type="text" name="search" placeholder="Type keywords here" required/>
                                    <button class="search-btn"><i class="flaticon-loupe"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* header-search-end */}

        {/* offCanvas-area */}
        <div class="offCanvas__wrap">
            <div class="offCanvas__body">
                <div class="offCanvas__top">
                    <div class="offCanvas__logo logo">
                        <a href="index-2.html"><img src="/assets/img/logo/logo.png" alt="Logo"/></a>
                    </div>
                    <div class="offCanvas__toggle">
                        <i class="flaticon-swords-in-cross-arrangement"></i>
                    </div>
                </div>
                <div class="offCanvas__content">
                    <h2 class="title">Best Seller of Month Ideas for <span>NFT Wallet</span></h2>
                    <div class="offCanvas__contact">
                        <h4 class="small-title">CONTACT US</h4>
                        <ul class="offCanvas__contact-list list-wrap">
                            <li><a href="tel:93332225557">+9 333 222 5557</a></li>
                            <li><a href="mailto:info@webmail.com">info@webmail.com</a></li>
                            <li>New Central Park W7 Street ,New York</li>
                        </ul>
                    </div>
                    <div class="offCanvas__newsletter">
                        <h4 class="small-title">Subscribe</h4>
                        <form action="#" class="offCanvas__newsletter-form">
                            <input type="email" placeholder="Get News & Updates"/>
                            <button type="submit"><i class="flaticon-send"></i></button>
                        </form>
                        <p>Subscribe dolor sitamet, consectetur adiping eli. Duis esollici tudin augue.</p>
                    </div>
                    <ul class="offCanvas__social list-wrap">
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
                <div class="offCanvas__copyright">
                    <p>Copyright © 2023 - By <span>MYKD</span></p>
                </div>
            </div>
        </div>
        <div class="offCanvas__overlay"></div>
        {/* offCanvas-area-end */}

    </header>
    {/* header-area-end */}



    {/* main-area */}
    <main class="main--area">

        {/* slider-area */}
        <section class="slider__area slider__bg" data-background="assets/img/slider/slider_bg.jpg">
            <div class="slider-activee">
                <div class="single-slider">
                    <div class="container custom-container">
                        <div class="row justify-content-between">
                            <div class="col-lg-6">
                                <div class="slider__content">
                                    <h6 class="sub-title wow fadeInUp" data-wow-delay=".2s">live gaming</h6>
                                    <h2 class="title wow fadeInUp" data-wow-delay=".5s">steaming</h2>
                                    <p class="wow fadeInUp" data-wow-delay=".8s">video games online</p>
                                    <div class="slider__btn wow fadeInUp" data-wow-delay="1.2s">
                                        <a href="contact.html" class="tg-btn-1"><span>contact us</span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-5 col-lg-6">
                                <div class="slider__img text-center">
                                    <img src="/assets/img/slider/slider_img01.png" data-magnetic alt="img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slider__shapes">
                <img src="/assets/img/slider/slider_shape01.png" alt="shape"/>
                <img src="/assets/img/slider/slider_shape02.png" alt="shape"/>
                <img src="/assets/img/slider/slider_shape03.png" alt="shape"/>
                <img src="/assets/img/slider/slider_shape04.png" alt="shape"/>
            </div>
            <div class="slider__brand-wrap">
                <div class="container custom-container">
                    <ul class="slider__brand-list list-wrap">
                        <li><a href="#"><img src="/assets/img/brand/brand_logo01.png" alt="brand"/></a></li>
                        <li><a href="#"><img src="/assets/img/brand/brand_logo02.png" alt="brand"/></a></li>
                        <li><a href="#"><img src="/assets/img/brand/brand_logo03.png" alt="brand"/></a></li>
                    </ul>
                </div>
            </div>
        </section>
        {/* slider-area-end */}

        {/* NFT-item-area */}
        <section class="nft-item__area">
            <div class="container custom-container">
                <div class="row justify-content-center">
                    <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                        <div class="nft-item__box">
                            <div class="nft-item__thumb">
                                <a href="shop-details.html"><img src="/assets/img/nft/nft_img01.jpg" alt="img"/></a>
                            </div>
                            <div class="nft-item__content">
                                <h4 class="title"><a href="shop-details.html">wolf gaming art</a></h4>
                                <div class="nft-item__avatar">
                                    <div class="avatar-img">
                                        <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar.png" alt="img"/></a>
                                    </div>
                                    <div class="avatar-name">
                                        <h5 class="name"><a href="shop-details.html">Alax Max</a></h5>
                                        <span class="designation">Creator</span>
                                    </div>
                                </div>
                                <div class="nft-item__bid">
                                    <div class="nft-item__price">
                                        <p>1.002 <span class="currency">Eth</span></p>
                                        <a href="shop-details.html" class="bid-btn">Bid <i class="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                        <div class="nft-item__box">
                            <div class="nft-item__thumb">
                                <a href="shop-details.html"><img src="/assets/img/nft/nft_img02.jpg" alt="img"/></a>
                            </div>
                            <div class="nft-item__content">
                                <h4 class="title"><a href="shop-details.html">Forest Princess</a></h4>
                                <div class="nft-item__avatar">
                                    <div class="avatar-img">
                                        <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar.png" alt="img"/></a>
                                    </div>
                                    <div class="avatar-name">
                                        <h5 class="name"><a href="shop-details.html">Alax Max</a></h5>
                                        <span class="designation">Creator</span>
                                    </div>
                                </div>
                                <div class="nft-item__bid">
                                    <div class="nft-item__price">
                                        <p>1.053 <span class="currency">Eth</span></p>
                                        <a href="shop-details.html" class="bid-btn">Bid <i class="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                        <div class="nft-item__box">
                            <div class="nft-item__thumb">
                                <a href="shop-details.html"><img src="/assets/img/nft/nft_img03.jpg" alt="img"/></a>
                            </div>
                            <div class="nft-item__content">
                                <h4 class="title"><a href="shop-details.html">girl firefly art</a></h4>
                                <div class="nft-item__avatar">
                                    <div class="avatar-img">
                                        <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar.png" alt="img"/></a>
                                    </div>
                                    <div class="avatar-name">
                                        <h5 class="name"><a href="shop-details.html">Alax Max</a></h5>
                                        <span class="designation">Creator</span>
                                    </div>
                                </div>
                                <div class="nft-item__bid">
                                    <div class="nft-item__price">
                                        <p>1.024 <span class="currency">Eth</span></p>
                                        <a href="shop-details.html" class="bid-btn">Bid <i class="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* NFT-item-area-end */}

        {/* area-background-start */}
        <div class="area-background" data-background="assets/img/bg/area_bg01.jpg">

        {/* about-area */}
        <section class="about__area section-pt-130 section-pb-130">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-10">
                        <div class="section__title text-center mb-60">
                            <span class="sub-title tg__animate-text">know about us</span>
                            <h3 class="title">top rated steamers</h3>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xl-10">
                        <div class="about__tab-wrap">
                            <div class="about__buttons">
                                <a href="shop.html" class="tg-btn-2">buy Hero</a>
                                <a href="shop.html" class="tg-btn-2 -secondary">buy nfts</a>
                            </div>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="about01-tab" data-bs-toggle="tab" data-bs-target="#about01" type="button" role="tab" aria-controls="about01" aria-selected="true"><span class="img-shape"></span><img src="/assets/img/others/about_tab01.png" alt="img"/></button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="about02-tab" data-bs-toggle="tab" data-bs-target="#about02" type="button" role="tab" aria-controls="about02" aria-selected="false"><span class="img-shape"></span><img src="/assets/img/others/about_tab02.png" alt="img"/></button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="about03-tab" data-bs-toggle="tab" data-bs-target="#about03" type="button" role="tab" aria-controls="about03" aria-selected="false"><span class="img-shape"></span><img src="/assets/img/others/about_tab03.png" alt="img"/></button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="about04-tab" data-bs-toggle="tab" data-bs-target="#about04" type="button" role="tab" aria-controls="about04" aria-selected="false"><span class="img-shape"></span><img src="/assets/img/others/about_tab04.png" alt="img"/></button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="about05-tab" data-bs-toggle="tab" data-bs-target="#about05" type="button" role="tab" aria-controls="about05" aria-selected="false"><span class="img-shape"></span><img src="/assets/img/others/about_tab05.png" alt="img"/></button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="about06-tab" data-bs-toggle="tab" data-bs-target="#about06" type="button" role="tab" aria-controls="about06" aria-selected="false"><span class="img-shape"></span><img src="/assets/img/others/about_tab06.png" alt="img"/></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane show active" id="about01" role="tabpanel" aria-labelledby="about01-tab">
                        <div class="row justify-content-center">
                            <div class="col-xl-5 col-lg-10">
                                <div class="about__img">
                                    <img src="/assets/img/others/about_img01.jpg" alt="img"/>
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-10">
                                <div class="about__flex-wrap">
                                    <div class="about__content-wrap">
                                        <div class="about__content">
                                            <h4 class="title">human game</h4>
                                            <span class="rate">rate 50%</span>
                                            <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                        </div>
                                        <div class="about__content-list">
                                            <ul class="list-wrap">
                                                <li><img src="/assets/img/icons/features_icon01.png" alt="img"/> Chichi Dragon Ball</li>
                                                <li><img src="/assets/img/icons/features_icon02.png" alt="img"/> Space Babe Night</li>
                                                <li><img src="/assets/img/icons/features_icon03.png" alt="img"/> Dragon Ball</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="about__btn-wrap">
                                        <ul class="list-wrap">
                                            <li><a href="shop-details.html">Dragon Ball</a></li>
                                            <li><a href="shop.html">nft market</a></li>
                                            <li><a href="contact-2.html">support</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="about02" role="tabpanel" aria-labelledby="about02-tab">
                        <div class="row justify-content-center">
                            <div class="col-xl-5 col-lg-10">
                                <div class="about__img">
                                    <img src="/assets/img/others/about_img02.jpg" alt="img"/>
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-10">
                                <div class="about__flex-wrap">
                                    <div class="about__content-wrap">
                                        <div class="about__content">
                                            <h4 class="title">Axie Infinity</h4>
                                            <span class="rate">rate 60%</span>
                                            <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                        </div>
                                        <div class="about__content-list">
                                            <ul class="list-wrap">
                                                <li><img src="/assets/img/icons/features_icon01.png" alt="img"/> Chichi Dragon Ball</li>
                                                <li><img src="/assets/img/icons/features_icon02.png" alt="img"/> Space Babe Night</li>
                                                <li><img src="/assets/img/icons/features_icon03.png" alt="img"/> Dragon Ball</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="about__btn-wrap">
                                        <ul class="list-wrap">
                                            <li><a href="shop-details.html">Dragon Ball</a></li>
                                            <li><a href="shop.html">nft market</a></li>
                                            <li><a href="contact-2.html">support</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="about03" role="tabpanel" aria-labelledby="about03-tab">
                        <div class="row justify-content-center">
                            <div class="col-xl-5 col-lg-10">
                                <div class="about__img">
                                    <img src="/assets/img/others/about_img03.jpg" alt="img"/>
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-10">
                                <div class="about__flex-wrap">
                                    <div class="about__content-wrap">
                                        <div class="about__content">
                                            <h4 class="title">The Walking Dead</h4>
                                            <span class="rate">rate 75%</span>
                                            <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                        </div>
                                        <div class="about__content-list">
                                            <ul class="list-wrap">
                                                <li><img src="/assets/img/icons/features_icon01.png" alt="img"/> Chichi Dragon Ball</li>
                                                <li><img src="/assets/img/icons/features_icon02.png" alt="img"/> Space Babe Night</li>
                                                <li><img src="/assets/img/icons/features_icon03.png" alt="img"/> Dragon Ball</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="about__btn-wrap">
                                        <ul class="list-wrap">
                                            <li><a href="shop-details.html">Dragon Ball</a></li>
                                            <li><a href="shop.html">nft market</a></li>
                                            <li><a href="contact-2.html">support</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="about04" role="tabpanel" aria-labelledby="about04-tab">
                        <div class="row justify-content-center">
                            <div class="col-xl-5 col-lg-10">
                                <div class="about__img">
                                    <img src="/assets/img/others/about_img04.jpg" alt="img"/>
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-10">
                                <div class="about__flex-wrap">
                                    <div class="about__content-wrap">
                                        <div class="about__content">
                                            <h4 class="title">The Dogami</h4>
                                            <span class="rate">rate 65%</span>
                                            <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                        </div>
                                        <div class="about__content-list">
                                            <ul class="list-wrap">
                                                <li><img src="/assets/img/icons/features_icon01.png" alt="img"/> Chichi Dragon Ball</li>
                                                <li><img src="/assets/img/icons/features_icon02.png" alt="img"/> Space Babe Night</li>
                                                <li><img src="/assets/img/icons/features_icon03.png" alt="img"/> Dragon Ball</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="about__btn-wrap">
                                        <ul class="list-wrap">
                                            <li><a href="shop-details.html">Dragon Ball</a></li>
                                            <li><a href="shop.html">nft market</a></li>
                                            <li><a href="contact-2.html">support</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="about05" role="tabpanel" aria-labelledby="about05-tab">
                        <div class="row justify-content-center">
                            <div class="col-xl-5 col-lg-10">
                                <div class="about__img">
                                    <img src="/assets/img/others/about_img05.jpg" alt="img"/>
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-10">
                                <div class="about__flex-wrap">
                                    <div class="about__content-wrap">
                                        <div class="about__content">
                                            <h4 class="title">The Sandbox</h4>
                                            <span class="rate">rate 75%</span>
                                            <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                        </div>
                                        <div class="about__content-list">
                                            <ul class="list-wrap">
                                                <li><img src="/assets/img/icons/features_icon01.png" alt="img"/> Chichi Dragon Ball</li>
                                                <li><img src="/assets/img/icons/features_icon02.png" alt="img"/> Space Babe Night</li>
                                                <li><img src="/assets/img/icons/features_icon03.png" alt="img"/> Dragon Ball</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="about__btn-wrap">
                                        <ul class="list-wrap">
                                            <li><a href="shop-details.html">Dragon Ball</a></li>
                                            <li><a href="shop.html">nft market</a></li>
                                            <li><a href="contact-2.html">support</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="about06" role="tabpanel" aria-labelledby="about06-tab">
                        <div class="row justify-content-center">
                            <div class="col-xl-5 col-lg-10">
                                <div class="about__img">
                                    <img src="/assets/img/others/about_img06.jpg" alt="img"/>
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-10">
                                <div class="about__flex-wrap">
                                    <div class="about__content-wrap">
                                        <div class="about__content">
                                            <h4 class="title">Pegaxy Horses</h4>
                                            <span class="rate">rate 85%</span>
                                            <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
                                        </div>
                                        <div class="about__content-list">
                                            <ul class="list-wrap">
                                                <li><img src="/assets/img/icons/features_icon01.png" alt="img"/> Chichi Dragon Ball</li>
                                                <li><img src="/assets/img/icons/features_icon02.png" alt="img"/> Space Babe Night</li>
                                                <li><img src="/assets/img/icons/features_icon03.png" alt="img"/> Dragon Ball</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="about__btn-wrap">
                                        <ul class="list-wrap">
                                            <li><a href="shop-details.html">Dragon Ball</a></li>
                                            <li><a href="shop.html">nft market</a></li>
                                            <li><a href="contact-2.html">support</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* about-area-end */}

        {/* gallery-area */}
        <section class="gallery__area fix section-pb-130">
            <div class="gallery__slider">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-9 col-lg-10 col-md-11">
                            <div class="swiper-container gallery-active">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="gallery__item">
                                            <div class="gallery__thumb">
                                                <a href="assets/img/gallery/gallery01.jpg" data-cursor="-theme" data-cursor-text="View <br> Image" class="popup-image" title="PUBG Tournament"><img src="/assets/img/gallery/gallery01.jpg" alt="img"/></a>
                                            </div>
                                            <div class="gallery__content">
                                                <h3 class="title">pubg tournament</h3>
                                                <span class="rate">rate 50%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="gallery__item">
                                            <div class="gallery__thumb">
                                                <a href="assets/img/gallery/gallery02.jpg" data-cursor="-theme" data-cursor-text="View <br> Image" class="popup-image" title="Assassin's Creed"><img src="/assets/img/gallery/gallery02.jpg" alt="img"/></a>
                                            </div>
                                            <div class="gallery__content">
                                                <h3 class="title">Assassin's Creed</h3>
                                                <span class="rate">rate 65%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="gallery__item">
                                            <div class="gallery__thumb">
                                                <a href="assets/img/gallery/gallery03.jpg" data-cursor="-theme" data-cursor-text="View <br> Image" class="popup-image" title="World of Warcraft"><img src="/assets/img/gallery/gallery03.jpg" alt="img"/></a>
                                            </div>
                                            <div class="gallery__content">
                                                <h3 class="title">World of Warcraft</h3>
                                                <span class="rate">rate 60%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="gallery__item">
                                            <div class="gallery__thumb">
                                                <a href="assets/img/gallery/gallery04.jpg" data-cursor="-theme" data-cursor-text="View <br> Image" class="popup-image" title="The Chant 2"><img src="/assets/img/gallery/gallery04.jpg" alt="img"/></a>
                                            </div>
                                            <div class="gallery__content">
                                                <h3 class="title">The Chant s.2</h3>
                                                <span class="rate">rate 70%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="gallery__item">
                                            <div class="gallery__thumb">
                                                <a href="assets/img/gallery/gallery05.jpg" data-cursor="-theme" data-cursor-text="View <br> Image" class="popup-image" title="Dota 2 tournament"><img src="/assets/img/gallery/gallery05.jpg" alt="img"/></a>
                                            </div>
                                            <div class="gallery__content">
                                                <h3 class="title">Dota 2 tournament</h3>
                                                <span class="rate">rate 85%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* scrollbar */}
                                <div class="swiper-scrollbar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* gallery-area-end */}

        </div>
        {/* area-background-end */}

        {/* team-area */}
        <section class="team__area team-bg section-pt-130 section-pb-100" data-background="assets/img/bg/team_bg.jpg">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-10">
                        <div class="section__title text-center mb-60">
                            <span class="sub-title tg__animate-text">our team member</span>
                            <h3 class="title">ACTIVE TEAM MEMBERS</h3>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                        <div class="team__item">
                            <div class="team__thumb">
                                <a href="team-details.html"><img src="/assets/img/team/team01.png" alt="img"/></a>
                            </div>
                            <div class="team__content">
                                <h4 class="name"><a href="team-details.html">killer master</a></h4>
                                <span class="designation">Blockchain Expert</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                        <div class="team__item">
                            <div class="team__thumb">
                                <a href="team-details.html"><img src="/assets/img/team/team02.png" alt="img"/></a>
                            </div>
                            <div class="team__content">
                                <h4 class="name"><a href="team-details.html">tanu mark</a></h4>
                                <span class="designation">Developer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                        <div class="team__item">
                            <div class="team__thumb">
                                <a href="team-details.html"><img src="/assets/img/team/team03.png" alt="img"/></a>
                            </div>
                            <div class="team__content">
                                <h4 class="name"><a href="team-details.html">Thompson Scot</a></h4>
                                <span class="designation">Art Director</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
                        <div class="team__item">
                            <div class="team__thumb">
                                <a href="team-details.html"><img src="/assets/img/team/team04.png" alt="img"/></a>
                            </div>
                            <div class="team__content">
                                <h4 class="name"><a href="team-details.html">Shakh Danial</a></h4>
                                <span class="designation">Crypto Advisor</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* team-area-end */}

        {/* video-area */}
        <section class="video__area video-bg tg-jarallax" data-background="assets/img/bg/video_bg.jpg">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-8 col-md-11">
                        <div class="video__content text-center">
                            <a href="https://www.youtube.com/watch?v=ssrNcwxALS4" class="popup-video"><i class="flaticon-play"></i></a>
                            <h2 class="title">JOIN THE <span>COMMUNITY</span></h2>
                            <p>Join our Discord community and choosec onsteur</p>
                            <a href="https://discord.com/" target="_blank" class="video__btn tg-btn-1"><span>join discord</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* video-area-end */}

        {/* roadMap-area */}
        <section class="roadMap__area roadMap-bg section-pt-150 section-pb-150" data-background="assets/img/bg/roadmap_bg.jpg">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10">
                        <div class="roadMap__inner">
                            <div class="row">
                                <div class="col-xl-5 col-lg-6">
                                    <div class="roadMap__content">
                                        <h2 class="title">a look into roadmaps seasons</h2>
                                        <p>With Season 1 Ending with our play and Duis elementum sollicitudin is yaugue euismods Nulla ulla Player-focused updates games from Mobile App and Enjoy.</p>
                                        <a href="contact.html" class="tg-btn-1 -btn-yellow"><span>roadmap</span></a>
                                    </div>
                                    <div class="roadMap__img">
                                        <img src="/assets/img/others/roadmap.png" class="tg-parallax" data-scale="1.5" data-orientation="down" alt=""/>
                                    </div>
                                </div>
                                <div class="col-xl-7 col-lg-6">
                                    <div class="roadMap__steps-wrap">
                                        <div class="roadMap__steps-item active">
                                            <h3 class="title">season 1</h3>
                                            <ul class="roadMap__list list-wrap">
                                                <li class="active tg__animate-text style2">Battle Practice Mode</li>
                                                <li class="active tg__animate-text style2">Android Mobile</li>
                                                <li class="active tg__animate-text style2">iOS Open Beta</li>
                                                <li class="active tg__animate-text style2">Land Creation & Building</li>
                                            </ul>
                                            <img src="/assets/img/others/roadmap_img.png" alt="img" class="roadMap__steps-img"/>
                                        </div>
                                        <div class="roadMap__steps-item">
                                            <h3 class="title">season 2</h3>
                                            <ul class="roadMap__list list-wrap">
                                                <li class="active tg__animate-text style2">Land Creation & Building</li>
                                                <li class="active tg__animate-text style2">Android Mobile</li>
                                                <li class="tg__animate-text style2">iOS Open Beta</li>
                                                <li class="tg__animate-text style2">Land Creation & Building</li>
                                            </ul>
                                            <img src="/assets/img/others/roadmap_img.png" alt="img" class="roadMap__steps-img"/>
                                        </div>
                                        <div class="roadMap__steps-item">
                                            <h3 class="title">season 3</h3>
                                            <ul class="roadMap__list list-wrap">
                                                <li class="tg__animate-text style2">Switch to 3D gameplay</li>
                                                <li class="tg__animate-text style2">Android Mobile</li>
                                                <li class="tg__animate-text style2">iOS Open Beta</li>
                                                <li class="tg__animate-text style2">Land Creation & Building</li>
                                            </ul>
                                            <img src="/assets/img/others/roadmap_img.png" alt="img" class="roadMap__steps-img"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* roadMap-area-end */}

        {/* trending-nft-area */}
        <section class="trendingNft-area section-pt-120 section-pb-90">
            <div class="container">
                <div class="trendingNft__title-wrap">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="trendingNft__title">
                                <h2 class="title">top Trending <img src="/assets/img/icons/fire.png" width="35" alt="icon"/></h2>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="trendingNft__nav">
                                <button class="slider-button-prev"><i class="fas fa-angle-left"></i></button>
                                <button class="slider-button-next"><i class="fas fa-angle-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-container trendingNft-active">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="trendingNft__item">
                                <div class="trendingNft__item-top">
                                    <div class="trendingNft__item-avatar">
                                        <div class="image">
                                            <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar01.png" alt="img"/></a>
                                        </div>
                                        <div class="info">
                                            <h6 class="name">Crypto Max</h6>
                                            <a href="shop-details.html" class="userName">@Jon Max</a>
                                        </div>
                                    </div>
                                    <div class="trendingNft__item-wish">
                                        <a href="#"><i class="far fa-heart"></i></a>
                                    </div>
                                </div>
                                <div class="trendingNft__item-image">
                                    <a href="shop-details.html"><img src="/assets/img/nft/nft_img04.jpg" alt="img"/></a>
                                </div>
                                <div class="trendingNft__item-bottom">
                                    <div class="trendingNft__item-price">
                                        <span class="bid">Last Bid</span>
                                        <h6 class="eth"><i class="fab fa-ethereum"></i> 1.002 <span>Eth</span></h6>
                                    </div>
                                    <a href="shop-details.html" class="bid-btn">Bid <i class="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="trendingNft__item">
                                <div class="trendingNft__item-top">
                                    <div class="trendingNft__item-avatar">
                                        <div class="image">
                                            <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar02.png" alt="img"/></a>
                                        </div>
                                        <div class="info">
                                            <h6 class="name">Golden Crypto</h6>
                                            <a href="shop-details.html" class="userName">@Jon Max</a>
                                        </div>
                                    </div>
                                    <div class="trendingNft__item-wish">
                                        <a href="shop-details.html"><i class="far fa-heart"></i></a>
                                    </div>
                                </div>
                                <div class="trendingNft__item-image">
                                    <a href="shop-details.html"><img src="/assets/img/nft/nft_img05.jpg" alt="img"/></a>
                                </div>
                                <div class="trendingNft__item-bottom">
                                    <div class="trendingNft__item-price">
                                        <span class="bid">Last Bid</span>
                                        <h6 class="eth"><i class="fab fa-ethereum"></i> 1.004 <span>Eth</span></h6>
                                    </div>
                                    <a href="shop-details.html" class="bid-btn">Bid <i class="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="trendingNft__item">
                                <div class="trendingNft__item-top">
                                    <div class="trendingNft__item-avatar">
                                        <div class="image">
                                            <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar03.png" alt="img"/></a>
                                        </div>
                                        <div class="info">
                                            <h6 class="name">Black Crypto</h6>
                                            <a href="shop-details.html" class="userName">@Jon Max</a>
                                        </div>
                                    </div>
                                    <div class="trendingNft__item-wish">
                                        <a href="shop-details.html"><i class="far fa-heart"></i></a>
                                    </div>
                                </div>
                                <div class="trendingNft__item-image">
                                    <a href="shop-details.html"><img src="/assets/img/nft/nft_img06.jpg" alt="img"/></a>
                                </div>
                                <div class="trendingNft__item-bottom">
                                    <div class="trendingNft__item-price">
                                        <span class="bid">Last Bid</span>
                                        <h6 class="eth"><i class="fab fa-ethereum"></i> 1.005 <span>Eth</span></h6>
                                    </div>
                                    <a href="shop-details.html" class="bid-btn">Bid <i class="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="trendingNft__item">
                                <div class="trendingNft__item-top">
                                    <div class="trendingNft__item-avatar">
                                        <div class="image">
                                            <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar02.png" alt="img"/></a>
                                        </div>
                                        <div class="info">
                                            <h6 class="name">Luck Crypto</h6>
                                            <a href="shop-details.html" class="userName">@Jon Max</a>
                                        </div>
                                    </div>
                                    <div class="trendingNft__item-wish">
                                        <a href="shop-details.html"><i class="far fa-heart"></i></a>
                                    </div>
                                </div>
                                <div class="trendingNft__item-image">
                                    <a href="shop-details.html"><img src="/assets/img/nft/nft_img07.jpg" alt="img"/></a>
                                </div>
                                <div class="trendingNft__item-bottom">
                                    <div class="trendingNft__item-price">
                                        <span class="bid">Last Bid</span>
                                        <h6 class="eth"><i class="fab fa-ethereum"></i> 1.005 <span>Eth</span></h6>
                                    </div>
                                    <a href="shop-details.html" class="bid-btn">Bid <i class="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="trendingNft__item">
                                <div class="trendingNft__item-top">
                                    <div class="trendingNft__item-avatar">
                                        <div class="image">
                                            <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar03.png" alt="img"/></a>
                                        </div>
                                        <div class="info">
                                            <h6 class="name">King Crypto</h6>
                                            <a href="shop-details.html" class="userName">@Jon Max</a>
                                        </div>
                                    </div>
                                    <div class="trendingNft__item-wish">
                                        <a href="shop-details.html"><i class="far fa-heart"></i></a>
                                    </div>
                                </div>
                                <div class="trendingNft__item-image">
                                    <a href="shop-details.html"><img src="/assets/img/nft/nft_img08.jpg" alt="img"/></a>
                                </div>
                                <div class="trendingNft__item-bottom">
                                    <div class="trendingNft__item-price">
                                        <span class="bid">Last Bid</span>
                                        <h6 class="eth"><i class="fab fa-ethereum"></i> 1.005 <span>Eth</span></h6>
                                    </div>
                                    <a href="shop-details.html" class="bid-btn">Bid <i class="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* trending-nft-end */}

    </main>
    {/* main-area-end */}


    {/* footer-start */}
    <footer class="footer-style-one">
        <div class="footer__top-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-5 col-md-7">
                        <div class="footer-widget">
                            <div class="footer-logo logo">
                                <a href="index-2.html"><img src="/assets/img/logo/logo.png" alt="Logo"/></a>
                            </div>
                            <div class="footer-text">
                                <p class="desc">Lorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin augue euismod. Nulla ullam dolor sitamet consectetur</p>
                                <p class="social-title">Active <span>With Us <i class="fas fa-angle-double-right"></i></span></p>
                                <div class="footer-social">
                                    <a href="#"><img src="/assets/img/icons/social_icon01.png" alt="iocn"/></a>
                                    <a href="#"><img src="/assets/img/icons/social_icon02.png" alt="iocn"/></a>
                                    <a href="#"><img src="/assets/img/icons/social_icon03.png" alt="iocn"/></a>
                                    <a href="#"><img src="/assets/img/icons/social_icon04.png" alt="iocn"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-md-5 col-sm-6">
                        <div class="footer-widget widget_nav_menu">
                            <h4 class="fw-title">quick link</h4>
                            <ul class="list-wrap menu">
                                <li><a href="#">Gaming</a></li>
                                <li><a href="#">Product</a></li>
                                <li><a href="#">All NFTs</a></li>
                                <li><a href="#">Social Network</a></li>
                                <li><a href="#">Domain Names</a></li>
                                <li><a href="#">Collectibles</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-md-5 col-sm-6">
                        <div class="footer-widget widget_nav_menu">
                            <h4 class="fw-title">Supports</h4>
                            <ul class="list-wrap menu">
                                <li><a href="#">Setting & Privacy</a></li>
                                <li><a href="#">Help & Support</a></li>
                                <li><a href="#">Live Auctions</a></li>
                                <li><a href="#">Item Details</a></li>
                                <li><a href="#">24/7 Supports</a></li>
                                <li><a href="#">Our News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-5 col-md-7">
                        <div class="footer-widget">
                            <h4 class="fw-title">Newsletter</h4>
                            <div class="footer-newsletter">
                                <p>Subscribe our newsletter to get our latest update & newsconsectetur</p>
                                <form action="#" class="footer-newsletter-form">
                                    <input type="email" placeholder="Your email address"/>
                                    <button type="submit"><i class="flaticon-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright__wrap">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-7">
                        <div class="copyright__text">
                            <p>Copyright © 2023 - All Rights Reserved By <span>Mykd</span></p>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="copyright__card text-center text-md-end">
                            <img src="/assets/img/others/payment_card.png" alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* footer-start-end */}



    {/* JS here */}
    <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
    <script src="assets/js/plugins.js"></script>
    <script src="assets/js/ajax-form.js"></script>
    <script src="assets/js/main.js"></script>
</div>


        </>
    )
}

export default Home
