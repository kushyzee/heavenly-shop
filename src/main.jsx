import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/layouts/Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} >
          {/* <Route index element={<App />} /> */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
