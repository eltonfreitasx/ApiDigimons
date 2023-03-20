import { useState, useEffect } from 'react';
import { Div, Imagem } from '../styles/styles';

interface DigimonProps {
    name: string
    img: string
    level: string
}

export function Home() {
    const [first, setFirst] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const url = 'https://digimon-api.vercel.app/api/digimon'
            const response = await fetch(url)
            const objJson = await response.json()
            console.log(objJson)
            setFirst(objJson)
        }
        fetchApi()
    }, [])

    return (
        <Div>
            {
                first.map((digimon: DigimonProps) => (
                    <div key={digimon.name}>
                        <h1>{digimon.name}</h1>
                        <Imagem src={digimon.img} />
                        <strong>{digimon.level}</strong>
                    </div>
                ))
            }
        </Div>
    )
}