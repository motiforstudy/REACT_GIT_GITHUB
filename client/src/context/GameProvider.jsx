import { createContext, useState } from "react"

export const AppContext = createContext()

export function Provider({ children }) {
    const boardSize = 79
    const [bombLeft, setBombLeft] = useState(5)
    return (
        <AppContext value={{ boardSize, bombLeft, setBombLeft }}>{children}</AppContext>
    )
}