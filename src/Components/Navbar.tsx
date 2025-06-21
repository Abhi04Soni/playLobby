export default function Navbar () {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-black text-white z-50 shadow-md">
      <ul className="flex flex-row items-center list-none justify-between px-6 py-3 mx-auto">
        <li className="text-xl font-bold tracking-wide">PlayLobby</li>
        <div className="flex gap-10">
          <li className="cursor-pointer m-[6px]">Profiles</li>
          <li className="cursor-pointer m-[6px]">Games</li>
          <li className="cursor-pointer m-[6px]">Notifications</li>
        </div>
      </ul>
    </nav>
  );
}
