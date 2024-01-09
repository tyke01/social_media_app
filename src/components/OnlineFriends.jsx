

const OnlineFriends = ({ user }) => {
  return (
    <li key={user.name} className="flex items-center mb-4">
      <div className="m-2 relative">
        <img
          src={user.image}
          alt="users"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="w-3 h-3 rounded-full bg-green-500 absolute top-0 right-0 border-2 border-white"></span>
      </div>
      <span className="text-semibold">{user.name}</span>
    </li>
  );
};

export default OnlineFriends;
