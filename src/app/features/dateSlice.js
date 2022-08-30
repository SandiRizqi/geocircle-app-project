import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  startdate: null,
  enddate:null
}

export const dateSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setStartDate: (state, action) => {
      state.startdate = action.payload
    },
    setEndDate: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setStartDate, setEndDate} = dateSlice.actions

export default dateSlice.reducer