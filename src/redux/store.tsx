import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { fetchFieldReducer } from './reducers/fetchFieldReducer';
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => 
  configureStore ({
    reducer: {
      fields: fetchFieldReducer
    }
})

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
