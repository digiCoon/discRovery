import { Routes, Route } from 'react-router'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Logbook from './pages/Logbook.jsx'
import Legal from './pages/Legal.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="logbuch" element={<Logbook />} />
                <Route path="impressum" element={<Legal />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}