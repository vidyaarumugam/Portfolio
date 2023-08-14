import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const getTheme = () => {

    const mode = localStorage.getItem("mode")
    if (!mode) {
        localStorage.setItem("mode", "dark")
        return "dark";
    }
    else {
        return mode;
    }
}

const ThemeProvider = ({ children }) => {

    const [mode, setMode] = useState(getTheme);

    const toggleHandler = () => {
        if (mode === "dark")
            setMode("light")
        else
            setMode("dark")
    }

    useEffect(() => {
        const refreshTheme = () => {
            localStorage.setItem("mode", mode)
        }

        refreshTheme();

    }, [mode])

    return (
        <ThemeContext.Provider
            value={{ mode, setMode, toggleHandler }}
        >{children}

        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider };