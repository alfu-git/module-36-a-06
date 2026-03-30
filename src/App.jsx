import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Stats from './Components/Stats/Stats'
import ToolsContainer from './Components/ToolsContainer/ToolsContainer'

function App() {

  return (
    <>

      <header>
        <Navbar />
      </header>

      <main>
        <Banner />
        <Stats />
        <ToolsContainer />
      </main>
    </>
  )
}

export default App
