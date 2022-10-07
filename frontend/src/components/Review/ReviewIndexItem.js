import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar } from 'evergreen-ui'
import { deleteReview, updateReview } from '../../store/reviews'


export default function ReviewIndexItem({review}) {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const [showForm, setShowForm] = useState(false);
    const [showEditButton, setShowEditButton] = useState(true);
    const [body, setBody] = useState(review.body);
    let updatedReview = {
        id: review.id,
        body: review.body,
        author: review.reviewAuthor,
        storyId: review.storyId,
    };

    const handleEditButton = (e) => {
        e.preventDefault();
        setShowEditButton(false);
        setShowForm(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updatedReview = { ...updatedReview, body };
        if (body.trim().length >= 1) {
            dispatch(updateReview(updatedReview));
        } else {
            setBody(updatedReview.body);
        }
        setShowForm(false);
        setShowEditButton(true);
    };

    const handleChange = (e) => {
        e.target.style.height = "initial";
        e.target.style.height = `${e.target.scrollHeight}px`;
        setBody(e.target.value);
    };


    return (

        <div className='reviews-content-container'>
            <div className='review-content-top'>
                <div className="review-avatar">
                    <Avatar name={`${review.reviewAuthor}`} size={30} />
                </div>
                <div className="review-name">
                    <a>{review.reviewAuthor}</a>
                </div>
                <div className='edit-buttons'>
                    {showEditButton && (sessionUser ? sessionUser.username : null) === review.reviewAuthor ? <button className='review-update-button' onClick={handleEditButton}>Update</button> : <p></p>}
                    {showEditButton && (sessionUser ? sessionUser.username : null) === review.reviewAuthor ? <button className='review-delete-button' onClick={() => dispatch(deleteReview(review.id))}>Delete</button> : <p></p>}
                </div>
            </div>
            <div className='review-content-bottom'>
                {!showForm && <p className='review-body'>{review.body}</p>}
                {showForm && (
                    <>
                        <div>
                            <form>
                                <textarea className='update-review-textarea' rows="5" value={body} onChange={handleChange} />
                                <br/>
                                <button className="update-confirm" onClick={handleSubmit}>Update</button>
                                <button className='review-delete-button' onClick={() => dispatch(deleteReview(review.id))}>Delete</button>
                            </form>
                        </div>
                    </>
                )}
                <br/>
                
                
            </div>
        </div>
    )
}
