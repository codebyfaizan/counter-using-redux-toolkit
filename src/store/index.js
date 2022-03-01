import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; //the property payload is fixed and can't be changed
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
    reducer: counterSlice.reducer
})

export const counterActions = counterSlice.actions; //createSlice automatically creates unique action identifiers for different reducer methods also known as action creators.
export default store;
