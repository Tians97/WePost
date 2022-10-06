import { useEffect, useState } from 'react';
import { Link, useParams, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStory, fetchStory } from '../../../store/stories';
import dateFormat from "dateformat";
import { readingTime } from 'reading-time-estimator';
import { Avatar } from 'evergreen-ui';
import ReviewIndex from '../../Review/ReviewIndex';
import './StoryShow.css'
import {getReviewsByStoryId } from '../../../store/reviews';
import defaultImage from "../StoryIndex/default.png"
import { getBookmark, deleteBookmark, createBookmark,  } from '../../../store/bookmarks';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';


export default function StoryShow() {
    const {storyId} = useParams()
    const dispatch = useDispatch()
    const story = useSelector(getStory(storyId))
    // let story = {

    // }
    // const [story, setStory] = useState(getStory(storyId))
    const sessionUser = useSelector((state) => state.session.user);
    const reviews = useSelector(getReviewsByStoryId(storyId))

    const bookmark = useSelector(getBookmark(storyId))
    const history = useHistory()



    const handleSubmit = (e) => {
        e.preventDefault();
        if (bookmark) {
            dispatch(deleteBookmark(bookmark.id))
        } else {
            dispatch(createBookmark({ userId: sessionUser.id, storyId: story.id }))
        }
    };
    

    useEffect(() => {
        dispatch(fetchStory(storyId)).catch((e) => history.push("/error"))
    }, [storyId]) 

    if(!story){
        return null
    }

    // useEffect(()=>{
    //     if(!story){
    //         dispatch(fetchStory(storyId))
    //         // setStory(getStory(storyId))
    //     } 
    // },[])
    // if(!story){
    //     return null
    // }
    console.log(story)
    const text = story.body
    const result = readingTime(text, 100)

    

    return (
        <>
            {story && (
            <div className='story-show-container'>
                <div className='story-show-header'>
                    <div className='story-show-information'>
                        <div className='author-icon'>
                            <Avatar name={`${story.author}`} size={60} />
                        </div>
                        <div className='author-information'>
                            <li className='author'>{story.author}</li>
                            <li className='date-reading-time'>
                                <a id="date-reading-time">{dateFormat(story.updatedAt, "fullDate")} · {result.text}</a>
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

                <div className='story-show-footer'>
                    <div className='story-show-footer-left'>
                        <a><ReviewIndex reviews={reviews} /></a>
                    </div>
                    <div className='story-show-footer-right'>
                        {bookmark ? (<TurnedInIcon onClick={handleSubmit} />) : (<TurnedInNotOutlinedIcon onClick={handleSubmit} />)}
                    </div>
                </div>
                
                
            </div>
            )}
        </>
    )
}
