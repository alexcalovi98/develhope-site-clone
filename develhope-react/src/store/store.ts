import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { areaState } from "./area.state";
import { useSelector, type TypedUseSelectorHook } from "react-redux";
import { logMiddleware } from "../middleware/log.middleware";

const rootReducer = combineReducers({
    area: areaState.reducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logMiddleware)
})

export const useAppSelector = useSelector as TypedUseSelectorHook<RootState>

export type AppDispatch = typeof store.dispatch