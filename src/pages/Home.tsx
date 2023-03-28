import { useContext } from 'react';
import { Div, Imagem } from '../styles/styles';
import { DigimonContext } from '../context/DigimonContext';

export function Home() {
    const { digimons } = useContext(DigimonContext)

    return (
        <Div>
            {
                digimons.map(digimon => {
                    return (
                        <div key={digimon.name}>
                            <h1>{digimon.name}</h1>
                            <Imagem src={digimon.img} />
                            <strong>{digimon.level}</strong>
                        </div>
                    )
                })
            }
        </Div>
    )
}