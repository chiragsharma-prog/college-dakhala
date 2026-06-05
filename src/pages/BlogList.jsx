import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/listing.css";
import { getBlogs } from "../utils/blogStorage";

export default function BlogList() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs(getBlogs());
    }, []);

    return (
        <>
            <header className="navbar">
                <div className="nav-container">

                    <a href="#" className="logo">
                        <img width="120px" height="90px"
                             src="https://www.collegedakhla.com/assets/front/images/resources/cd-logo-hd.svg"/>
                    </a>

                    <nav className="nav-links">
                        <a href="#">Home</a>
                        <a href="#">Colleges</a>
                        <a href="#">Courses</a>
                        <a href="#" className="active">Blogs</a>
                        <a href="#">Contact</a>
                    </nav>
                    <button className="nav-container btn-primary" onClick={() => window.location.href = "/admin"}>
                        Admin
                    </button>
                </div>

            </header>

            <section className="blog-hero">
                <h1>Blogs</h1>
            </section>

            <main className="main-layout">
                <div className="blog-grid">
                    {blogs.map((blog) => (
                        <article className="blog-card" key={blog.id}>
                            <Link to={`/${blog.slug}`}>
                                <div className="card-img-wrapper">
                                    <img src={blog.src} alt={blog.title} />
                                    <span className="tag">
                    {new Date(blog.date).toDateString()}
                  </span>
                                </div>

                                <div className="card-content">
                                    <div className="meta-info">
                                        <span>{blog.tag}</span>
                                        <span>{blog.reading_time}</span>
                                    </div>

                                    <h2>{blog.title}</h2>
                                    <p>Read more...</p>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </main>
        </>
    );
}