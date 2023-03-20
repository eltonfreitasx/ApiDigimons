import { useState, useEffect } from 'react';
import { Buttons, Div, Header, Main } from '../styles/styles';

interface DigimonProps {
    name: string
    img?: string
    level?: string
    index?: number
    item?: string

}

export function Pagination() {
    const [item, setItem] = useState([])
    const [itensPerPage, setItensPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(0)


    useEffect(() => {
        const fetchApi = async () => {
            const url = 'https://digimon-api.vercel.app/api/digimon'
            const response = await fetch(url)
            const objJson = await response.json()
            console.log(objJson)
            setItem(objJson)
        }
        fetchApi()
    }, [])



    const firstItemIndex = currentPage * itensPerPage
    const lastItemIndex = firstItemIndex + itensPerPage
    const currentItems = item?.slice(firstItemIndex, lastItemIndex)


    const goToNextPage = () => {
        if (currentPage < item.length / itensPerPage - 1) {
            setCurrentPage(currentPage + 1);

        }
    }

    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <Main>
            <Header>
                <h1>Paginação de Digimons</h1>
            </Header>
            <Div>
                {currentItems.map((digimon: DigimonProps) => (
                    <div key={digimon.name}>
                        <h1>{digimon.name}</h1>
                        <img src={digimon.img} alt={digimon.name} />
                        <strong>{digimon.level}</strong>
                    </div>
                ))}
            </Div>
            <Buttons>
                <button onClick={() => goToPreviousPage()} disabled={currentPage === 0}>Previous</button>
                <button onClick={() => goToNextPage()} disabled={currentPage >= item.length / itensPerPage - 1}>Next</button>
            </Buttons>
        </Main>
    )
}