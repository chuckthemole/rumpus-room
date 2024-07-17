import * as React from "react";
import * as ReactDOM from "react-dom/client";

import App from './app';

// hook it to html page, index.html
ReactDOM.createRoot(document.getElementById('root')).render(
    // TODO: StrictMode should be removed in production
    <React.StrictMode>
        <App />
    </React.StrictMode>
);