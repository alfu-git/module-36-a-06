import { Suspense, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Stats from './Components/Stats/Stats'
import ToolsContainer from './Components/ToolsContainer/ToolsContainer'
import Steps from './Components/Steps/Steps';
import Pricing from './Components/Pricing/Pricing';
import WorkFlow from './Components/WorkFlow/WorkFlow';
import Footer from './Components/Footer/Footer';

const getToolsData = async () => {
  const fetchToolsData = await fetch("/toolsData.json");
  return fetchToolsData.json();
}

const toolsDataPromise = getToolsData();

function App() {

  const [cartList, setCartList] = useState([]);

  const getClickedTool = (tool) => {
  setCartList([...cartList, tool]);
}

  return (
    <>

      <header className='sticky z-90 top-0 bg-base-100'>
        <Navbar cartList={cartList} />
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
          <ToolsContainer 
            toolsDataPromise={toolsDataPromise}
            getClickedTool={getClickedTool}
            cartList={cartList}
            setCartList={setCartList}
          />
        </Suspense>

        <Steps />
        <Pricing />
        <WorkFlow />
      </main>

      <footer>
        <Footer />
      </footer>

      <ToastContainer
        position='top-right'
        style={{top: '65px'}}
      />
    </>
  )
}

export default App
