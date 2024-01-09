import { RightbarFriends } from "../data";
import OnlineFriends from "./OnlineFriends";

const Rightbar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        {" "}
        <div className="flex items-center">
          <img
            src="/assets/4.jpg"
            alt="birthday"
            className="w-10 h-10 object-cover mr-2"
          />
          <span className="font-light text-sm">
            <b>Hacker Lizard</b> and <b>3 other friends</b> have a birthday
            today.
          </span>
        </div>
        {/* TODO: remember to change this images!! */}
        <img
          src="/assets/2.jpg"
          alt="advertisement"
          className="w-full rounded-xl my-7"
        />
        <h4 className="mb-5">Online Friends</h4>
        <ul className="friendlist">
          {RightbarFriends.map((friend) => (
            <OnlineFriends key={friend.name} user={friend} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="text-lg font-medium mb-2">User information</h4>
        <div className="mb-7">
          <div className="mb-2">
            <span className="font-medium mr-4 text-gray-400">City:</span>
            <span className="font-light">Nairobi:</span>
          </div>

          <div className="rightbarinfoitem">
            <span className="font-medium mr-4 text-gray-400">From:</span>
            <span className="font-light">Naks Vegas:</span>
          </div>

          <div className="rightbarinfoitem">
            <span className="font-medium mr-4 text-gray-400">
              Relationship:
            </span>
            <span className="font-light">Single:</span>
          </div>
        </div>

        <h4 className="rigtbartitle">User Friends</h4>

        <div className="flex flex-wrap gap-5">
          {RightbarFriends.map((follower) => (
            <div
              key={follower.name}
              className="flex flex-col mb-5 cursor-pointer"
            >
              <img
                src={follower.image}
                alt=""
                className="w-24 h-24 object-cover rounded-md"
              />
              <span className="followingname">{follower.name}</span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="flex-4">
      <div className="pt-5 pr-5">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default Rightbar;
