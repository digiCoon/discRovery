import { Outlet } from 'react-router'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ScrollManager from './ScrollManager.jsx'

export default function Layout() {
    return (
        <>
            <ScrollManager />
            <Header />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}