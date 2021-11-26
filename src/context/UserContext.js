import React, {createContext, useState} from 'react'

const UserContext = createContext();

const UserProvider = ( {children}) => {

    const [user,setUser] = useState(null)

    const login = (usuario) => {
        setUser(usuario)
    }

    const logout = () => {
        setUser(null)
    }

    const data = {login, logout, user}
    
    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;
export {UserProvider};
