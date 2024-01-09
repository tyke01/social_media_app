import { SidebarFriends, SidebarList } from "../data";
import SidebarFriend from "./SidebarFriend";

const Sidebar = () => {
  return (
    <div className=" sidebar flex-3 overflow-y-scroll sticky top-12 left-0 ">
      <div className="p-5">
        <ul className="side-list">
          {SidebarList.map((item) => (
            <li key={item.title} className="flex items-center mb-5">
              <span className="mr-4">{item.icon}</span>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
        <button className="w-36 p-2 rounded-md font-medium bg-gray-200">
          Show more
        </button>
        <hr className="my-5" />

        <ul className="sidefriendlist">
          {SidebarFriends.map((item) => (
            <SidebarFriend key={item.name} user={item}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
