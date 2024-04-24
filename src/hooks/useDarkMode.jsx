import { useState, useEffect } from 'react'

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true')
    
    useEffect(() => {
        localStorage.setItem('darkMode', darkMode)
    }, [darkMode])

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode
        setDarkMode(newDarkMode)

        if (newDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    return [darkMode, toggleDarkMode]
}

export default useDarkMode