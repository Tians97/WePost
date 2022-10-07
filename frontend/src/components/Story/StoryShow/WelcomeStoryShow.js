import { useEffect, useState } from 'react';
import { Link, useParams, Redirect} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStory, fetchStory } from '../../../store/stories';
import dateFormat from "dateformat";
import { readingTime } from 'reading-time-estimator';
import { Avatar } from 'evergreen-ui';
import './WelcomeStoryShow.css'
import {getReviewsByStoryId } from '../../../store/reviews';
import defaultImage from "../StoryIndex/default.png"


export default function WelcomeStoryShow() {
    const {storyId} = useParams()
    const dispatch = useDispatch()
    const story = useSelector(getStory(storyId))

    const reviews = useSelector(getReviewsByStoryId(storyId))
    

    useEffect(() => {
        dispatch(fetchStory(storyId))
    }, [storyId]) 

    if (!story){
        return null
    }

    const text = story.body
    const result = readingTime(text, 100)

    

    return (
        <div className='story-show-container'>
            <div className='story-show-header'>
                <div className='story-show-information'>
                    <div className='author-icon'>
                        <Avatar name={`${story.author}`} size={60} />
                    </div>
                    <div className='author-information'>
                        <li className='author'>{story.author}</li>
                        <li className='date-reading-time'>
                            <a id="date-reading-time">{dateFormat(story.updatedAt, "fullDate")} · {result.text} ·</a> <a> Listen</a>
                        </li>
                    </div>
                </div>
            </div>

            <div className='story-show-title'>
                {story.title}
            </div>

            <img className='story-show-image' src={story.photoUrl ? story.photoUrl : defaultImage}/>

            <div className='story-show-body'>
                {story.body}
            </div>
        </div>
    )
}