import Navbar from '../Components/Navbar'
import LeftColumn from '../Components/LeftMainScreen'
import RightColumn from '../Components/RighMainScreen'
import CenterColumn from '../Components/MiddleMainScreen'
export default function MainScreen() {
  return (
    <div className='h-screen w-screen overflow-hidden flex flex-col pt-16'>
      <Navbar />
      <div className='flex flex-grow w-full'>
        <LeftColumn />
        <CenterColumn />
        <RightColumn />
      </div>
    </div>
  );
}
