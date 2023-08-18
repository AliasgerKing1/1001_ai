import React from 'react'
import {NavLink} from 'react-router-dom'

import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
const GamesList = () => {
  return (
    <>
      <Header />
          {/* <!-- main-area --> */}
    <main className="main--area" id='top'>

{/* <!-- NFT-item-area --> */}
<section className="nft-item__area">
    <div className="container custom-container">
    <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10">
                        <div className="section__title text-center mb-60">
                            <span className="sub-title tg__animate-text">know about us</span>
                            <h3 className="title">All Games</h3>
                        </div>
                    </div>
                </div>
        <div className="row justify-content-center">
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                <div className="nft-item__box">
                    <div className="nft-item__thumb">
                        <a href="shop-details.html"><img src="/assets/img/nft/01.png" alt="img" /></a>
                    </div>
                    <div className="nft-item__content">
                        <h4 className="title"><a href="shop-details.html">Memory Card</a></h4>
                        <div className="nft-item__avatar">
                            <div className="avatar-img">
                                <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar.png" alt="img" /></a>
                            </div>
                            <div className="avatar-name">
                                <h5 className="name"><a href="shop-details.html">Card game</a></h5>
                                <span className="designation">Casual</span>
                            </div>
                        </div>
                        <div className="nft-item__bid">
                            <div className="nft-item__price">
                                <p>Free
                                    {/* <span className="currency">Eth</span> */}
                                    </p>
                                <NavLink to="/auth/game/memory/card" className="bid-btn">Play Now <i className="fas fa-long-arrow-alt-right"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                <div className="nft-item__box">
                    <div className="nft-item__thumb">
                        <a href="shop-details.html"><img src="/assets/img/nft/02.png" alt="img" /></a>
                    </div>
                    <div className="nft-item__content">
                        <h4 className="title"><a href="shop-details.html">Typing Speed Test</a></h4>
                        <div className="nft-item__avatar">
                            <div className="avatar-img">
                                <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar02.png" alt="img" /></a>
                            </div>
                            <div className="avatar-name">
                                <h5 className="name"><a href="shop-details.html">Typing Test</a></h5>
                                <span className="designation">Writing</span>
                            </div>
                        </div>
                        <div className="nft-item__bid">
                            <div className="nft-item__price">
                            <p>Free
                                    {/* <span className="currency">Eth</span> */}
                                    </p>
                                <NavLink to="/auth/game/typing/test" className="bid-btn">Play Now <i className="fas fa-long-arrow-alt-right"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                <div className="nft-item__box">
                    <div className="nft-item__thumb">
                        <a href="shop-details.html"><img src="/assets/img/nft/03.png" alt="img" /></a>
                    </div>
                    <div className="nft-item__content">
                        <h4 className="title"><a href="shop-details.html">Save the Hang Man</a></h4>
                        <div className="nft-item__avatar">
                            <div className="avatar-img">
                                <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar03.png" alt="img" /></a>
                            </div>
                            <div className="avatar-name">
                                <h5 className="name"><a href="shop-details.html">Guess the word</a></h5>
                                <span className="designation">thinking</span>
                            </div>
                        </div>
                        <div className="nft-item__bid">
                            <div className="nft-item__price">
                            <p>Free
                                    {/* <span className="currency">Eth</span> */}
                                    </p>
                                <NavLink to="/auth/game/save/man" className="bid-btn">Play Now <i className="fas fa-long-arrow-alt-right"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                <div className="nft-item__box">
                    <div className="nft-item__thumb">
                        <a href="shop-details.html"><img src="/assets/img/nft/04.png" alt="img" /></a>
                    </div>
                    <div className="nft-item__content">
                        <h4 className="title"><a href="shop-details.html">Quiz</a></h4>
                        <div className="nft-item__avatar">
                            <div className="avatar-img">
                                <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar03.png" alt="img" /></a>
                            </div>
                            <div className="avatar-name">
                                <h5 className="name"><a href="shop-details.html">IQ Test</a></h5>
                                <span className="designation">Intellegence</span>
                            </div>
                        </div>
                        <div className="nft-item__bid">
                            <div className="nft-item__price">
                            <p>Free
                                    {/* <span className="currency">Eth</span> */}
                                    </p>
                                <NavLink to="/auth/game/quiz" className="bid-btn">Play Now <i className="fas fa-long-arrow-alt-right"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                <div className="nft-item__box">
                    <div className="nft-item__thumb">
                        <a href="shop-details.html"><img src="/assets/img/nft/05.png" alt="img" /></a>
                    </div>
                    <div className="nft-item__content">
                        <h4 className="title"><a href="shop-details.html">Scrabmble Wordss</a></h4>
                        <div className="nft-item__avatar">
                            <div className="avatar-img">
                                <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar01.png" alt="img" /></a>
                            </div>
                            <div className="avatar-name">
                                <h5 className="name"><a href="shop-details.html">Correct the Word</a></h5>
                                <span className="designation">Thinking</span>
                            </div>
                        </div>
                        <div className="nft-item__bid">
                            <div className="nft-item__price">
                                <p>Free
                                    {/* <span className="currency">Eth</span> */}
                                    </p>
                                <NavLink to="/auth/game/word/scramble" className="bid-btn">Play Now <i className="fas fa-long-arrow-alt-right"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                <div className="nft-item__box">
                    <div className="nft-item__thumb">
                        <a href="shop-details.html"><img src="/assets/img/nft/06.png" alt="img" /></a>
                    </div>
                    <div className="nft-item__content">
                        <h4 className="title"><a href="shop-details.html">Tic Tac Toe</a></h4>
                        <div className="nft-item__avatar">
                            <div className="avatar-img">
                                <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar.png" alt="img" /></a>
                            </div>
                            <div className="avatar-name">
                                <h5 className="name"><a href="shop-details.html"> o & x</a></h5>
                                <span className="designation">strategy</span>
                            </div>
                        </div>
                        <div className="nft-item__bid">
                            <div className="nft-item__price">
                            <p>Free
                                    {/* <span className="currency">Eth</span> */}
                                    </p>
                                <NavLink to="/auth/game/tictactoe" className="bid-btn">Play Now <i className="fas fa-long-arrow-alt-right"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                <div className="nft-item__box">
                    <div className="nft-item__thumb">
                        <a href="shop-details.html"><img src="/assets/img/nft/07.png" alt="img" /></a>
                    </div>
                    <div className="nft-item__content">
                        <h4 className="title"><a href="shop-details.html">Guess the Number</a></h4>
                        <div className="nft-item__avatar">
                            <div className="avatar-img">
                                <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar.png" alt="img" /></a>
                            </div>
                            <div className="avatar-name">
                                <h5 className="name"><a href="shop-details.html">Guess the Correct Number</a></h5>
                                <span className="designation">thinking</span>
                            </div>
                        </div>
                        <div className="nft-item__bid">
                            <div className="nft-item__price">
                            <p>Free
                                    {/* <span className="currency">Eth</span> */}
                                    </p>
                                <NavLink to="/auth/game/guess/number" className="bid-btn">Play Now <i className="fas fa-long-arrow-alt-right"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                <div className="nft-item__box">
                    <div className="nft-item__thumb">
                        <a href="shop-details.html"><img src="/assets/img/nft/08.png" alt="img" /></a>
                    </div>
                    <div className="nft-item__content">
                        <h4 className="title"><a href="shop-details.html">Guess The Name</a></h4>
                        <div className="nft-item__avatar">
                            <div className="avatar-img">
                                <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar.png" alt="img" /></a>
                            </div>
                            <div className="avatar-name">
                                <h5 className="name"><a href="shop-details.html">Name Guessing</a></h5>
                                <span className="designation">Intellegence</span>
                            </div>
                        </div>
                        <div className="nft-item__bid">
                            <div className="nft-item__price">
                            <p>Free
                                    {/* <span className="currency">Eth</span> */}
                                    </p>
                                <NavLink to="/auth/game/guess/name" className="bid-btn">Play Now <i className="fas fa-long-arrow-alt-right"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                <div className="nft-item__box">
                    <div className="nft-item__thumb">
                        <a href="shop-details.html"><img src="/assets/img/nft/09.png" alt="img" /></a>
                    </div>
                    <div className="nft-item__content">
                        <h4 className="title"><a href="shop-details.html">Rock Paper Scissor</a></h4>
                        <div className="nft-item__avatar">
                            <div className="avatar-img">
                                <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar.png" alt="img" /></a>
                            </div>
                            <div className="avatar-name">
                                <h5 className="name"><a href="shop-details.html">Rock paper scissor</a></h5>
                                <span className="designation">Luck</span>
                            </div>
                        </div>
                        <div className="nft-item__bid">
                            <div className="nft-item__price">
                            <p>Free
                                    {/* <span className="currency">Eth</span> */}
                                    </p>
                                <NavLink to="/auth/game/rockpaperscissor" className="bid-btn">Play Now <i className="fas fa-long-arrow-alt-right"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                <div className="nft-item__box">
                    <div className="nft-item__thumb">
                        <a href="shop-details.html"><img src="/assets/img/nft/10.png" alt="img" /></a>
                    </div>
                    <div className="nft-item__content">
                        <h4 className="title"><a href="shop-details.html">Snake</a></h4>
                        <div className="nft-item__avatar">
                            <div className="avatar-img">
                                <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar.png" alt="img" /></a>
                            </div>
                            <div className="avatar-name">
                                <h5 className="name"><a href="shop-details.html">Eat Apple</a></h5>
                                <span className="designation">Casual</span>
                            </div>
                        </div>
                        <div className="nft-item__bid">
                            <div className="nft-item__price">
                            <p>Free
                                    {/* <span className="currency">Eth</span> */}
                                    </p>
                                <NavLink to="/auth/game/snake" className="bid-btn">Play Now <i className="fas fa-long-arrow-alt-right"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                <div className="nft-item__box">
                    <div className="nft-item__thumb">
                        <a href="shop-details.html"><img src="/assets/img/nft/11.png" alt="img" /></a>
                    </div>
                    <div className="nft-item__content">
                        <h4 className="title"><a href="shop-details.html">2048</a></h4>
                        <div className="nft-item__avatar">
                            <div className="avatar-img">
                                <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar.png" alt="img" /></a>
                            </div>
                            <div className="avatar-name">
                                <h5 className="name"><a href="shop-details.html">Merge to 2048</a></h5>
                                <span className="designation">Casual</span>
                            </div>
                        </div>
                        <div className="nft-item__bid">
                            <div className="nft-item__price">
                            <p>Free
                                    {/* <span className="currency">Eth</span> */}
                                    </p>
                                <NavLink to="/auth/game/strategy/2048" className="bid-btn">Play Now <i className="fas fa-long-arrow-alt-right"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                <div className="nft-item__box">
                    <div className="nft-item__thumb">
                        <a href="shop-details.html"><img src="/assets/img/nft/12.png" alt="img" /></a>
                    </div>
                    <div className="nft-item__content">
                        <h4 className="title"><a href="shop-details.html">Candy Crush</a></h4>
                        <div className="nft-item__avatar">
                            <div className="avatar-img">
                                <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar.png" alt="img" /></a>
                            </div>
                            <div className="avatar-name">
                                <h5 className="name"><a href="shop-details.html">Crush the Candies</a></h5>
                                <span className="designation">Casual</span>
                            </div>
                        </div>
                        <div className="nft-item__bid">
                            <div className="nft-item__price">
                            <p>Free
                                    {/* <span className="currency">Eth</span> */}
                                    </p>
                                <NavLink to="/auth/game/candycrush" className="bid-btn">Play Now <i className="fas fa-long-arrow-alt-right"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-9">
                <div className="nft-item__box">
                    <div className="nft-item__thumb">
                        <a href="shop-details.html"><img src="/assets/img/nft/13.png" alt="img" /></a>
                    </div>
                    <div className="nft-item__content">
                        <h4 className="title"><a href="shop-details.html">Black Jack</a></h4>
                        <div className="nft-item__avatar">
                            <div className="avatar-img">
                                <a href="shop-details.html"><img src="/assets/img/nft/nft_avatar.png" alt="img" /></a>
                            </div>
                            <div className="avatar-name">
                                <h5 className="name"><a href="shop-details.html">Higher value card</a></h5>
                                <span className="designation">Card</span>
                            </div>
                        </div>
                        <div className="nft-item__bid">
                            <div className="nft-item__price">
                            <p>Free
                                    {/* <span className="currency">Eth</span> */}
                                    </p>
                                <NavLink to="/auth/game/blackjack" className="bid-btn">Play Now <i className="fas fa-long-arrow-alt-right"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- NFT-item-area-end --> */}
</main>
{/* <!-- main-area-end --> */}

<Footer />
    </>
  )
}

export default GamesList
