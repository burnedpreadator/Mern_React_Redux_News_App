import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            reuire: true
        },
        firstName: {
            type: String,
            reuire: true
        },
        lastName: {
            type: String,
            reuire: true
        },
        location: String,
        description: String,
        picturePath: String,
        userPicturePath: String,
        like: {
            type: Map,
            of: Boolean
        },
        comments: {
            types: Array,
            default: []
        }
    },
    {timestamps: true}
);

const Post = mongoose.model("Post", postSchema);
export default Post;
