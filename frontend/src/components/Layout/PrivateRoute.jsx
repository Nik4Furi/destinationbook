import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const PrivateRoute = ({ children }) => {
    return (
        <>
            this is private route

            {/* Navbar Component  */}
            <Navbar />

            {children}

            {/* Footer Component  */}
            <Footer />
        </>
    )
}

export default PrivateRoute
