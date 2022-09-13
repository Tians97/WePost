import React from 'react'
import { Link } from 'react-router-dom';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import dateFormat from "dateformat";
import { readingTime } from 'reading-time-estimator'
import {Avatar} from 'evergreen-ui'
import "./StoryIndexItem.css"


export default function StoryIndexItem({story}) {
    const text = story.body
    const result = readingTime(text,100)
    console.log(story.photoUrl)
    return (
            <div className='story-container'>
                <div className='story-word'>
                    <div className='user-data'>
                        <a>
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
                                <li><BookmarkBorderIcon /></li>
                                <li><RemoveCircleOutlineIcon /></li>
                                <li><MoreHorizIcon /></li>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='story-image'>
                    <img className='story-img' src={story.photoUrl}/>
                </div>
            </div>
    )
}
