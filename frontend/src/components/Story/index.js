import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStories, fetchStories } from '../../store/stories'

export default function StoryIndex() {

    const dispatch = useDispatch()
    const stories = useSelector(getStories)

    useEffect(() => {
        dispatch(fetchStories())
    },[])

    return (
        <>
            <ul>
                {stories.map(story => {
                    return <ul>
                                <li>{story.id}</li>
                                <li>{story.title}</li>
                                <li>{story.body}</li>
                            </ul>
                })}
            </ul>
        </>
    )
}
