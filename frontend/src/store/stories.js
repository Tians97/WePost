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

