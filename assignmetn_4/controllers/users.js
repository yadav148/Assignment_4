const blog = require('../schema/blogschema');

const getBlog = async (req, res) => {
    const blog = await blog.find();
    res.json(blog);
};

const postBlog = async (req, res) => {
    const blog = await blog.create(req.body);
    res.json(blog);
};

const getBlogById = async (req, res) => {
    const { id: blogID } = req.params;
    const user = await blogSchema.findOne({ id: blogID });
    if (blog) res.send({ blog });
    else {
        res.status(404).json({
            "response": "Blog not found"
        })
    }
};

const updateBlogById = async (req, res) => {
    const { id: blogID } = req.params;
    const blog = await blog.findOneAndUpdate({ id: blogID }, req.body, {
        new: true,
        runValidators: true
    });
    if (!blog) {
        return res.status(404).json({
            message: `No Blog with Id: ${blogID}`
        });
    }
    res.status(200).json({
        message: "Blog Updated",
        blog
    });
};

const deleteBlogById = async (req, res) => {
    const { id: blogID } = req.params;
    const blog = await blogSchema.findOneAndDelete({ id: blogID });
    if (blog) res.send({ blog });
    else {
        res.status(404).json({
            "response": "Blog not found"
        })
    }
};

module.exports = {
    getBlog,
    postBlog,
    getBlogById,
    updateBlogById,
    deleteBlogById,

};
