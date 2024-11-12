import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleBookmark, handlereadas }) => {
    const { id, name, postTitle, postDescription, postDate, readingTime, authorImg, postCoverImg } = blog;

    const [daySincePost, setDaySincePost] = useState(0);

    useEffect(() => {
        const postDateObj = new Date(postDate); // Convert postDate to Date object
        const today = new Date();
        const differenceInTime = today - postDateObj;
        const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
        setDaySincePost(differenceInDays);
    }, [postDate]);

    return (
        <div className="grid-col-1 mb-10 rounded-[20px] border p-2">
            <img className="rounded-[12px] w-full h-[500px]" src={postCoverImg} alt="Image" />
            <div className="flex  rounded-full items-center justify-between">
                <div className="flex items-center ml-4">
                    <img className="h-10 w-10 rounded-full border-blue-950" src={authorImg} alt="author" />
                    <div className="grid-cols-1 ml-4">
                        <h1 className="text-2xl font-bold">{name}</h1>
                        <p className="text-gray-600">{postDate} ({daySincePost} days ago)</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <h1>{readingTime} minute</h1>
                    <button onClick={() => handleBookmark(blog)}>
                        <CiBookmark />
                    </button>
                </div>
            </div>

            <div className="grid mx-4">
                <h1 className="text-3xl font-bold mb-2">{id + " " + postTitle}</h1>
                <p>{postDescription}</p>
                <button onClick={() => handlereadas(readingTime)} className="bg-gray-50 text-black shadow-md p-2 my-2 rounded-lg"> Marks as Read</button>
            </div>
        </div>
    );
};

// Corrected PropTypes definition
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func
};

export default Blog;
