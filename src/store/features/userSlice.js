import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      return [
        ...state,
        ...[
          {
            email_address: action.payload.email_address,
            username: action.payload.username,
            password: action.payload.password,
          },
        ],
      ];
    },
  },
});

export const {addUser} = userSlice.actions;
export default userSlice.reducer;
