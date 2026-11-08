import { configureStore } from "@reduxjs/toolkit";
import translate from "./translate";

const store = configureStore({
  reducer: {
    translate
  }
});

export default store;