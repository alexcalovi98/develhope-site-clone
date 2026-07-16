import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { areaState } from "./area.state";
import { useSelector, type TypedUseSelectorHook } from "react-redux";

const rootReducer = combineReducers({
    area: areaState.reducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer
})

export const useAppSelector = useSelector as TypedUseSelectorHook<RootState>