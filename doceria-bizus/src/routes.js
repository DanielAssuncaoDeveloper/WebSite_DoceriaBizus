import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/home/index.js'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}