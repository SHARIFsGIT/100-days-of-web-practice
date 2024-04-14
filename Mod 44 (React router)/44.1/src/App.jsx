import './App.css'
import Chart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
    <NavBar></NavBar>
    <PriceOptions></PriceOptions>
    <Chart></Chart>
    </>
  )
}

export default App
