import { createContext, useState, useContext } from "react"
const Contextprovidr = createContext()

export function Themeprovider({ children }) {
    const [Theme, setTheme] = useState("light")
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
    }
    const value = {
        Theme,
        toggleTheme,
        isDark: Theme === "dark"
    }
    return (
        <Contextprovidr.Provider value={value}>{children}</Contextprovidr.Provider>
    )
}

export function useTheme() {
    const context = useContext(Contextprovidr)
    return context
}

function ToggleButton() {
    const { toggleTheme, isDark } = useTheme()
    return (
        <button
            onClick={toggleTheme}
            className={`
                relative w-16 h-8 rounded-full transition-colors duration-300
                ${isDark ? "bg-blue-600" : "bg-gray-300"}
            `}
        >
            <div
                className={`
          absolute top-1 left-1 w-6 h-6 rounded-full bg-white
          transition-transform duration-300 flex items-center justify-center
          ${isDark ? "transform translate-x-8" : ""}
        `}
            >
                {isDark ? "🌙" : "☀️"}
            </div>
        </button>
    );
}

function Card({ title, children }) {
    const { isDark } = useTheme()
    return (
        <div
            className={`
        p-6 rounded-lg shadow-lg transition-colors duration-300
        ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"}
      `}
        >
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <div>{children}</div>
        </div>
    )
}

export default function ThemeToggler() {
    return (
        <div className="mt-8 p-4 border border-white/20 rounded-xl">
            <h1 className="text-white text-2xl font-bold mb-4">Theme Switcher</h1>
            <div className="flex flex-col items-center gap-6">
                <ToggleButton />
                <Card title="Theme Sensitive Card">
                    <p>This card changes its appearance based on the theme context!</p>
                </Card>
            </div>
        </div>
    )
}