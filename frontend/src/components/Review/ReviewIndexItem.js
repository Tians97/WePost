import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar } from 'evergreen-ui'
import { deleteReview } from '../../store/reviews'


export default function ReviewIndexItem({review}) {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    
    return (

        <div className='reviews-content-container'>
            <div className='review-content-top'>
                <div className="review-avatar">
                    <Avatar name={`${review.reviewAuthor}`} size={30} />
                </div>
                <div className="review-name">
                    <a>{review.reviewAuthor}</a>
                </div>
            </div>
            <div className='review-content-bottom'>
                <p className='review-body'>{review.body}</p>
                {(sessionUser ? sessionUser.username : null) === review.reviewAuthor ? <button className='review-delete-button' onClick={() => dispatch(deleteReview(review.id))}>Delete</button> : <p></p>}
            </div>
        </div>
    )
}
