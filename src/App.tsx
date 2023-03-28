import { Routers } from './../Router'
import { DigimonProvider } from './context/DigimonContext'

function App() {


  return (
    <>
        <DigimonProvider>
          <Routers />
        </DigimonProvider>
    </>
  )
}

export default App
