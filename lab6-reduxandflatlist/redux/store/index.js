import rootReducers from "../reducers/index"
import {configureStore} from "@reduxjs/toolkit"

export default configureStore({reducer: rootReducers})