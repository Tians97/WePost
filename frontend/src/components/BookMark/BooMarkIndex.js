import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserBookmarks, getUserBookmarks } from '../../store/bookmarks'
import { Link } from 'react-router-dom'
import BookMarkIndexItem from './BookMarkIndexItem'


export default function BookMarkIndex() {
    const dispatch = useDispatch()

    const bookmarks = useSelector(getUserBookmarks)

    const sessionUser = useSelector(state => state.session.user)

    const stories = []

    bookmarks.forEach(bookmark => {
        stories.push(bookmark.story)
    })
    // const stories = bookmarks.map(bookmark => {
    //     bookmark[story]
    // })


    useEffect(() => {
            dispatch(fetchUserBookmarks())
    },[])

    return(
        <>
            {sessionUser && (
                <div className="user-stories-container">
                    <div className='user-stories-header'>
                        <h1>Your bookmarks</h1>
                    </div>
                    <div className='user-stories-index'>
                        {stories.map(story => {
                            return <BookMarkIndexItem key={story.id} story={story} />
                        })}
                    </div>
                </div>
            )}
        </>
    )
}
