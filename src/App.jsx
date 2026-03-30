import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Stats from './Components/Stats/Stats'

function App() {

  return (
    <>

      <header>
        <Navbar />
      </header>

      <main>
        <Banner />
        <Stats />
      </main>
    </>
  )
}

export default App
