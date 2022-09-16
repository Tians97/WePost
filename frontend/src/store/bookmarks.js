import csrfFetch from "./csrf";

export const RECEIVE_BOOKMARKS = "RECEIVE_BOOKMARKS"
export const RECEIVE_BOOKMARK = "RECEIVE_BOOKMARK"
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK"


//actions

const receiveBookmarks = bookmarks => ({
    type: RECEIVE_BOOKMARKS,
    bookmarks
})

const receiveBookmark = bookmark => ({
    type: RECEIVE_BOOKMARK,
    bookmark
})

const removeBookmark = bookmarkId => ({
    type: REMOVE_BOOKMARK,
    bookmarkId
})

//selectors

// export const getBookmarks = state => {
//     if (!state.bookmarks) {
//         return []
//     }
//     return Object.values(state.bookmarks)
// }

export const getUserBookmarks = state => {
    if (!state.bookmarks) {
        return []
    }
    return Object.values(state.bookmarks)
}

export const getBookmark = storyId => state => {
    if (!state) {
        return null
    } else if (!state.bookmarks) {
        return null
    } else {
        const arr = Object.values(state.bookmarks)
        // return arr
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if(element.storyId == storyId){
                return element
            }
        }
        return null
    }
}

//thunks

export const fetchUserBookmarks = () => async dispatch => {
    const response = await csrfFetch('/api/bookmarks')
    if (response.ok) {
        const bookmarks = await response.json()
        dispatch(receiveBookmarks(bookmarks))
    }
}

export const createBookmark = (bookmark) => async dispatch => {
    const response = await csrfFetch('/api/bookmarks', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({bookmark: bookmark})
    })
    if (response.ok) {
        const bookmark = await response.json()
        dispatch(receiveBookmark(bookmark))
    }
}


export const deleteBookmark = (bookmarkId) => async dispatch => {
    const response = await csrfFetch(`/api/bookmarks/${bookmarkId}`, {
        method: "DELETE"
    })
    if (response.ok) {
        dispatch(removeBookmark(bookmarkId))
    }
}

const bookmarksReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = { ...state }

    switch (action.type) {
        case RECEIVE_BOOKMARKS:
            return action.bookmarks
        case RECEIVE_BOOKMARK:
            // nextState.id = action.bookmark.bookmark.id
            // nextState.bookmarked = true
            nextState[action.bookmark.id] = action.bookmark
            return nextState
        case REMOVE_BOOKMARK:
            // delete nextState.id
            // nextState.bookmarked = false
            delete nextState[action.bookmarkId]
            return nextState
        default:
            return state
    }
}

export default bookmarksReducer