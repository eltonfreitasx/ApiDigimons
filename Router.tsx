import { Home } from './src/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Pagination } from './src/pages/pagination'

export function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pagination" element={<Pagination />} />
            </Routes>
        </Router>
    )
}