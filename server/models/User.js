const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true,
        min: 2,
        max: 25,
    },
    lastname: {
        type: String,
        require: true,
        min: 2,
        max: 25,
    },
    gender: {
        type: String,
        max: 6,
        require: true,
    },
    birthdate: {
        type: Date,
        require: true,
    },
    email: {
        type: String,
        max: 80,
        require: true,
        unique: true,
    },
    phone: {
        type: String,
        max: 20,
        require: true,
    },
    bio: {
        type: String,
        max: 500,
        require: false,
    },
    photo: {
        type: String,
        max: 45,
        require: false,
    },
    password: {
        type: String,
        require: true,
        min: 8,
        max: 300,
    },
    document: {
        type: String,
        require: false,
        min: 2,
        max: 45,
    },
    validemail: {
        type: Boolean,
        require: false,
        default: false,
    },
    validphone: {
        type: Boolean,
        require: false,
        default: false,
    },
    validdoc: {
        type: Boolean,
        require: false,
        default: false,
    },
    doctype: {
        type: String,
        require: false,
        min: 2,
        max: 20,
    },
    fblink: {
        type: String,
        require: false,
        min: 8,
        max: 45,
    },
    accounttype: {
        type: String,
        require: false,
    },
    accountstatus: {
        type: String,
        require: false,
        default: "ACTIVE",
    },
},
{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
