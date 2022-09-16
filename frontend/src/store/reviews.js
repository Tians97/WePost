import csrfFetch from "./csrf";

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const REMOVE_REVIEW = "REMOVE_REVIEW"

const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})


const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const getReviews = state => {
    if (!state.reviews){
        return []
    }
    return Object.values(state.reviews)
}

export const getReviewsByStoryId = storyId => state => {
    if (!state) {
        return null
    } else if (!state.reviews) {
        return null
    } else {
        const matched = []
        Object.values(state.reviews).forEach((review)=>{
            if(review.storyId == storyId){
                matched.push(review)
            }
        })
        return matched
    }
}

export const getReview = reviewId => state => {
    if (!state){
        return null
    } else if (!state.reviews) {
        return null
    } else {
        return state.reviews[reviewId]
    }
}

export const fetchReviews = () => async dispatch => {
    const response = await csrfFetch('/api/reviews')
    if (response.ok){
        const reviews = await response.json()
        dispatch(receiveReviews(reviews))
    }
}


export const fetchReview = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`)
    if (response.ok){
        const review = await review.json()
        dispatch(receiveReview)
    }
}

export const createReview = (review) => async dispatch => {
    const response = await csrfFetch('/api/reviews', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review)
    })
    if (response.ok) {
        const review = await response.json()
        dispatch(receiveReview(review))
    }
}

export const updateReview = (review) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${review.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review)
    })
    if (response.ok) {
        const review = await response.json()
        dispatch(receiveReview(review))
    }
}

export const deleteReview = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE"
    })
    if (response.ok) {
        dispatch(removeReview(reviewId))
    }
}

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = { ...state }

    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews
        case RECEIVE_REVIEW:
            nextState[action.review.id] = action.review
            return nextState
        case REMOVE_REVIEW:
            delete nextState[action.reviewId]
            return nextState
        default:
            return state
    }
}

export default reviewsReducer