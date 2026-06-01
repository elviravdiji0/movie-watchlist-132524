import { createContext, useState } from "react";
import { movies as MOVIES } from "../utils/movies";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [movies, setMovies] = useState(MOVIES);

    const login = () => setUser(user => user ? user : { username: "movie-enthusiast" });
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, movies, setMovies, setUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}