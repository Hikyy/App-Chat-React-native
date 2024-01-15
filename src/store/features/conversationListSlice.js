import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  conversations: [],
};

export const conversationListSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {
    addConversation: (state, action) => {
      if (state.conversations.length > 0) {
        for (const conversation of state.conversations) {
          if (conversation.id === action.payload.id) {
            return;
          }
        }
      }
      state.conversations = state.conversations.concat(action.payload);
    },
  },
});

export const {addConversation} = conversationListSlice.actions;
export default conversationListSlice.reducer;
