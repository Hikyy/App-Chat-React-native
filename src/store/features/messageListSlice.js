import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  messages: [],
};

export const messageListSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    },
  },
});

export const {addMessage} = messageListSlice.actions;
export default messageListSlice.reducer;
