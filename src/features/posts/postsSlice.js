import { createSlice } from "@reduxjs/toolkit";

// Sample Data
const initialState = [
    {id:'1', title:'First Post!', content:'Hello'},
    {id:'2', title:'Second Post', content:'More text'}
]

// Create Slicer
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    // Although it looks like we are mutating state Headers, the internal Immer library makes updates for us. 
    // It only appears this way because of the library
    reducers:{
        postAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const { postAdded } = postsSlice.actions
export default postsSlice.reducer