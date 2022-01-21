import { combineReducers, configureStore, ThunkAction, Action  } from "@reduxjs/toolkit";
import toolkit from "./toolkit";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    toolkit: toolkit,
}
)

export const store = configureStore({
    reducer: rootReducer,
})


export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>


