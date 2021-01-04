import {fetch} from "./csrf"
const ADD_NEW = 'userReview/ADD_NEW'

const newReview = userReviews => ({
    type: ADD_NEW,
    userReviews
})

export const createReview = (submission) => async dispatch => {

    const data = await fetch('/api/speakeasy', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(submission),
    });
    const review = await data;
    dispatch(newReview(review));
    return review
}

export const deleteReview = (submission) => async dispatch => {
    const id = submission.id
    const data = await fetch(`/api/speakeasy/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deleted = await data
    return deleted
}


const initialState = {
    userReviews: [],
}

const reviewReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_NEW: {
            if(!state[action.userReviews.id]){
                const newState = {
                    ...state,
                    [action.reviews.id]: action.userReviews
                }
                const reviewsList = newState.reviews.map(id => newState[id]);
                reviewsList.push(action.userReviews);
                return reviewsList
            }
            return {
                ...state,
                [action.userReviews.id]: {
                    ...state[action.userReviews.id],
                    ...action.userReviews
                }
            }
        }
        default:
            return state
    }
}

export default reviewReducer