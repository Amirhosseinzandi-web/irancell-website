import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/style/style.css"
import "../src/style/responsive.css"
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/" ,
        element: <App/>
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);


reportWebVitals();
