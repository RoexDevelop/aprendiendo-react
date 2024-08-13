import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'o'
}



const Square = ({children, isSelected, updateBoard, index}) => {
  
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className = {className} onClick={handleClick}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  
  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = (index) => {
    // No actualizamos esta posicion si ya tenemos algo
    if (board[index]) return
    // Actualizar el tablero
    const newBoard = [ ... board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Cambiar de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected = {turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected = {turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App
