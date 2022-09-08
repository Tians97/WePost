export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

const receiveCategories = categories => ({
    type: RECEIVE_CATEGORIES,
    categories
})

export const getCategories = state => {
    if (!state.categories) {
        return []
    }
    return Object.values(state.categories)
}

export const fetchCategories = () => async dispatch => {
    const response = await fetch('/api/categories')
    if (response.ok) {
        const categories = await response.json()
        dispatch(receiveCategories(categories))
    }
}

const categoriesReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = { ...state }

    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return { ...nextState, ...action.categories }
        default:
            return state
    }
}

export default categoriesReducer