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

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],  // Verticales
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],  // Horizontales
  [2, 5, 8],

  [0, 4, 8],  ///Diagonales
  [2, 4, 6]
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null) // Null, no hay ganador. False hay un empate
  const checkWinner = (boardToCheck) => {
    // Revisar todas las convinaciones ganadoras, si X u O ha ganado
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
      
    }
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    // No actualizamos esta posicion si ya tenemos algo
    if (board[index] || winner) return
    // Actualizar el tablero
    const newBoard = [ ... board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Cambiar de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // Revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      //alert(`El ganador es ${newWinner}`)
      setWinner(newWinner)
    } // Check if game is over 
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
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

      <section>
        {
          winner != null && (
            <section className='winner'>
              <div className='text'>
                <h2>
                  {
                    winner == false ? 'Empate' : 'Ganó:'
                  }
                </h2>
                <header className='win'>
                  {winner && <Square>{winner}</Square>} 
                </header>

                <footer>
                  <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
              </div>
            </section>
          )
        }
      </section>
    </main>
  )
}

export default App
