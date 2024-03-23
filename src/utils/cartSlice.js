import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:'cart',
  initialState:{
    items:[],
  },
  reducers:{
    addItems:(state,action)=>{

      //Vanila(older) Redux => Dont Mutate state, returning was mandatory
      //const newState = [...state]
      //newState.items.push(action.payload);

      //mutating the state here in redux toolkit have to mutate the state
        state.items.push(action.payload);
    },
    removeItem:(state,action)=>{
      state.items.pop();
    },
    clearCart:(state,action)=>{
      // state.items.length = 0; // originalState = []

      return {items:[]}; //this new [] will be replaced inside originalState = {items:[]}
    },
  },
});

export const {addItems,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;