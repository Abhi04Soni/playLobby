import avatarImage from '../assets/60111.jpg'
export default function PLayerGameBanner() {
  return (
    <div className='w-[60%] bg-white p-3 flex items-center justify-between rounded-md shadow-md m-[10px]' style={{ minHeight: '80px' }}>
      <div className='flex items-center'>
        <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
          <img src={avatarImage} className='w-full h-full object-cover border rounded-full' />
        </div>
        <div className='ml-3 font-bold text-black'>Ajay</div>
      </div>
      <div className='font-bold bg-white text-black px-3 py-1 rounded-2xl border'>
        Your Turn
      </div>
    </div>
  );
}

