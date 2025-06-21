import PLayerGameBanner from './PLayerGameBanner'
import TicTacToe from '../Games/ticTacToe/TicTacToe'

export default function CenterColumn () {
  return (
    <div className='w-[70%] h-full bg-gray-800 flex justify-center items-center px-4 py-2 flex-col '>
          <PLayerGameBanner />
          <TicTacToe />
          <PLayerGameBanner />
    </div>
  )
}
