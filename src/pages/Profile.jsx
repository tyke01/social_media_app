import { Feed, Rightbar, Sidebar, Topbar } from "../components";

const Profile = () => {
  return (
    <div>
      <Topbar />
      <div className=" flex">
        <Sidebar />

        <div className="flex-9 ">
          <div className="profilerighttop">
            <div className="h-72 relative">
              <img
                src="/assets/5.jpg"
                alt=""
                className="w-full h-64 object-cover"
              />
              <img
                src="/assets/2.jpg"
                alt=""
                className=" w-36 h-36 rounded-full object-cover absolute left-0 right-0 top-36 border-[3px] border-white m-auto"
              />
            </div>
            <div className="flex flex-col items-center justify-center my-4">
              <h4 className="text-2xl">Syb0rg Martian</h4>
              <p className="font-light">Hello fellow syb0rgs and humans.</p>
            </div>
          </div>
          <div className="flex">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
