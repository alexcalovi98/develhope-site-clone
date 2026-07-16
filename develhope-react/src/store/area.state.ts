import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserStats } from "../types/user-stats";
import type { Course } from "../types/course";

export type AreaState = {
    fullname: string,
    stats: UserStats[],
    courses: Course[],
    isChatbotOpen: boolean
}

const initialState: AreaState = {
    fullname: "Alex Calovi",
    stats: [
        { label: "Test", value: 10, maxValue: 23 }
    ],
    courses: [],
    isChatbotOpen: false
}

export const areaState = createSlice({
    name: "area",
    initialState: initialState,
    reducers: {
        toggleChatbot: (state) => {
            state.isChatbotOpen = !state.isChatbotOpen
        }
    }
})