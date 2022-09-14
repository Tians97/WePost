import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar } from 'evergreen-ui'
import { deleteReview } from '../../store/reviews'


export default function ReviewIndexItem({review}) {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    return (

        <div className='r-i-i-container'>
            <div className='r-i-i-n'>
                <div className="r-i-i">
                    <Avatar name={`${review.reviewAuthor}`} size={30} />
                </div>
                <div className="r-i-n">
                    <a>{review.reviewAuthor}</a>
                </div>
            </div>
            <div className='r-i-i-b-d'>
                <p className='r-i-i-b'>{review.body}</p>
                {(sessionUser ? sessionUser.username : null) === review.reviewAuthor ? <p className='r-i-i-d' onClick={() => dispatch(deleteReview(review.id))}>Delete</p> : <p></p>}
            </div>
        </div>
    )
}
