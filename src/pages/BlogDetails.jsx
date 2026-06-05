import { useParams } from "react-router-dom";
import { getBlogs } from "../utils/blogStorage";
import Header from "../components/Header";
import "../styles/detail.css";

export default function BlogDetails() {
    const { slug } = useParams();

    const blog = getBlogs().find((b) => b.slug === slug);

    if (!blog) {
        return <h2>Blog not found</h2>;
    }

    return (
        <>
            <Header />
            <a href="/" className="back-link">
            <strong> &larr; Back to Blogs</strong></a>
        <main className="container main-layout">
            <article className="blog-post">
                <h1 className="post-title">{blog.title}</h1>

                <img className="blog-img" src={blog.src} alt={blog.title} />

                <div className="post-meta">
                    <span><b>Published By:</b> {blog.tag}</span>
                    <span><b>Date:</b> {new Date(blog.date).toDateString()}</span>
                </div>

                {/* IMPORTANT: render HTML description */}
                <div
                    className="post-content"
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                />
            </article>
        </main>
              </>
    );
}