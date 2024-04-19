import './App.css'
import Chart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
    <NavBar></NavBar>
    <PriceOptions></PriceOptions>
    <Chart></Chart>
    <Phones></Phones>
    </>
  )
}

export default App
