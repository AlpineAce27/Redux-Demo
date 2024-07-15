import { configureStore } from "@reduxjs/toolkit"

//create inital values for store
let initialState= {
    favColor: ''
}

//create reducer function
const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_COLOR':
            console.log("Set color hit")
            const newState = {
                favColor: action.payload
            }
            return newState
        case 'CLEAR_COLOR':
            console.log("Clear color hit")
            const clearState = {
                favColor: ""
            }
            return clearState
        default: return console.log("hit default")
    }
}

//Combine the staet and store wit a configureStore function
const store = configureStore({
    reducer: reducer
})


//export for main.js (index.js in this case)
export default store