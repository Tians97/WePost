import React from 'react'
import { useDispatch } from 'react-redux'


export default function ReviewIndexItem({review}) {
    const dispatch = useDispatch()
    return (

        <div>
            <div>{review.author}</div>
            <div>{review.body}</div>
        </div>
    )
}
