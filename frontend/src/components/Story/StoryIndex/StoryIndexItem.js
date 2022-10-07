import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import dateFormat from "dateformat";
import { readingTime } from 'reading-time-estimator'
import {Avatar} from 'evergreen-ui'
import "./StoryIndexItem.css"
import defaultImage from  "./default.png" 
import { createBookmark, deleteBookmark, fetchUserBookmarks, getBookmark} from '../../../store/bookmarks';


export default function StoryIndexItem({story}) {
    const dispatch = useDispatch()
    const text = story.body
    const result = readingTime(text,100)
    const sessionUser = useSelector((state) => state.session.user);
    const bookmark = useSelector(getBookmark(story.id))
    


    const handleSubmit = (e) => {
        e.preventDefault();
        if (bookmark) {
            dispatch(deleteBookmark(bookmark.id))
        } else {
            dispatch(createBookmark({ userId: sessionUser.id, storyId: story.id }))
        }
    };

    useEffect(()=> {
        if (sessionUser){
            dispatch(fetchUserBookmarks())
        }
    },[])

    return (
            <div className='story-container'>
                <div className='story-word'>
                    <div className='user-data'>
                        <a className='index-icon'>
                        <Avatar className="user-icon" style={{ zIndex: 0}} name={`${story.author}`} size={30} />
                        </a>
                        <a className='author-name'>{story.author}<span className="date"> · {dateFormat(story.updatedAt, "fullDate")}</span></a>
                    </div>
                    <Link className='link' to={`/stories/${story.id}`}>
                        <div className='story-title'>
                            <p>{story.title}</p>
                        </div>
                        <div className='story-body'>
                            <p>{story.body.substring(0, 250)}...</p>
                        </div>
                    </Link>
                    <div className='story-word-bottom'>
                        <div className='story-word-bottom-left'>
                            <div className='category-box'>
                                <a id='category-box'>{story.category}</a>
                            </div>
                            <div className='reading-time'>
                                <a>{result.text}</a>
                            </div>
                        </div>
                        <div className='story-word-bottom-right'>
                            <div className='button-icon'>
                                {sessionUser && 
                                (bookmark ? (<li><TurnedInIcon onClick={handleSubmit} /></li>) : (<li><TurnedInNotOutlinedIcon onClick={handleSubmit} /></li>))
                                }
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className='story-image'>
                <img className='story-img' src={story.photoUrl ? story.photoUrl : defaultImage} />
                </div>
            </div>
    )
}
