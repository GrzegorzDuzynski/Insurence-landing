import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contact: [
    {
      telephon: "",
      email: "",
      message: "",
      consents: false,
    },
  ],
};

const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {
    addInfo: (state, action) => {
      state.contact = action.payload;
    },
    clearInfo: (state) => {
      state.contact = [
        {
          telephon: "",
          email: "",
          message: "",
          consents: false,
        },
      ];
    },
  },
});
export const { actions, reducer } = contactSlice;
