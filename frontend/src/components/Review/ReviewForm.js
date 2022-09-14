import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { createReview, fetchReview, getReview, updateReview } from "../../store/reviews";
import { Avatar } from 'evergreen-ui';

export default function ReviewForm({reviews}) {
    const {storyId} = useParams()
    const dispatch = useDispatch()
    const User = useSelector((state) => state.session.user);


    const reviewData = {
        body: "",
        author_id: User.id,
        story_id: storyId
    }    

    const [review, setReview] = useState(reviewData)

    // useEffect(() => {
    //     if (reviewId){
    //         dispatch(fetchReview(reviewId))
    //     }
    // }, [reviewId])

    function handleSubmit(e){
        e.preventDefault();
        dispatch(createReview(review))
        setReview(reviewData)
    }
    

    return (
        <>
            <div className="response-header">
                <h2>Responses</h2>
            </div>
            <div className="response-textarea-container">
                <div className='r-a-i-n'>
                    <div className="r-a-i">
                        <Avatar name={`${User.username}`} size={40} />
                    </div>
                    <div className="r-a-n">
                        <a>{User.username}</a>
                    </div>
                </div>
                
                <form> 
                    <textarea className="r-t" value={review.body} onChange={e => { setReview({ ...review, body: e.target.value }) }}></textarea>
                    <div className="r-f-b" onClick={handleSubmit}>Respond</div>
                </form>
            </div>
        </>
    )
}