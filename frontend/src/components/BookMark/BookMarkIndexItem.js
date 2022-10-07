import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteBookmark } from '../../store/bookmarks'

export default function BookMarkIndexItem({ story }) {
    const dispatch = useDispatch()
    const history = useHistory()
    return (
        <div className='user-stories'>
            <div className='user-story-index-item-container'>
                <Link className='link' to={`/stories/${story.id}`}>
                    <div className='user-story-title'>
                        <p>{story.title}</p>
                    </div>
                    <div className='user-story-body'>
                        <p>{story.body.substring(0, 250)}...</p>
                    </div>
                </Link>
                <div className='story-image'>
                    <img className='story-img' src={story.photoUrl} />
                </div>
            </div>
            <div className='edit-button'>
                <a className='edit-delete' onClick={() => { dispatch(deleteBookmark(story.bookmarkId)) }}>Delete</a>
            </div>
        </div>
    )
}