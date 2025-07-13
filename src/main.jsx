import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WeekView from './WeekView.jsx'
import ExpensesView from './ExpensesView.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ExpensesView /> */}
    <WeekView />
  </StrictMode>,
)
