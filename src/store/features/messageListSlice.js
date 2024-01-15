import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  messages: [],
};

export const messageListSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length > 0) {
        for (const message of state.messages) {
          if (message.id === action.payload.id) {
            return;
          }
        }
      }

      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    },
  },
});

export const {addMessage} = messageListSlice.actions;
export default messageListSlice.reducer;
