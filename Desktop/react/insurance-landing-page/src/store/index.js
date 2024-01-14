import { configureStore } from "@reduxjs/toolkit";
// import { userSlice, action as userActions } from "../features/user";
import {
  reducer as offerReducer,
  actions as offersActions,
} from "../features/offer";
import {
  reducer as contactReducer,
  actions as contactActions,
} from "../features/contact";

const store = configureStore({
  reducer: {
    offers: offerReducer,
    contact: contactReducer,
  },
});

export { offersActions, contactActions };
export default store;
