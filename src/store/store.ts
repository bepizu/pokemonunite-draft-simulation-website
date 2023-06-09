import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { draftSessionSlice } from "./draftSessionSlice";
import { countdownSlice } from './countdownSlice';
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [draftSessionSlice.name]: draftSessionSlice.reducer,
      [countdownSlice.name]: countdownSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);