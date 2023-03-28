import { useState, useEffect, useContext } from 'react';
import { Buttons, Div, Header, Main } from '../styles/styles';
import { DigimonContext } from '../context/DigimonContext';

//Para nao usar o context defina as tipagem da api externa q irá
//utilizar, faça a requisição e use a variavel comentada 

export function Pagination() {
    const { digimons } = useContext(DigimonContext)
    //const [digimon, setDigimon] = useState([])
    const [itensPerPage, setItensPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(0)

    const firstItemIndex = currentPage * itensPerPage
    const lastItemIndex = firstItemIndex + itensPerPage
    const currentItems = digimons?.slice(firstItemIndex, lastItemIndex)


    const goToNextPage = () => {
        if (currentPage < digimons.length / itensPerPage - 1) {
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
                {currentItems.map((digimon) => (
                    <div key={digimon.name}>
                        <h1>{digimon.name}</h1>
                        <img src={digimon.img} alt={digimon.name} />
                        <strong>{digimon.level}</strong>
                    </div>
                ))}
            </Div>
            <Buttons>
                <button onClick={() => goToPreviousPage()} disabled={currentPage === 0}>Previous</button>
                <button onClick={() => goToNextPage()} disabled={currentPage >= digimons.length / itensPerPage - 1}>Next</button>
            </Buttons>
        </Main>
    )
}