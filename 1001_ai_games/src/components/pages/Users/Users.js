/*eslint-disable */
import React, { useEffect,useState } from 'react'


import { useDispatch, useSelector } from 'react-redux'
import {getUserRedux} from "../../../Redux/UserReducer"


import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import UserCard from '../../shared/UserCard'
import Search from '../../shared/Search'

const Users = () => {
    let dispatch = useDispatch();
    let state = useSelector(state=>state.UserReducer)
    let state2 = useSelector(state2=>state2.SearchReducer)
    let [showSpinner, setShowSpinner] = useState(false);
    const [isScrolledToFixedHeight, setIsScrolledToFixedHeight] = useState(false);
    const [pages, setPages] = useState(8);
    const [infheight, setInfHeight] = useState(500)
    const fixedHeight = infheight; // the fixed height to check against
  
    useEffect(() => {
      if(state2.length == 0) {
        setShowSpinner(true);
        function handleScroll() {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const isFixedHeightReached = scrollTop >= fixedHeight;
          setIsScrolledToFixedHeight(isFixedHeightReached);
        }
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }
    }, []);
  
      useEffect(() => {
    if (isScrolledToFixedHeight) {
        setShowSpinner(true);
      // Calling API
      fetch(`http://localhost:4000/api/user/?limit=8&page=${pages}`)
        .then((response) => response.json())
        .then((newData) => {
// let uniqueArr = [...new Set(arr.map(obj => JSON.stringify(obj)))].map(str => JSON.parse(str));
dispatch(getUserRedux(newData));
setShowSpinner(false);
setPages(pages + 8);
setInfHeight(infheight + 450);
          });
    }
  }, [isScrolledToFixedHeight]);

  return (
    <>
<Header />
                {/* <!-- team-area --> */}
                <section className="team__area team-bg section-pt-130 section-pb-100" data-background="/assets/img/bg/team_bg.jpg">
            <div className="container">
<Search />
                <div className="row justify-content-center">
<UserCard state={state} />
{/* {showSpinner == true ? (<div className="spinner-border text-success" role="status">
  <span className="visually-hidden">Loading...</span>
</div>) : null} */}
                </div>
            </div>
        
        </section>
        {/* {isScrolledToFixedHeight ? (
        <p>Scrolled to fixed height of {fixedHeight}px!</p>
      ) : null} */}
        {/* <!-- team-area-end --> */}
        <Footer />
    </>
  )
}

export default Users