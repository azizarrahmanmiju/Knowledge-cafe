import { useEffect, useState } from "react";
import Blog from '../Blog/Blog'


import PropTypes from "prop-types";


const Blogs = ({ handleBookmark, handlereadas }) => {
    const [blogs, setblogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setblogs(data));
    }, [])
    return (
        <div className="w-[800px]">
            {
                blogs.map((blog, index) => {
                    return (
                        <Blog
                            key={index}
                            handleBookmark={handleBookmark}
                            handlereadas={handlereadas}
                            blog={blog}>

                        </Blog>
                    )
                })
            }

        </div >
    );
};
Blogs.propTypes = {

    handleBookmark: PropTypes.func
}

export default Blogs;