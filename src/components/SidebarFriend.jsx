

const SidebarFriend = ({user}) => {
  return (
    <li className="flex items-center mb-3">
      <img
        src={user.image}
        alt="friend"
        className="w-8 h-8 rounded-full object-cover mr-2"
      />
      <span className="sidefriendname">{user.name}</span>
    </li>
  );
};

export default SidebarFriend;
