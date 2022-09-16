import React from 'react'
import "./Bookmark.css"

export default function Bookmark() {
    return (
        <div className="user-bookmarks-container">
            <div className='user-bookmarks-header'>
                <h1>Your bookmarks</h1>
            </div>
            <div className='user-bookmarks-index'>
                {/* {stories.map(story => {
                    return <UserStoryIndexItem key={story.id} story={story} />
                })} */}
            </div>
        </div>
    )
}
