import React from 'react'
import { Link } from 'react-router-dom';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import dateFormat from "dateformat";
import { readingTime } from 'reading-time-estimator'
import "./StoryIndexItem.css"


export default function StoryIndexItem({story}) {
    const text = story.body
    const result = readingTime(text,100)
    return (
            <div className='story-container'>
                <div className='story-word'>
                    <div className='user-date'>
                        <p className='author-name'>{story.author}<span className="date"> · {dateFormat(story.updatedAt, "fullDate")}</span></p>
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
                    <img className='story-img' src='https://i.postimg.cc/sDxkgs9J/Untitled-design-1.png'/>
                </div>
            </div>
    )
}
