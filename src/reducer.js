import { StateContext } from "./StateProvider"

export const initialState = {
    // We'll start with a user not logged in
    user: null,
}

// This is where we can push information into the data layer
export const actiontypes = {
    SET_USER: "SET_USER",
}

const reducer = (state, action) => {
    console.log(action)

    // We keep track of the action that dispatched.
    switch (action.type) {
        case actiontypes.SET_USER:  // Here, the action is SET_USER action
        return { 
            ...state,
            user: action.user
        }

        default:
            return state
    }
}

export default reducer