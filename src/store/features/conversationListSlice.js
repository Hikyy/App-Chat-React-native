import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  conversations: [],
};

export const conversationListSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {
    addConversation: (state, action) => {
      console.log('action.paylooad', action.payload);
      state.conversations = state.conversations.concat(action.payload);
    },
  },
});

export const {addConversation} = conversationListSlice.actions;
export default conversationListSlice.reducer;
