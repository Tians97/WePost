import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getStories, fetchStories,fetchCatStories,fetchUserStories } from '../../../store/stories'
import StoryIndexItem from './StoryIndexItem';
import"./StoryIndex.css"

export default function StoryIndex() {

    const {categoryId} = useParams()
    const {userId} = useParams()

    const dispatch = useDispatch()
    const stories = useSelector(getStories)

    useEffect(() => {
        if(categoryId){
            dispatch(fetchCatStories(categoryId))
        } else if (userId) {
            dispatch(fetchUserStories(userId))
        }
        else {
            dispatch(fetchStories())
        }
    },[categoryId, userId])

    return (
        <div className='index-item'>
                {stories.map(story => {
                    return <StoryIndexItem key={story.id} story={story} />
                })}
        </div>
    )
}
