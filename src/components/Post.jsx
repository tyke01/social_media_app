import { useState } from "react";

import { FaHeart } from "react-icons/fa";
import { MdMoreVert, MdThumbUp } from "react-icons/md";

import { Users } from "../data";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like-1 : like + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="w-full rounded-xl shadow-xl mt-8">
      <div className="p-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt="post"
              className=" w-8 h-8 rounded-full object-cover"
            />
            <span className="text-lg font-medium mx-2">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="text-xs">{post.date}</span>
          </div>
          <div className="posttopright">
            <MdMoreVert />
          </div>
        </div>

        <div className="my-5">
          <span className="post-text">{post.desc} </span>
          <img
            src={post.image}
            alt="post"
            className="mt-5 w-full max-h-[500px] object-contain"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MdThumbUp
              className="text-blue-500 text-xl mr-1 cursor-pointer"
              onClick={likeHandler}
            />

            {/* <img src="" alt="" /> */}
            <FaHeart
              className="text-red-500 text-xl  mr-1 cursor-pointer"
              onClick={likeHandler}
            />

            <span className="text-sm">{like} people like it </span>
          </div>
          <div className="potbottomright">
            <span className="cursor-pointer border-b text-sm">
              {post.comments} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
