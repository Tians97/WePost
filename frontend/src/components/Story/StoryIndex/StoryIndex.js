import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getStories, fetchStories,fetchCatStories } from '../../../store/stories'
import StoryIndexItem from './StoryIndexItem';
import"./StoryIndex.css"

export default function StoryIndex() {

    const {categoryId} = useParams()

    const dispatch = useDispatch()
    const stories = useSelector(getStories)

    useEffect(() => {
        if(categoryId){
            dispatch(fetchCatStories(categoryId))
        } else {
            dispatch(fetchStories())
        }
    },[categoryId])

    return (
        <>
            <ul className='index-item'>
                {stories.map(story => {
                    return <li><StoryIndexItem key={story.id} story={story} /></li>
                })}
            </ul>
        </>
    )
}
