import { createSlice } from "@reduxjs/toolkit";

const quotesState = {
  quotes: [
    { id: 1, author: 'Master Yoda', text: 'Fear to the dark side, you must not have' },
    { id: 2, author: 'Darth Vader', text: 'I am your father' },
    { id: 3, author: 'Grievous', text: 'General Kenobi!' },
    { id: 4, author: 'Obi-wan Kenobi', text: 'Hello there' }
  ]
};

const quotesSlice = createSlice({
  name: 'quotes',
  initialState: quotesState,
  reducers: {
    addQuote(state, action) {
      state.quotes.push({
        id: state.quotes[state.quotes.length - 1].id + 1,
        author: action.payload.author,
        text: action.payload.text
      });
    },
    deleteQuote(state, action) {

    }
  }
});

export const quotesActions = quotesSlice.actions;
export default quotesSlice.reducer;
