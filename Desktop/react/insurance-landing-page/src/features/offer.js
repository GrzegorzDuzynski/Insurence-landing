import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  offers: [],
};

const offersSlice = createSlice({
  name: "offers",
  initialState: initialState,
  reducers: {
    changeSelection: (state, action) => {
      console.log(action);
      if (action.payload.value === true)
        state.offers.push({
          type: action.payload.type,
          selection: action.payload.selection,
        });
      else {
        const newOffers = state.offers.filter(
          (obj) => action.payload.selection !== obj.selection
        );
        state.offers = newOffers;
      }
    },
    clearOffers: (state) => {
      state.offers = [];
    },
  },
});
export const { actions, reducer } = offersSlice;
