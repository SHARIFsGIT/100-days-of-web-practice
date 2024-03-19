import './App.css';

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Device name='laptop' price='55'></Device>
      <Device name='mobile'></Device>
      <Device name='watch' price='95K'></Device>
      <Person></Person>
      <Student grade='7' score='99'></Student>
      <Student grade={12} score={85}></Student>
      <Student></Student>
      <Developer></Developer>
      <Researcher></Researcher>
    </>
  )
}

function Person(){
  const age = 25;
  const money = 55;
  const person = {name: 'John', age: age, money: money}
  return <h3>I am a {person.name} with age {age + money}</h3>
}

// const {grade, score} = {grade: '7', score: '99'}
function Student({grade = 1, score = 0}){
  return (
  <div className='student'>
    <h3>This is a student</h3>
    <p>Grade: {grade}</p>
    <p>Score: {score}</p>
  </div>
  )
}

function Developer(){
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid pink',
    borderRadius: '20px'
  }
  return(
    <div style={developerStyle}>
      <h5>Developer function</h5>
      <p>Coding</p>
    </div>
  )
}

function Researcher(){
  return(
    <div style={
      {
      margin: '20px',
      padding: '20px',
      border: '2px solid orange',
      borderRadius: '10px'
    }
    }>
      <h5>Researcher function</h5>
      <p>Research</p>
    </div>
  )
}

function Device(props){
  return <h2>This device: {props.name} and Price: {props.price}</h2>
}

export default App
