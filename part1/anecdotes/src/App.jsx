import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [voto,setVoto] = useState(new Array(anecdotes.length).fill(0))
  const votar = () =>{
    const votosTotales = [...voto]
    votosTotales[selected] +=1;
    setVoto(votosTotales)
  }
  const aleatoreNumber = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length)))
    console.log(selected)
  }
  return (
    <>
      <div>
        {anecdotes[selected]} <b>{voto[selected]} votar</b>
      </div>
      <button onClick={votar}>  votar  </button>
      <button onClick={aleatoreNumber}>  next  </button>
      <h2>la anecdotas con mayor cantidad de votos</h2>
      <div>{anecdotes[voto.indexOf(Math.max(...voto))]}</div>
      
    </>    
  )
}
