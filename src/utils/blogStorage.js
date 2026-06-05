const KEY = "blogs";
const rawData = require("../data/data.json");

export const getBlogs = () => {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : rawData;
};

export const saveBlogs = (blogs) => {
    localStorage.setItem(KEY, JSON.stringify(blogs));
};

export const addBlog = (blog) => {
    const blogs = getBlogs();
    blogs.push(blog);
    saveBlogs(blogs);
};

export const deleteBlog = (id) => {
    const blogs = getBlogs().filter((b) => b.id !== id);
    saveBlogs(blogs);
};

export const updateBlog = (updatedBlog) => {
    const blogs = getBlogs().map((b) =>
        b.id === updatedBlog.id ? updatedBlog : b
    );
    saveBlogs(blogs);
};