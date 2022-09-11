import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { store } from "./app/store"
import { Provider } from "react-redux"
import { fetchUsers } from "./features/users/usersSlice"

// load the users in as soon as the app loads
store.dispatch(fetchUsers())

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    // </React.StrictMode>
)
