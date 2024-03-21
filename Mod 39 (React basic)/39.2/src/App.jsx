import './App.css';
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './User';

function App() {
  function handleClick(){
    alert('Clicked');
  }

const handleClick2 = () => {
  alert('Button2 clicked');
}

const addToFive = (num) => {
  alert(num + 5)
}

  return (
    <>
      <h1>Core concept 2</h1>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=>{alert('Button3 clicked')}}>Click 3</button>
      <button onClick={()=>addToFive(3)}>Click4</button>
    </>
  )
}

export default App
