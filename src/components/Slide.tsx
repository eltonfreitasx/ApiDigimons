
import { DivSlide } from '../styles/stylesSlide';
import Risos from './../assets/risos.gif'
import Cute from './../assets/cute.gif'
import Nervoso from './../assets/nervoso.gif'

const dataEmojis = [
    {
        id: 1,
        title: 'risos',
        SrcImagem: Risos
    },
    {
        id: 2,
        title: 'risos',
        SrcImagem: Cute
    },
    {
        id: 3,
        title: 'risos',
        SrcImagem: Nervoso
    },
]

export function Slide() {

    return (
        <>
            {dataEmojis.map((item) => (
                <DivSlide key={item.id}>
                    <h1>{item.title}</h1>
                    <img src={item.SrcImagem} />
                </DivSlide>
            ))}
        </>
    )
}
