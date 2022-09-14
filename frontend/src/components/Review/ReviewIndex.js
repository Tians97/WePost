import React, { useState, useEffect } from 'react'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { SideSheet, Paragraph } from 'evergreen-ui';
import './ReviewIndex.css'
import { fetchReviews, getReviews } from '../../store/reviews';
import { useDispatch } from 'react-redux';
import ReviewIndexItem from './ReviewIndexItem';
import { useSelector } from 'react-redux';

export default function ReviewIndex({reviews}) {
    // const [isShown, setIsShown] = React.useState(false)
    const dispatch = useDispatch()
    console.log (reviews);
    useEffect(() => {
        dispatch(fetchReviews())
    }, [])
    return (
        <>
            {/* <SideSheet width={400} isShown={isShown}  onCloseComplete={() => setIsShown(false)}>
                <ReviewForm/>
            </SideSheet>
            <a onClick={() => setIsShown(true)}><ChatBubbleOutlineOutlinedIcon/></a> */}
            {/* <ChatBubbleOutlineOutlinedIcon /> */}
            <h2>Responses</h2>
            <ul>
                {reviews.map(review => {
                    return <li><ReviewIndexItem key={review.id} review={review} /></li>
                })}
            </ul>

        </>

    )
}
