import { useEffect, useState } from "react";
import "../styles/listing.css";
import { getBlogs } from "../utils/blogStorage";
import Header from "../components/Header";
import BlogCard from "../components/BlogCard";

export default function BlogList() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs(getBlogs());
    }, []);

    return (
        <>
            <Header />

            <section className="blog-hero">
                <h1>Blogs</h1>
            </section>

            <main className="main-layout">
                <div className="blog-grid">
                    {blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
                </div>
            </main>
        </>
    );
}