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
    <div className="w-[10%] p-2 bg-gray-800 text-white flex-shrink-0">
          <Avatar />
          <Avatar />
          <Avatar/>
    </div>
  );
}
