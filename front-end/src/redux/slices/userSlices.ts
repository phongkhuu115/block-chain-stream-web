import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    user_id: '',
    user_email: '',
    user_fullname: '',
    user_role: '',
    user_stream_key: '',
    username: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    storeUserData: (state, action) => {
      state.user = {...action.payload};
    },
  },
});

export const { storeUserData } = userSlice.actions;

export default userSlice.reducer;
