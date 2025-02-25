const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    nickname: {
        type: String,
        default: ""
    },
    reach: {
        type: String
    },
    wins: {
        type: Number,
        default: 0
    },
    losses: {
        type: Number,
        default: 0
    },
    KOs: {
        type: Number,
        default: 0
    },
    totalFights: {
        type: Number,
        default: 0
    },
    style: {
        type: String,
    },
    bio: {
        type: String,
        maxLength: 140
    },
    image: {
        type: Schema.Types.ObjectId,
        ref: "ImageUpload",
    },
});
const Profile = mongoose.model('profile', profileSchema);
module.exports = { Profile };