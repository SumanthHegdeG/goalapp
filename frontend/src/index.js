import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap CSS
import './index.css' // Optional: custom global CSS
import App from './App' // Main App component
import reportWebVitals from './reportWebVitals' // Performance monitoring (optional)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Optional: Measure performance
reportWebVitals()
