"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const LoginContext = createContext();

export const useLogin = () => {
    return useContext(LoginContext);
};

export const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [accessToken, setAccessToken] = useState(null);

    // Check for token on initial load
    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            setIsLoggedIn(true);
            setAccessToken(token);
        }
    }, []);

    const login = (token) => {
        setIsLoggedIn(true);
        setAccessToken(token);
        localStorage.setItem('access_token', token); 
    };

    const logout = () => {
        setIsLoggedIn(false);
        setAccessToken(null);
        localStorage.removeItem('access_token'); 
        localStorage.removeItem('ally-supports-cache');
    };

    return (
        <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </LoginContext.Provider>
    );
};
