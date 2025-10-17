const Blog = require('../schema/blogschema');

const getBlog = async (req, res) => {
    const blogs = await Blog.find();
    res.json(blogs);
};

const postBlog = async (req, res) => {
    const newblog = await Blog.create(req.body);
    res.json(newblog);
};

const getBlogById = async (req, res) => {
    try {
        const {id} = req.params;
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ response: "Blog not found" });
        }
        res.json(blog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



const deleteBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBlog = await Blog.findByIdAndDelete(id);
        if (!deletedBlog) {
            return res.status(404).json({ response: "Blog not found" });
        }
        res.json({ message: "Blog Deleted", deletedBlog });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const updateBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });
        if (!updatedBlog) {
            return res.status(404).json({ message: `No Blog with Id: ${id}` });
        }
        res.json({ message: "Blog Updated", updatedBlog });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getBlog,
    postBlog,
    getBlogById,
    updateBlogById,
    deleteBlogById,
};