import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { createReview, fetchReview, getReview, updateReview } from "../../store/reviews";

export default function ReviewForm() {
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
            <h3>Responses</h3>
            <h5>{User.username}</h5>
            <form onSubmit={handleSubmit}> 
                <textarea className="responses-textarea" value={review.body} onChange={e => { setReview({ ...review, body: e.target.value }) }}></textarea>
                <button>Respond</button>
            </form>
        </>
    )
}