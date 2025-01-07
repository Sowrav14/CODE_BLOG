import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface BodyState{
    id : number;
	type : 'text' | 'image' | 'code';
	content : string;
};


const initialState: BodyState[] = []

export const bodySlice = createSlice({
  name: 'Body Contents',
  initialState,
  reducers: {
		addContent : (state, action : PayloadAction<BodyState>) => {
			state.push(action.payload);
		},
        updateContent : (state, action : PayloadAction<BodyState>) => {
            state[action.payload.id] = action.payload;
        }
  },
})

// Action creators are generated for each case reducer function
export const { addContent, updateContent} = bodySlice.actions
export default bodySlice.reducer