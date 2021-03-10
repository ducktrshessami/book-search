module.exports = {
    title: {
        type: String,
        validate: [title => title, "Title cannot be null"]
    },
    authors: {
        type: Array,
        default: []
    },
    description: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        default: "https://via.placeholder.com/100x150"
    },
    link: String
};
