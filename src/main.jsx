import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WeekView from './WeekView.jsx'
import ExpensesView from './ExpensesView.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/week", element: <WeekView />},
  {path: "/week/:categoryName", element: <ExpensesView />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
