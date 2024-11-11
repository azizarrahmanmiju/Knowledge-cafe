import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    const [blogs, setblogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setblogs(data));
    }, [])
    return (
        <div className="grid">
            {
                blogs.map((blog, index) => {
                    console.log(blog);
                    return (
                        <Blog key={index} blog={blog} ></Blog>
                    )
                })
            }
        </div >
    );
};

export default Blogs;