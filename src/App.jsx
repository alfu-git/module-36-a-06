import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Stats from './Components/Stats/Stats'
import ToolsContainer from './Components/ToolsContainer/ToolsContainer'

const getToolsData = async () => {
  const fetchToolsData = await fetch("../public/toolsData.json");
  return fetchToolsData.json();
}

function App() {
  const toolsDataPromise = getToolsData();

  return (
    <>

      <header>
        <Navbar />
      </header>

      <main>
        <Banner />
        <Stats />
        
        <Suspense
          fallback={(
            <div className='mt-20 mb-10 flex justify-center'>
              <span className="loading loading-spinner text-primary"></span>
            </div>
          )}
        >
          <ToolsContainer toolsDataPromise={toolsDataPromise} />
        </Suspense>
      </main>
    </>
  )
}

export default App
