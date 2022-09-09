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
    const response = await fetch('/api/stories')
    if (response.ok) {
        const stories = await response.json()
        dispatch(receiveStories(stories))
    }
}


export const fetchStory = (storyId) => async dispatch => {
    const response = await fetch(`/api/stories/${storyId}`)
    if (response.ok) {
        const story = await response.json()
        dispatch(receiveStory(story))
    }
}

export const createStory = (story) => async dispatch => {
    const response = await fetch('/api/stories', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(story)
    })
    if (response.ok) {
        const story = await response.json()
        dispatch(receiveStory(story))
    }
}

export const updateStory = (story) => async dispatch => {
    const response = await fetch(`/api/stories/${story.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(story)
    })
    if (response.ok) {
        const story = await response.json()
        dispatch(receiveStory(story))
    } 
}

export const deleteStory = (storyId) => async dispatch => {
    const response = await fetch(`/api/stories/${storyId}`, {
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
            return { ...nextState, ...action.stories }
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

