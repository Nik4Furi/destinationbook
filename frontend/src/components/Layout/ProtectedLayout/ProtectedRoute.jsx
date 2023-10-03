import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import {Token} from '../../../GloballyFunctions'

const ProtectedRoute = ({ children }) => {

    const navigate = useNavigate();
    
    useEffect(() => {        
        if (Token === null)
            navigate(-1);
    });

    return (
        <>
            {children}
        </>
    )
}

export default ProtectedRoute;