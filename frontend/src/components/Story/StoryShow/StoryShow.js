import { useEffect } from 'react';
import { Link, useParams, Redirect} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStory, fetchStory } from '../../../store/stories';
import dateFormat from "dateformat";
import { readingTime } from 'reading-time-estimator';
import { Avatar } from 'evergreen-ui';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';
import BookmarkAddOutlined from '@mui/icons-material/BookmarkAddOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import ReviewIndex from '../../Review/ReviewIndex';
import './StoryShow.css'
import {getReviewsByStoryId } from '../../../store/reviews';
import defaultImage from "../StoryIndex/default.png"


export default function StoryShow() {
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
                <div className='story-show-link-bottom'>
                    <li><TwitterIcon/></li>
                    <li><FacebookIcon/></li>
                    <li><LinkedInIcon/></li>
                    <li><LinkIcon/></li>
                    <li><BookmarkAddOutlined/></li>
                    <li><MoreHorizIcon/></li>
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
                    <a><FavoriteBorderIcon /></a>
                    <a><ReviewIndex reviews={reviews} /></a>
                </div>
                <div className='story-show-footer-right'>
                    <a><IosShareOutlinedIcon /></a>
                    <a><BookmarkAddOutlined /></a>
                    <a><MoreHorizIcon /></a>
                </div>
            </div>
            
            
        </div>
    )
}
