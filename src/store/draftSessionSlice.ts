import DraftSession from '@/types/DraftSession';
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from './store';

type DraftSessionState = {
  draftSession: DraftSession
}

const initialDraftSessionState: DraftSessionState = {
  draftSession: {
    lobbyId: "",
    team1: {
      name: "Team 1",
      ban1: {},
      pick1: {},
      pick2: {},
      pick3: {},
      pick4: {},
      pick5: {},
    },
    team2: {
      name: "Team 2",
      ban1: {},
      pick1: {},
      pick2: {},
      pick3: {},
      pick4: {},
      pick5: {},
    },
    spectator: {
      active: false
    },
    pickTurn: 0
  } as DraftSession
};

export const draftSessionSlice = createSlice({
  name: "draftSession",
  initialState: initialDraftSessionState,
  reducers: {
    setDraftSessionState(state, action: {type: string, payload: DraftSession}) {
      state.draftSession = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setDraftSessionState } = draftSessionSlice.actions;

export const selectDraftSessionState = (state: AppState) => state.draftSession.draftSession;

export default draftSessionSlice.reducer;