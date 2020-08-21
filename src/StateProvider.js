import React, { createContext, useReducer, useContext } from 'react'

// This is where the data layer actually lives.
export const StateContext = createContext()

// Data layer is the StateProvider, It's a Higher Order Component
export const StateProvider = ({ reducer, initialState, children}) => (

    // This allows us to set up the data layer
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// This helps us to pull information from the data layer
export const useStateValue = () => useContext(StateContext)
