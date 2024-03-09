const mongoose = require('mongoose');

const urlSChema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visitHistory: [{timestamp:{type: Number}}],
},
  {timstamps: true}
);

const URL = mongoose.model("url",urlSChema);

module.exports = URL;