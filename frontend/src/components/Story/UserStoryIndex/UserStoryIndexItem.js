import React from 'react'
import { Link } from 'react-router-dom'
import { deleteStory } from '../../../store/stories'
import { useDispatch } from 'react-redux'

export default function UserStoryIndexItem({ story }) {
    const dispatch = useDispatch()
    return (
        <>
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
                    <img className='story-img' src='https://i.postimg.cc/sDxkgs9J/Untitled-design-1.png' />
                </div>
            </div>
            <div className='edit-button'>
                <a className='edit-update'>Update</a>
                <a className='edit-delete' onClick={() => { dispatch(deleteStory(story.id))}}>Delete</a>
            </div>
        </>
    )
}
