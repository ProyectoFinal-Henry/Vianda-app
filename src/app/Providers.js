"use client"

import { AuthContextProvider } from '../context/AuthContext'

const Providers = ({children}) => {
    return (
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    )
}

export default Providers