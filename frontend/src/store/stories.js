import csrfFetch from "./csrf.js"

export const RECEIVE_STORIES = 'RECEIVE_STORIES'
export const RECEIVE_STORY = 'RECEIVE_STORY'
export const REMOVE_STORY = 'REMOVE_STORY'

const receiveStories = stories => ({
    type: RECEIVE_STORIES,
    stories
})

const receiveStory = story => ({
    type: RECEIVE_STORY,
    story
})

const removeStory = storyId => ({
    type: REMOVE_STORY,
    storyId
})


export const getStories = state => {
    if(!state.stories){
        return []
    }
    return Object.values(state.stories)
}

export const getStory = storyId => state => {
    if (!state) {
        return null
    } else if (!state.stories) {
        return null
    } else {
        return state.stories[storyId]
    }
}

export const fetchStories = () => async dispatch => {
    const response = await csrfFetch('/api/stories')
    if (response.ok) {
        const stories = await response.json()
        dispatch(receiveStories(stories))
    }
} 

export const fetchCatStories = (categoryId) => async dispatch =>{
    const response = await csrfFetch(`/api/categories/${categoryId}`)
    // debugger
    if (response.ok) {
        // debugger
        const stories = await response.json()
        dispatch(receiveStories(stories))
    }
}

export const fetchUserStories = (userId) => async dispatch => {
    const response = await csrfFetch(`/api/users/${userId}/stories`)
    if (response.ok) {
        // debugger
        const stories = await response.json()
        dispatch(receiveStories(stories))
    }
}

export const fetchStory = (storyId) => async dispatch => {
    const response = await csrfFetch(`/api/stories/${storyId}`)
    if (response.ok) {
        const story = await response.json()
        dispatch(receiveStory(story))
    }
}

export const createStory = (story) => async dispatch => {
    const response = await fetch('/api/stories', {
        method: "POST",
        headers: { 'X-CSRF-Token': sessionStorage.getItem('X-CSRF-Token')},
        body: story
    })
    if (response.ok) {
        const storyData = await response.json()
        dispatch(receiveStory(storyData))
    }
}

export const updateStory = (story, storyId) => async dispatch => {
    const response = await fetch(`/api/stories/${storyId}`, {
        method: "PATCH",
        headers: { 'X-CSRF-Token': sessionStorage.getItem('X-CSRF-Token') },
        body: story
    })
    if (response.ok) {
        const story = await response.json()
        dispatch(receiveStory(story))
    } 
}

export const deleteStory = (storyId) => async dispatch => {
    const response = await csrfFetch(`/api/stories/${storyId}`, {
        method: "DELETE"
    })
    if (response.ok) {
        dispatch(removeStory(storyId))
    }
}

const storiesReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = { ...state }

    switch (action.type) {
        case RECEIVE_STORIES:
            return action.stories
        case RECEIVE_STORY:
            nextState[action.story.id] = action.story
            return nextState
        case REMOVE_STORY:
            delete nextState[action.storyId]
            return nextState
        default:
            return state
    }
}

export default storiesReducer

