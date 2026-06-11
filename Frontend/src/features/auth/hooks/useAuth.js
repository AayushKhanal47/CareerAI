import { useContext , useEffect} from "react";
import { AuthContext } from "../auth.context";
import { Login, Logout, Register, GetMe } from "../services/auth.api";

export const useAuth = ()=>{
    const context = useContext(AuthContext)
    const {user, setUser, loading, setLoading } = context

    const handleLogin = async function ({email,password}){
        setLoading(true)
        const data = await Login({email,password})
        setUser(data.user)
        setLoading(false)
    }
    const handleRegister = async function ({username,email,password,}){
        setLoading(true)
        const data = await Register({username,email,password})
        setUser(data.user)
        setLoading(false)
    }
    const handleLogout = async function (){
        setLoading(true)
        const data = await Logout()
        setUser(null)
        setLoading(false)
    }
     useEffect(() => {
            const fetchUser = async () => {
                const data = await GetMe()
                setUser(data?.user || null)
                setLoading(false)
            }
            fetchUser()
        }, [])
    return {user, loading, handleLogin, handleLogout, handleRegister}
}

