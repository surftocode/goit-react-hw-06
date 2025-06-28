import { configureStore } from "@reduxjs/toolkit";
import constactsSlice from "./constactsSlice";
import filtersSlice from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: constactsSlice,
    filter:filtersSlice,
  },
});
