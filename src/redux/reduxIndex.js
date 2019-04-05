import React from 'react';
import { Provider } from "react-redux";
import { store } from "./store";
import App from "../App";

const ReduxIndex = () => {
    return (
        <Provider store={store}>
            {/* react App component is wrap in Provider to establish
             communication between React Component and redux Store */}
            <App />
        </Provider>
    )
}

export default ReduxIndex;