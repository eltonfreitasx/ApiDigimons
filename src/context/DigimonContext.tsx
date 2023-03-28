import { createContext, ReactNode, useEffect, useState } from "react";

interface DigimonProps {
    name: string
    img: string
    level: string
}

interface DigimonContextType {
    digimons: DigimonProps[]
}

interface DigimonProviderProps {
    children: ReactNode
}

export const DigimonContext = createContext({} as DigimonContextType)



export function DigimonProvider({ children }: DigimonProviderProps) {
    const [digimons, setDigimons] = useState<DigimonProps[]>([])

    useEffect(() => {
        const fetchApi = async () => {
            const url = 'https://digimon-api.vercel.app/api/digimon'
            const response = await fetch(url)
            const objJson = await response.json()
            console.log(objJson)
            setDigimons(objJson)
        }
        fetchApi()
    }, [])


    return (
        <DigimonContext.Provider value={{ digimons }}>
            {children}
        </DigimonContext.Provider>
    )
}