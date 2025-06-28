import { createSlice } from '@reduxjs/toolkit'

const initialState={
    filters:{
        name:""
    }
}

export const filtersSlice=createSlice({
    initialState,
    name:"filter",
    reducers:{
        filterContact:(state,actions)=>{
            state.filters.name=actions.payload;
        }
        

    }
})

export const { filterContact}=filtersSlice.actions
export default filtersSlice.reducer