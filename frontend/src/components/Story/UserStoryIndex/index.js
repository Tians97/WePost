import { useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getStories, fetchUserStories } from '../../../store/stories'
import "./UserStoryIndex.css"
import UserStoryIndexItem from './UserStoryIndexItem'

export default function UserStoryIndex() {
  const {userId} = useParams()
  const dispatch = useDispatch()
  const stories = useSelector(getStories)

  useEffect(() => {
    dispatch(fetchUserStories(userId))
  },[userId])

  return (
    <div className = "user-stories-container">
      <div className='user-stories-header'>
        <h1>Your stories</h1>
        <a>Write a story</a>
      </div>
      <div className='user-stories-index'>
        {stories.map(story => {
          return <UserStoryIndexItem key={story.id} story={story} />
        })}
      </div>
    </div>
  )
}
