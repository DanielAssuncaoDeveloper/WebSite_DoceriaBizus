import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/home/index.js'
import TestComponents from './pages/tests/index.js'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/teste' element={<TestComponents/>} />
            </Routes>
        </BrowserRouter>
    )
}