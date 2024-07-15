import * as React from "react";
import * as ReactDOM from "react-dom/client";

import App from './app';

// hook it to html page, index.html
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);