import { createContext, useState, useEffect } from "react";
import { GetMe } from "./services/auth.api";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true) 
    useEffect(() => {
        const fetchUser = async () => {
            const data = await GetMe()
            setUser(data?.user || null)
            setLoading(false)
        }
        fetchUser()
    }, [])

    return(
        <AuthContext.Provider value={{user, setUser, loading, setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}