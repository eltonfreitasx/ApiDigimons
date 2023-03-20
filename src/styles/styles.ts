import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

export const Main = styled.main`
    width: 100%;
    height: 90vh;
`

export const Header = styled.header`
    text-align: center;
    h1 {
        font-family: 'Chango', cursive;
        color: green;
    }
`

export const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    div{
        border: 3px solid green;
        border-radius: 8px;
        margin: 1rem;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        flex-direction: column;

        h1 {
            font-family: 'Rubik Iso', cursive;
            color: green;
        }

        strong {
            font-family: 'Chango', cursive;
            color: green;
        }
        
    }

`

export const Buttons = styled.div`
    display: flex;
    justify-content: center;

    button {
        margin-right: 1rem;
        border: 3px solid green;
        border-radius: 8px;
    }
`

//para Home

export const Imagem = styled.img`
    width: 200px;
    height: 200px;
`