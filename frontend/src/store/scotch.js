import {fetch} from "./csrf"
const UPDATE_SCOTCH = 'scotch/UPDATE_SCOTCH'
const CREATE_SCOTCH = "scotch/CREATE_SCOTCH"

const editScotch = newEdits => ({
    type: UPDATE_SCOTCH,
    newEdits
})

const addScotch = newScotch => ({
    type: CREATE_SCOTCH,
    newScotch
})

// frontend src store scotch.js
export const updateSpirit = (submission) => async dispatch => {
    const id = submission.id
    const data = await fetch(`/api/scotch/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(submission),
    });
    
    dispatch(editScotch(data))

}

export const createSpirit = (submission) => async dispatch => {
    const data = await fetch('/api/scotch', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(submission)
    });
    const scotch = await data;
    dispatch(addScotch(scotch));
    return scotch
}

const initialState = {
    currentScotch: []
}

const scotchReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SCOTCH: {
            if(!state[action.currentScotch.id]){
                const newState = {
                    ...state,
                    [action.scotch.id]:action.currentScotch
                }
                const scotchList = newState.currentScotch.map(id =>newState[id])
                scotchList.push(action.currentScotch)
                return scotchList
            }
            return {
                ...state,
                [action.currentScotch.id]: {
                    ...state[action.currentScotch.id],
                    ...action.currentScotch
                }
            }
        }
        default: return state
    }
} 



