import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { deleteStory } from '../../../store/stories'
import { useDispatch } from 'react-redux'
import defaultImage from '../StoryIndex/default.png'

export default function UserStoryIndexItem({ story }) {
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
                    <img className='story-img' src={story.photoUrl ? story.photoUrl : defaultImage} />
                </div>
            </div>
            <div className='edit-button'>
                <a className='edit-update' onClick={()=>history.push(`/stories/${story.id}/edit`) }>Update</a>
                <a className='edit-delete' onClick={() => { dispatch(deleteStory(story.id))}}>Delete</a>
            </div>
        </div>
    )
}
