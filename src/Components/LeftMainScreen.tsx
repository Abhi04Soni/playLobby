import Avatar from "./Avatar";

export default function LeftColumn() {

    interface Friend {
        name: string;
        avatar: string;
        status: string;
      }

    let friend: Array<Friend> = [{
         name: "Ajay",
        avatar: "avatar.png",
        status: "online"
    }]
  return (
    <div className="w-[10%] p-2 fixed top-16 left-0  h-[calc(100vh-4rem)] bg-gray-800 text-white z-40">
          <Avatar />
          <Avatar />
          <Avatar/>
    </div>
  );
}
