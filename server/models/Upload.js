const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uploadSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
    },
    discription: {
        type: String,
    },
    name: {
        type: String,
    },
    birth: {
        type: String,
    },
    introduce: {
        type: String
    },
    images: {
        type: Array,
        default: []
    },
    year: {
        type: String
    },
    size: {
        type: String
    },
    meterial: {
        type: String
    },
    content: {
        type: String
    }
})

const Upload = mongoose.model('Upload', uploadSchema);

module.exports = { Upload }