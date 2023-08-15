/*eslint-disable */
import React from 'react'
import { useSelector } from 'react-redux'
import { unFriendOtherUser } from '../../services/UserService'

const RemoveModal = ({user}) => {
    let state = useSelector(state=>state.RedirectFollowReducer)
    let state2= useSelector(state2=>state2.SingleUserReducer)
    let unFollow = async () => {
      if(state.follow === "follower") {
  let obj = {
    sender_id : state2[0] ? (state2[0]._id) : null,
    receiver_id : user._id,
friend : false
}
// let result2 = await unFriendOtherUser();
}
    }
  return (
    <>
        {/* <!-- Modal --> */}
<div className="modal fade" id="removeModal" tabIndex="-1" aria-labelledby="removeModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Remove {state.follow}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Are you sure to remove <b>{user.name}</b> from your {state.follow2} ?
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary2" data-bs-dismiss="modal">NO</button>
        <button type="button" className="btn btn-primary2" onClick={unFollow}>Yes</button>
      </div>
    </div>
  </div>
</div>
{/* <!-- Modal end --> */}
    </>
  )
}

export default RemoveModal