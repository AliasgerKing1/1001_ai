/*eslint-disable */
// https://preview.keenthemes.com/metronic8/demo1/dashboards/social.html?_ga=2.147283249.743252408.1683647965-1858520265.1683647962
import React, { useEffect, useState } from 'react'


import { useDispatch, useSelector } from 'react-redux'
import {getFollowersRedux} from "../../../Redux/FetchFollowersReducer"
import { getFollowingsRedux } from '../../../Redux/FetchFollowingsReducer'


import { getFollowersByDirect, getFollowingsByDirect, getFollwersList, getFollwingsList } from '../../../services/UserService'


import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import RemoveModal from '../../shared/RemoveModal'
import { AlertDanger } from '../../shared/Alert'

const FollowList = () => {
    let dispatch = useDispatch();
	let state = useSelector(state=>state.SingleUserReducer)
	let state2 = useSelector(state2=>state2.FetchFollowersReducer)
	let state3 = useSelector(state3=>state3.FetchFollowingsReducer)
	let state4 = useSelector(state4=>state4.RedirectFollowReducer)
	useEffect(()=> {
 getFollwersList(state[0] ? (state[0]._id) : null).then(result => {
    getFollowersByDirect(result.data[0].followers).then(result2=> {
        dispatch(getFollowersRedux(result2.data))
    })
})
 getFollwingsList(state[0] ? (state[0]._id) : null).then(result => {
getFollowingsByDirect(result.data[0].followings).then(result=> {
    dispatch(getFollowingsRedux(result.data))
})
})
	}, [])
  return (
    <>
<Header />


    {/* <!-- main-area --> */}
    <main className="main--area">
        {/* <!-- team-details-area --> */}
        <section className="team__details-area section-pt-120 section-pb-120" data-background="/assets/img/bg/team_details_bg.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
<table className='ms-5 me-5'>
<tbody>
{ state4.follow === "follower" ? (state2.map((x)=> {
    return (
        <tr key={x._id}>
		<td><img src="/assets/images/person_1.jpg" alt="follower/following profile picture" className='pro-pic' /></td>
		<td><h3 className='pro-name ms-4'>{x.name}</h3></td>
		<td><a className='ms-1 follow'><sup>Follow</sup></a></td>
		<td><div className='contact__form-wrap'><button className="submit-btn2 ms-500" data-bs-toggle="modal" data-bs-target="#removeModal">Remove</button></div></td>
		<RemoveModal user={x} />
	</tr>
    )
})) : (
    <tr>
    <td>
    <AlertDanger msg="You have no followers yet !" />
    </td>
    </tr>
    )}

{ state4.follow === "following" ? (state3.map((x)=> {
    return (
        <tr key={x._id}>
		<td><img src="/assets/images/person_1.jpg" alt="follower/following profile picture" className='pro-pic' /></td>
		<td><h3 className='pro-name ms-4'>{x.name}</h3></td>
		<td><a className='ms-1 follow'><sup>Follow</sup></a></td>
		<td><div className='contact__form-wrap'><button className="submit-btn2 ms-500" data-bs-toggle="modal" data-bs-target="#removeModal">Remove</button></div></td>
		<RemoveModal user={x.name}/>
	</tr>
    )
})) : (
    <tr>
    <td>
    <AlertDanger msg="You dont follow anyone yet !" />
    </td>
    </tr>)}
</tbody>
</table>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- team-details-area-end --> */}

    </main>
    {/* <!-- main-area-end --> */}


   <Footer />
   </>
  )
}

export default FollowList