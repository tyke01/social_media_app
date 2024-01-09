import {
  MdEmojiEmotions,
  MdFolderOpen,
  MdLabel,
  MdLocationOn,
} from "react-icons/md";

const Share = () => {
  return (
    <div className="w-full h-44 rounded-lg shadow-xl">
      <div className="p-3">
        <div className="flex items-center">
          <img
            src="/assets/6.png"
            alt="person"
            className="w-12 h-12 rounded-full object-cover mr-2"
          />
          <input
            type="text"
            placeholder="What's in your mind viki?"
            className="outline-none w-4/5 border-b border-[#1877f2]"
          />
        </div>
        <hr className="m-4" />
        <div className="flex flex-col items-center justify-center">
          <div className="flex ml-4">
            <div className="flex items-center mr-4 cursor-pointer">
              <MdFolderOpen className="shareicon text-red-600" />
              <span className="share-text">Photo or Video</span>
            </div>
            <div className="flex items-center mr-4 cursor-pointer">
              <MdLabel className="shareicon text-blue-600" />
              <span className="share-text ">Tag</span>
            </div>
            <div className="flex items-center mr-4 cursor-pointer">
              <MdLocationOn className="shareicon text-green-600" />
              <span className="share-text ">Location</span>
            </div>
            <div className="flex items-center mr-4 cursor-pointer">
              <MdEmojiEmotions className="shareicon text-yellow-500" />
              <span className="share-text">Feelings</span>
            </div>
          </div>
          <button className="p-2 rounded-lg bg-green-600 font-semibold  text-white text-sm ml-auto mr-10 mt-3 hover:bg-green-500">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
