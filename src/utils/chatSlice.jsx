import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constant";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        message: []
    },
    reducers: {
        addMessage: (state, action) => {
          if (!state.messages) {
            state.messages = []; // ✅ Fallback in case state is undefined
          }
        // app won't crash due to lot of chat store-> chat slice
           state.messages.splice(LIVE_CHAT_COUNT,1);
          state.messages.push(action.payload);
            //   push on first
            // state.messages.unshift(action.payload);
        }
      }
    });


export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;

