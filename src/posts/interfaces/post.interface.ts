import Comment from "./comments.interface"

interface PostInterface{
    message: string,
    user_id: string,
    like_count?: number,
    comments?:[Comment]
}
export default PostInterface