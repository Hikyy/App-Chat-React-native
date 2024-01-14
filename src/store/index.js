import {configureStore} from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import conversationListReducer from './features/conversationListSlice';
import messageListReducer from './features/messageListSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    conversationList: conversationListReducer,
    messageList: messageListReducer,
  },
});

export default store;
