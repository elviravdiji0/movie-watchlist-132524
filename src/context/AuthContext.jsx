import { createContext, useState, useContext } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = () => setUser(user => user ? user : { username: "movie-enthusiast" });
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}