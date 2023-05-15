import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from './store';
import { MAX_COUNTDOWN_TIMER } from '@/constants';
import { DraftStatus } from '@/types/DraftStatus';

type CountdownState = {
  draftCountdown: {
    draftStatus: DraftStatus,
    countdown: number
  }
}

const initialState: CountdownState = {
  draftCountdown: {
    draftStatus: DraftStatus.NotStarted,
    countdown: MAX_COUNTDOWN_TIMER
  }
};

export const countdownSlice = createSlice({
  name: "countdown",
  initialState,
  reducers: {
    setCountdownState(state, action) {
      state.draftCountdown = {
        ...state.draftCountdown,
        ...action.payload,
      };
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },
  },
});

export const { setCountdownState } = countdownSlice.actions;

export const selectCountdownState = (state: AppState) => state.countdown.draftCountdown;

export default countdownSlice.reducer;