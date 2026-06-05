import { useEffect, useState } from "react";
import {
    getBlogs,
    addBlog,
    deleteBlog,
    updateBlog,
} from "../utils/blogStorage";

export default function Admin() {
    const [blogs, setBlogs] = useState([]);
    const [editId, setEditId] = useState(null);

    const [form, setForm] = useState({
        title: "",
        slug: "",
        src: "",
        tag: "",
        date: "",
        reading_time: "",
        description: "",
    });

    useEffect(() => {
        setBlogs(getBlogs());
    }, []);

    const refresh = () => setBlogs(getBlogs());

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editId) {
            updateBlog({ ...form, id: editId });
            setEditId(null);
        } else {
            addBlog({
                ...form,
                id: Date.now(),
            });
        }

        setForm({
            title: "",
            slug: "",
            src: "",
            tag: "",
            date: "",
            reading_time: "",
            description: "",
        });

        refresh();
    };

    const handleEdit = (blog) => {
        setForm(blog);
        setEditId(blog.id);
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Admin Panel</h2>

            {/* FORM */}
            <form onSubmit={handleSubmit}>
                <input name="title" value={form.title} placeholder="Title" onChange={handleChange} />
                <input name="slug" value={form.slug} placeholder="Slug" onChange={handleChange} />
                <input name="src" value={form.src} placeholder="Image URL" onChange={handleChange} />
                <input name="tag" value={form.tag} placeholder="Tag" onChange={handleChange} />
                <input name="date" type="date" value={form.date} onChange={handleChange} />
                <input name="reading_time" value={form.reading_time} placeholder="Reading Time" onChange={handleChange} />

                <textarea
                    name="description"
                    value={form.description}
                    placeholder="HTML Description"
                    onChange={handleChange}
                />

                <button type="submit">
                    {editId ? "Update Blog" : "Add Blog"}
                </button>
            </form>

            <hr />

            {/* BLOG LIST */}
            {blogs.map((blog) => (
                <div key={blog.id} style={{ marginBottom: 20 }}>
                    <h3>{blog.title}</h3>

                    <button onClick={() => handleEdit(blog)}>Edit</button>
                    <button onClick={() => deleteBlog(blog.id) || refresh()}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}