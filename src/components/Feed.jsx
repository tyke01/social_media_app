import { Posts } from "../data"

import Post from "./Post"
import Share from "./Share"

const Feed = () => {
  return (
    <div className="flex-5">
        <div className="p-5">
            <Share />
            {Posts.map((post) => (

            <Post key={post.id} post={post} />
            ))}
            
        </div>
    </div>
  )
}

export default Feed