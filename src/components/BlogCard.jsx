import { Link } from "react-router-dom";
import "../styles/listing.css";

const BlogCard = ({blog}) => {
    return (   
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
    );
}
export default BlogCard;