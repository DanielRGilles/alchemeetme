import { useContext, createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState([])

    return <UserContext.Provider value={{ user, setUser }}> { children } </UserContext.Provider>
}

const useProfile = () => {
    const context = useContext(UserContext)

    if ( context === undefined ) {
        throw new Error('useUser must be defined within a UserContext Provider')
    }
    return context
}

export { UserProvider, useProfile }