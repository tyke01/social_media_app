import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  MdChat,
  MdNotifications,
  MdOutlineMenu,
  MdPerson,
} from "react-icons/md";

const Topbar = () => {
  const [open, setOpen] = useState(false);

  //   const handleOpen = () => {};
  return (
    <div className="h-12 w-full bg-[#1877f2] flex items-center sticky top-0 z-50">
      <div className=" mr-5 lg:flex-3">
        <a href="/" className="text-2xl ml-2 lg:ml-5 font-bold text-white">
          Sybo_Social
        </a>
      </div>

      <div className=" flex-5 mx-2 ">
        <div className="w-full lg:w-full h-7 bg-white rounded-2xl flex items-center">
          <FaSearch className="text-xl ml-2" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-[80%] lg:w-[70%] ml-2"
          />
        </div>
      </div>

      {/* Mobile design 👇 */}
      <div className="lg:hidden relative mx-6">
        <div onClick={() => setOpen(!open)}>
          <MdOutlineMenu className="text-white text-3xl cursor-pointer" />
        </div>
        {open && (
          <div className="absolute bg-slate-300 w-64 h-56 top-10 -right-4 p-2 rounded-lg">
            <div className="flex gap-4 mb-2 cursor-pointer">
              <img
                src="/avatar.png"
                alt="profile"
                className="w-8 h-8 rounded-full object-cover cursor-pointer"
              />
              <h1 className="text-lg font-bold text-[#1877f2]">
                Syborg martian
              </h1>
            </div>

            <hr className="h-[1px] w-full bg-[#1877f2] border-none" />

            <div className="flex flex-col ">
              <div className="flex flex-col font-bold  text-[#1877f2]">
                <span className="cursor-pointer text-lg">Homepage</span>
                <span className="cursor-pointer text-lg">Timeline</span>
              </div>
            </div>
            <hr className="h-[1px] w-full bg-[#1877f2] border-none" />

            <div className="flex flex-col gap-2 text-[#1877f2] mt-3 text-2xl">
              <div className="relative flex gap-5 items-center mr-4 cursor-pointer ">
                <MdPerson />
                <span className="text-base">Profile</span>
                <span className="absolute text-xs bg-red-600 w-3 h-3 flex items-center justify-center rounded-full -top-1 left-3 ">
                  1
                </span>
              </div>
              <div className="relative flex gap-5 items-center mr-4 cursor-pointer">
                <MdChat />
                <span className="text-base">Chat</span>
                <span className="absolute text-xs bg-red-600 w-3 h-3 flex items-center justify-center rounded-full  -top-1 left-3">
                  2
                </span>
              </div>
              <div className="relative flex gap-5 items-center mr-4 cursor-pointer">
                <MdNotifications />
                <span className="text-base">Notifications</span>
                <span className="absolute text-xs bg-red-600 w-3 h-3 flex items-center justify-center rounded-full  -top-1 left-3">
                  1
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Mobile nav 👆 */}

      <div className="flex-4  hidden lg:flex items-center justify-around text-white">
        <div className="flex items-center">
          <span className="link">Homepage</span>
          <span className="link">Timeline</span>
        </div>
        <div className="flex items-center">
          <div className="iconitem">
            <MdPerson />
            <span className="counter">1</span>
          </div>
          <div className="iconitem">
            <MdChat />
            <span className="counter">2</span>
          </div>
          <div className="iconitem">
            <MdNotifications />
            <span className="counter">1</span>
          </div>
        </div>
        {/*  */}
        <img
          src="/avatar.png"
          alt="profile"
          className="w-8 h-8 rounded-full object-cover cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Topbar;
