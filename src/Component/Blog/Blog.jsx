import PropTypes from "prop-types";

const Blog = ({ blog }) => {

    // eslint-disable-next-line react/prop-types
    const { id, name, postTitle, postDescription, postDate, readingTime, } = blog;
    console.log(blog);

    return (
        <div className="p-10">
            <h1 className="text-black text-2xl">{id}</h1>

        </div>
    );


};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired,



}

export default Blog;
