import React, { createContext } from 'react'
import useFairbase from '../../hooks/useFirebase';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allContext = useFairbase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
