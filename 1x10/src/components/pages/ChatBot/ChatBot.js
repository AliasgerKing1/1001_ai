import React from 'react'
import Header from '../../shared/Header';
import Sidebar from '../../shared/Sidebar';
import ChatBotContent from '../../shared/MainContent/ChatBotContent';
import Footer from '../../shared/Footer';

const ChatBot = () => {
  return (
    <>
<div>
  {/* Moving Submenu */}
  <div className="techwave_fn_fixedsub">
    <ul />
  </div>
  {/* !Moving Submenu */}
  {/* Preloader */}
  {/* <div className="techwave_fn_preloader">
    <svg>
      <circle className="first_circle" cx="50%" cy="50%" r={110} />
      <circle className="second_circle" cx="50%" cy="50%" r={110} />
    </svg>
  </div> */}
  {/* !Preloader */}
  <div className="techwave_fn_font">
    <a className="font__closer_link fn__icon_button" href="#"><img src="/assets/svg/close.svg" alt className="fn__svg" /></a>
    <div className="font__closer" />
    <div className="font__dialog">
      <h3 className="title">Font Options</h3>
      <label htmlFor="font_size">Font Size</label>
      <select id="font_size">
        <option value={10}>10 px</option>
        <option value={12}>12 px</option>
        <option value={14}>14 px</option>
        <option value={16} selected>16 px</option>
        <option value={18}>18 px</option>
        <option value={20}>20 px</option>
        <option value={22}>22 px</option>
        <option value={24}>24 px</option>
        <option value={26}>26 px</option>
        <option value={28}>28 px</option>
      </select>
      <a href="#" className="apply techwave_fn_button"><span>Apply</span></a>
    </div>
  </div>
  {/* MAIN WRAPPER */}
  <div className="techwave_fn_wrapper fn__has_sidebar">
    <div className="techwave_fn_wrap">
      {/* Searchbar */}
      <div className="techwave_fn_searchbar">
        <div className="search__bar">
          <input className="search__input" type="text" placeholder="Search here..." />
          <img src="/assets/svg/search.svg" alt className="fn__svg search__icon" />
          <a className="search__closer" href="#"><img src="/assets/svg/close.svg" alt className="fn__svg" /></a>
        </div>
        <div className="search__results">
          {/* Results will come here (via ajax after the integration you made after purchase as it doesn't work in HTML) */}
          <div className="results__title">Results</div>
          <div className="results__list">
            <ul>
              <li><a href="#">Artificial Intelligence</a></li>
              <li><a href="#">Learn about the impact of AI on the financial industry</a></li>
              <li><a href="#">Delve into the realm of AI-driven manufacturing</a></li>
              <li><a href="#">Understand the ethical implications surrounding AI</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* !Searchbar */}
<Header />
      {/* !HEADER */}
      {/* LEFT PANEL */}
<Sidebar />
      {/* !LEFT PANEL */}
      {/* CONTENT */}
      <div className="techwave_fn_content">
        {/* PAGE (all pages go inside this div) */}
<ChatBotContent />
        {/* !PAGE (all pages go inside this div) */}
        {/* FOOTER (inside the content) */}
<Footer />
        {/* !FOOTER (inside the content) */}
      </div>
      {/* !CONTENT */}
    </div>
  </div>
  {/* !MAIN WRAPPER */}
</div>

    </>
  )
}

export default ChatBot
