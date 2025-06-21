import { X } from 'lucide-react'
import { Circle } from 'lucide-react'

export default function TicTacToe () {
  const cells = Array(9).fill(null)

  let player1: string = 'X'
  let player2: string = 'O'
  let totalTurns: number = 9
  let firstTurn: string = player1
  let turn: number = 1

  function handleOnPlayerClick () {
    let turnPlayer: string
    for (turn; turn <= totalTurns; turn++) {
      if (turn % 2 == 0) {
        turnPlayer = player1
        alert('Turn of Player 1')
      } else {
        turnPlayer = player2
        alert('Turn of Player 2')
      }
    }
  }
  return (
    <div className='w-[70%] h-[80%]  p-3 flex items-center justify-between rounded-md shadow-md m-[10px]'>
      <div className='grid grid-cols-3 grid-rows-3 gap-2 w-full h-full bg-gray-700 p-2 rounded-lg'>
        {cells.map((_, index) => (
          <div
            key={index}
            className='flex items-center justify-center bg-gray-900 text-white text-5xl font-bold cursor-pointer border border-gray-600 rounded-md'
            onClick={handleOnPlayerClick}
          >
            &nbsp;{' '}
          </div>
        ))}
      </div>
    </div>
  )
}
