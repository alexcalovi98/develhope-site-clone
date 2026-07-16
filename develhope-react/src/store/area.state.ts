import { createAsyncThunk, createSlice, type Dispatch, type PayloadAction } from "@reduxjs/toolkit";
import type { UserStats } from "../types/user-stats";
import type { Course } from "../types/course";
import { getUser } from "../services/user_service";
import { getStats } from "../services/stats_service";
import { getCourse } from "../services/courses_service";
import type { User } from "../types/user";
import type { AppDispatch } from "./store";

export type AreaState = {
    fullname: string,
    stats: UserStats[],
    courses: Course[],
    isChatbotOpen: boolean
}

const initialState: AreaState = {
    fullname: "",
    stats: [],
    courses: [],
    isChatbotOpen: false
}

export const areaState = createSlice({
    name: "area",
    initialState: initialState,
    reducers: {
        init: (_, action: PayloadAction<AreaState>) => action.payload,
        toggleChatbot: (state) => {
            state.isChatbotOpen = !state.isChatbotOpen
        }
    }
})

export function fetchArea() {
    return function (dispatch: AppDispatch) {
        Promise.all([getUser(), getStats(), getCourse()]).then((values) => {
            const user = values[0] as User;
            const stats = values[1] as UserStats[];
            const courses = values[2] as Course[];

            const state: AreaState = {
                fullname: user.name + " " + user.surname,
                stats: stats,
                courses: courses,
                isChatbotOpen: false
            }

            dispatch(areaState.actions.init(state))
        });
    }
}