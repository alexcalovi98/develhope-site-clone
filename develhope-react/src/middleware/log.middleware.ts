import type { Middleware, PayloadAction } from "@reduxjs/toolkit";

export const logMiddleware: Middleware = (store) => (next) => (action) => {
    console.log("Action", (action as PayloadAction).type)
    next(action)
}