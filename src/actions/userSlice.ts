import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
  username: string
}

const initialState: UserState = {
  username: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
        state.username = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { setUsername } = userSlice.actions

export default userSlice.reducer